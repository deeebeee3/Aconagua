var async = require('async')
,	fs = require('fs')
,	gutil = require('gulp-util')
,	path = require('path')
,	shell = require('shelljs')
,	nconf = require('nconf')
,	_ = require('underscore')
;

var credentials_inquirer = require('../credentials-inquirer')
,	extension_record_helper = require('../extension-record-helper.js')
,	skins_record_helper = require('../skin-record-helper.js')
,	extension_deploy_inquirer = require('./deploy-inquirer.js')
,	prepare_deploy_folder = require('./prepare-deploy-folder.js')
,	ConversionTool = require('../conversion-tool')
,	FileCabinet = require('../../library/file-cabinet')
,	RequestHelper = require('../client-script/RequestHelper')
,	FileServiceClient = require('../client-script/FileServiceClient')
,	WebsiteService = require('../website-service')
,	Progress = require('progress')
,	Uploader = require('ns-uploader')
;

var extension_deployer = {

	deploy: function deploy(done)
	{
		var manifest_path = path.join(nconf.get('folders:theme_path'), 'manifest.json')
		,	manifest = JSON.parse(fs.readFileSync(manifest_path).toString())
		,	passInitialData = function passInitialData(first_cb)
			{
				first_cb(null, {manifest: manifest, manifest_path: manifest_path});
			}
		;

		var waterfall = [
				passInitialData
			,	credentials_inquirer.getCredentials
			,	extension_record_helper.checkExtensionBundle
			,	extension_deploy_inquirer.inquireNewExtensionData
			,	prepare_deploy_folder.prepareDeployFolder
			,	extension_record_helper.checkExistingExtension
			,	extension_deployer.createExtensionDeployFolder
			,	extension_deployer.uploadExtension
			,	extension_deployer.getManifestFileId
			,	extension_record_helper.updateExtensionRecord
			,	extension_deployer.openActivationWizard
			,	extension_deployer.updateLocalEnvironment
		];

		if(nconf.get('extensionMode'))
		{
			waterfall.splice( 0, 1, extension_deploy_inquirer.inquireDeployExtension);
		}

		//after update theme record update skins records
		if(!nconf.get('extensionMode'))
		{
			waterfall.splice( waterfall.length - 2, 0, skins_record_helper.syncSkinsRecords);
		}

		//result contains the credentials and application_manifest
		async.waterfall(waterfall, function (err)
		{
			if (err)
			{
				var error = (err.error && err.error.message) || err;

				if(error === 'ETIMEDOUT')
				{
					error = 'Network Error. Please check your Internet Connection.';
				}

				var task_name = nconf.get('extensionMode') ? 'extension:deploy' : 'theme:deploy';

				done(new gutil.PluginError('gulp ' + task_name, error));
				return;
			}

			done(null, {});
			return;
		});
	}

,	createExtensionDeployFolder: function createExtensionDeployFolder(data, cb)
	{
		var credentials = nconf.get('credentials')
		,	file_service_get_url = WebsiteService.formatUrl(credentials, { script: nconf.get('script:file_service'), method: 'GET'})
		,	file_service_create_url = WebsiteService.formatUrl(credentials, { script: nconf.get('script:file_service'), method: 'POST'})
		,	config_path = nconf.get('config_path')
		;

		RequestHelper.setCredentials(credentials);

		var createRemoteDeployFolder = function createRemoteDeployFolder()
		{
            FileServiceClient.getInstance()
			.createFolder(file_service_create_url, nconf.get('folders:extensions_dest_name'), nconf.get('folders:extmech_parent'))
			.then(function(response)
			{
				gutil.log(gutil.colors.green('Extensions Deploy folder: SuiteScripts/' +
					nconf.get('folders:extensions_dest_name') +
					'. ID ' + response.result.folder_id));

				nconf.set('folders:extensions_dest', response.result.folder_id);
				var config_content = JSON.parse(fs.readFileSync(config_path).toString());
				config_content.folders = nconf.get('folders');
				fs.writeFileSync(config_path, JSON.stringify(config_content, null, 4));

				cb(null, data);
			})
			.catch(function(err)
			{
				cb(err);	
			});
		};

		if(nconf.get('folders:extensions_dest'))
		{
			FileServiceClient.getInstance()
			.getFolder(file_service_get_url, nconf.get('folders:extensions_dest'))
				.then(function(response)
				{
					if(!response.result.folder || response.result.folder.name !== nconf.get('folders:extensions_dest_name'))
					{
						createRemoteDeployFolder();
					}
					else
					{
						cb(null, data);
					}
				})
				.catch(function(err)
				{
					if(err !== 'That record does not exist.')
					{
						return cb(err);
					}
					createRemoteDeployFolder();
				});
		}
		else
		{
			createRemoteDeployFolder();
		}

	}

,	uploadExtension: function uploadExtension(data, cb)
	{
		var credentials = nconf.get('credentials');

		var config = {
			targetFolderId: nconf.get('folders:extensions_dest')
		,	sourceFolderPath: nconf.get('folders:deploy')
		};

		var t0 = new Date().getTime();
		var uploader = new Uploader(credentials);

		var bar;
		uploader.addProgressListener(function(actual, total)
		{
			if(!bar)
			{
				bar = new Progress('Uploading [:bar] :percent', {
					complete: '='
				,	incomplete: ' '
				,	width: 50
				,	total: total
				});
			}
			bar.tick(1);
		});

		uploader
		.main(config)
		.then(function (ns_upload_manifest)
		{
			var extension_folder = _.find(ns_upload_manifest, function(folder)
			{
				var aux = [
					data.new_manifest.vendor
				,	data.new_manifest.name + '@' + data.new_manifest.version
				].join('\/');
				
				aux = aux.replace(/\./g, '\.');
				
				return (new RegExp(aux + '$')).test(folder.path);
			});
			
			data.extension_folder_id = extension_folder && extension_folder.internalId;
			
			var took = ((new Date().getTime() - t0)/1000/60) + '';
			took = took.substring(0, Math.min(4, took.length)) + ' minutes';
			gutil.log(gutil.colors.green('\nDeploy ' + data.new_manifest.name + ' files finished, took ' + took));
			cb(null, data);
		})
		.catch(function(err)
		{
			gutil.log('Error uploading files.\nDeploy aborted.');
			cb(err);
		});
	}

,	getManifestFileId: function getManifestFileId(data, cb)
	{
		gutil.log(gutil.colors.green('Getting manifest file id for ' + data.manifest.type + '...'));

		if(data.extension_folder_id)
		{
			FileCabinet.setCredentials(nconf.get('credentials'));

			FileCabinet.searchFile(
				{
					name: 'manifest.json'
				,	folder: data.extension_folder_id
				}
			,	function searchExtensionManifestDone(err, response)
				{
					if(err)
					{
						return cb(err);
					}

					if(response.records.length > 0)
					{
						response = response.records[0];
						data.manifest_file_id = response.internalId + '';
						
						cb(null, data);
					}
					else
					{
						cb(new Error('Could not find new manifest.json uploaded in folder ' + data.extension_folder_id + '.'));
					}

				}
			);
		}
		else
		{
			data.manifest_file_id = data.extension_record.manifest_id;
			cb(null, data);
		}
	}

,	updateLocalEnvironment: function updateLocalEnvironment(data, cb)
	{
		gutil.log(gutil.colors.green('Updating your local environment to continue working with ' + data.new_manifest.name + '/' + data.new_manifest.version));

		fs.writeFileSync(data.manifest_path, JSON.stringify(data.new_manifest, null, 4));

		if(data.new_manifest.name !== data.manifest.name)
		{
			var ext_folder = nconf.get('extensionMode') ? data.ext_folder : nconf.get('folders:theme_path');

			shell.cp('-rf', ext_folder, path.join(nconf.get('folders:source:source_path'), data.new_manifest.name));
			shell.rm('-rf', ext_folder);

			if(nconf.get('extensionMode'))
			{
				ConversionTool.updateConfigPaths(data.new_manifest,
					{
						replace: true
					,	replace_path: nconf.get('folders:source:source_path') + '/' + data.manifest.name
				});
			}
			else
			{
				ConversionTool.updateConfigPaths(data.new_manifest);
			}
		}

		cb(null, data);
	}

,	openActivationWizard: function openActivationWizard(data, cb)
	{
		// recommends the user to open a browser to finish activation
		var credentials = nconf.get('credentials');

		gutil.log(gutil.colors.yellow('\n\n                             IMPORTANT NOTE:                             ' +
									'\n\nThe deploy process is not done until you finished the activation process in the Netsuite ERP.' +
									'\nGo to system.netsuite.com and open the Extension Management Panel in Setup > SuiteCommerce Advanced > Extension Management.' +
									'\n\nPlase follow the next steps:' +
									'\n1- Select Website and domain ' + credentials.domain +
									'\n2- Activate the ' + data.manifest.type + ': ' + data.new_manifest.name + ' - ' + data.new_manifest.version + '. Vendor ' + data.new_manifest.vendor + '.'+
									'\nThank you.'));
		cb(null, data);
	}
};

module.exports = {
	deploy: extension_deployer.deploy
};
