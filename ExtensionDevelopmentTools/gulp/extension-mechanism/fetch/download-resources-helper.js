'use strict';

var gutil = require('gulp-util')
,	nconf = require('nconf')
,	_ = require('underscore')
;

var ConversionTool = require('../conversion-tool')
,	RecordHelper = require('../extension-record-helper')
,	RequestHelper = require('../client-script/RequestHelper')
,	ResourcePromisesHelper = require('./resource-promises-helper')
,	WebsiteService = require('../website-service')
;

var DownloadResourcesHelper = {

	getManifestFilePromises: function getManifestFilePromises(manifest, cb)
	{
		var isFetchExtension = manifest.type === 'extension' && nconf.get('fetchConfig:extension') && _.contains(nconf.get('fetchConfig:extension').split(','), manifest.name)
		,	self = this
		,	promise_result
		;

		if(manifest.type === 'theme' || isFetchExtension)
		{
			if(isFetchExtension)
			{
				promise_result = RecordHelper.searchExtensions({manifest: manifest})
					.then(function handleBundleCheckResult(result)
					{
						if(result.extension_record && result.has_bundle)
						{
							gutil.log(gutil.colors.yellow('Cannot fetch packaged bundle extension ' + manifest.name +'.\n'  +
								'\tYou can only fetch custom extensions that are locally in your file cabinet.\n'));
							
							return [];
						}
						else
						{
							ConversionTool.updateConfigPaths(manifest);
							return self.downloadFiles(manifest);
						}
						
					})
					.catch(function(error)
					{
						cb(error);
					});
			}
			else
			{
				var file_promises = this.downloadFiles(manifest);
				promise_result = Promise.resolve(file_promises);
			}

		}
		else
		{
			promise_result = Promise.resolve([]);
		}

		return promise_result;
	}

,	downloadFiles: function downloadFiles(manifest)
	{
		var credentials = nconf.get('credentials');
		RequestHelper.setCredentials(credentials);

		var allowed_resources = nconf.get('application:application_manifest').extensible_resources
		,	file_promises = [];

		_.each(manifest, function(resource_data, resource)
		{
			if(_.contains(allowed_resources, resource))
			{
				var message_finished = 'Finished downloading ' + resource + ' of ' + manifest.type + ': ' +  manifest.name + '...'
				,	resource_promises;
				
				var file_service_url = WebsiteService.formatUrl(
						nconf.get('credentials')
					,	{ 
						 	script: nconf.get('script:file_service')
						 ,	method: 'POST'
						}
					);

				switch(resource)
				{
					case 'templates':
					case 'javascript':

						resource_promises = ResourcePromisesHelper.getFilesPromisesForAppResource({
								file_service_url: file_service_url
							,	manifest: manifest
							,	resource: resource
							,	message_finished: message_finished
							});

						file_promises = file_promises.concat(resource_promises);
						break;

					case 'sass':
					case 'ssp-libraries':
					case 'configuration':

						resource_promises = ResourcePromisesHelper.getFilesPromisesForResource({
								file_service_url: file_service_url
							,	manifest: manifest
							,	resource: resource
							,	message_finished: message_finished
							});

						file_promises.push(resource_promises);
						break;

					case 'assets':

						resource_promises = ResourcePromisesHelper.getAssetFilesPromises({
								file_service_url: file_service_url
							,	manifest: manifest
							,	resource: resource
							,	message_finished: message_finished
							});

						file_promises.push(resource_promises);
						break;
				}
			}
		});

		return file_promises;
	}
};

module.exports = DownloadResourcesHelper;