'use strict';

var gulp = require('gulp')
,	gutil = require('gulp-util')
,	nconf = require('nconf')
,	map = require('map-stream')
,	path = require('path')
,	shell = require('shelljs')
,	_ = require('underscore')
;

var ManifestManager = require('../manifest-manager');

var prepare_deploy_folder = {

	prepareDeployFolder: function prepareDeployFolder(data, cb)
	{
		gutil.log(gutil.colors.green('Preparing content to deploy in ' + nconf.get('folders:deploy') + '...'));

		try
		{
			var new_manifest = {
				name: data.manifest.name
			,	fantasyName: data.manifest.fantasyName
			,	vendor: data.manifest.vendor
			,	type: data.manifest.type
			,	cct: data.manifest.cct
			,	target: data.manifest.target
			,	version: data.manifest.version
			,	description: data.manifest.description
			,	assets: data.manifest.assets
			,	configuration: data.manifest.configuration
			,	templates: data.manifest.templates
			,	sass: data.manifest.sass
			,	javascript: data.manifest.javascript
			,	'ssp-libraries': data.manifest['ssp-libraries']
			};

			if(data.new_extension)
			{
				var new_targets = [];

				_.each(data.new_extension.targets, function(target_id)
				{
					var target_obj = _.find(data.targets, function(target)
						{
							return target.target_id === target_id;
						});

					if(target_obj)
					{
						new_targets.push(target_obj.name);
					}
				});

				new_manifest.name = data.new_extension.name;
				new_manifest.fantasyName = data.new_extension.fantasy_name;
				new_manifest.vendor = data.new_extension.vendor;
				new_manifest.version = data.new_extension.version;
				new_manifest.target = new_targets.join(',');
				new_manifest.description = data.new_extension.description;
			}

			var deploy_path = path.join(nconf.get('folders:deploy'), new_manifest.vendor, new_manifest.name + '@' + new_manifest.version)
			,	sources = nconf.get('deploy_config:source')
			,	src_folder = data.ext_folder
			, 	src_paths = []
			;

			if(sources)
			{
				if(data.new_extension)
				{
					gutil.log(gutil.colors.yellow('Ignoring the use of --source parameter when creating a new extension. Deploying all the content...'));
					src_paths.push('*');
				}
				else
				{
					src_paths.push('manifest.json');

					_.each(sources, function(source)
					{
						switch(source)
						{
							case 'templates':
								src_paths.push(path.join('**', '*.tpl'));
								break;

							case 'sass':
								src_paths.push(path.join('**', '*.scss'));
								break;

							case 'assets':
								var asset_files = ManifestManager.getAssetFilesForManifest(data.manifest.name);
								src_paths = src_paths.concat(asset_files);
								break;

							case 'configuration':

								var conf_files =  data.manifest.configuration && data.manifest.configuration.files.length ? data.manifest.configuration.files : [];
								src_paths = src_paths.concat(conf_files);
								break;

							case 'ssp-libraries':
								
								var ssp_lib_files = data.manifest['ssp-libraries'] && data.manifest['ssp-libraries'].files.length ? data.manifest['ssp-libraries'].files : [];
								src_paths = src_paths.concat(ssp_lib_files);
								break;

							case 'javascript':

								var js_files = ManifestManager.getJsFilesForManifest(data.manifest.name);
								src_paths = src_paths.concat(js_files);
								break;

							case 'services':
								src_paths.push(path.join('**', '*.ss'));
								break;
						}
					});
				}
			}
			else
			{
				src_paths.push('*');
			}

			shell.rm('-rf', nconf.get('folders:deploy') + '/*');

			gulp.src(src_paths, {cwd: src_folder + '/**'})
			.pipe(map(function(file, done)
			{
				if(path.basename(file.path) === 'manifest.json')
				{
					file.contents = new Buffer(JSON.stringify(new_manifest, null, 4));
				}

				done(null, file);
			}))
			.pipe(gulp.dest(deploy_path, {mode: '0777'}))
			.on('end', function()
				{
					data.new_manifest = new_manifest;
					cb(null, data);
				}
			)
			.on('error', function(err)
				{
					cb(err);
				}
			);
		}
		catch(err)
		{
			cb(err);
		}
	}
};

module.exports = prepare_deploy_folder;