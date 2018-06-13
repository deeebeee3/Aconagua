'use strict';

var connect = require('./connect')
,	gulp = require('gulp')
,	sourcemaps = require('gulp-sourcemaps')
,	path = require('path')
,	del = require('del')
,	fs = require('fs')
,   shell = require('shelljs')
,	concat = require('gulp-concat')
,	map = require('map-stream')
,	_ = require('underscore')
;

var manifest_manager = require('../extension-mechanism/manifest-manager')
,	watch_manager = require('../extension-mechanism/watch-manager')
,	nconf = require('nconf')
;

var javascript_destination = path.join(nconf.get('folders:output'), 'extensions')
,	application_manifest = nconf.get('application:application_manifest')
,	entry_points
,	js_dest = []
;

if(application_manifest)
{
	var entry_points = application_manifest.application;
	_.each(entry_points, function(application)
	{
		js_dest.push(path.join(javascript_destination, application + '_ext.js'));
	});
}

var javascript_files = [];

function generateGetAssetsPathFunction(manifest)
{
	var assets_paths = [
		'extensions'
	,	manifest.vendor
	,	manifest.name
	,	manifest.version
	,	''
	].join('/');

	var function_string = 'function getExtensionAssetsPath(asset){\n';
	function_string += '\treturn \'' + assets_paths + '\' + asset;\n';
	function_string += '}\n\n';
	
	return function_string;
}
	
function generateDefinesSection(manifests, application, dest_file)
{
	var content = 'var extensions = {};\n\n'
	,	app_javascript_files = [];
				
	_.each(manifests, function(manifest)
	{
		if(manifest.javascript && manifest.javascript.application)
		{
			var javascript_data = manifest.javascript.application[application];

			if( javascript_data && _.isArray(javascript_data.files))
			{
				if(manifest.javascript.entry_points[application])
				{
					var files_extension = javascript_data.files
					,	extension_name = [manifest.vendor, manifest.name, manifest.version].join('.')
					,	entry_point = manifest.javascript.entry_points[application]
					,	entry_point_content = '';

					var extension_content = 'extensions[\'' + extension_name + '\'] = function(){\n\n';
					extension_content += generateGetAssetsPathFunction(manifest);

					files_extension = _.map(files_extension, function(file)
					{
						return path.join(nconf.get('folders:source:source_path'), manifest.name, file);
					});
					
					_.each(files_extension, function(file_path)
					{
						if(file_path.endsWith(path.join(entry_point)))
						{
							entry_point_content = shell.cat(file_path) + '\n\n';
						}
						else
						{	
							extension_content += shell.cat(file_path) + '\n\n';
						}
					});
					
					app_javascript_files = _.union(app_javascript_files, files_extension);

					//add entry point code last
					extension_content += entry_point_content + '};\n\n';
					content += extension_content;
				}
				else
				{
					throw new Error('Manifest ' + manifest.name + ': missing entry point for ' + application);
				}
			}	
		}
	});
	
	javascript_files = _.union(javascript_files, app_javascript_files);

	//var file_name = path.basename(dest_file, '.js');
	//content = '//# sourceMappingURL=' + file_name + '.map\n' + content;
	shell.ShellString(content).toEnd(dest_file);
	
	//It was commented because doesn't work properly
	//generateSourceMaps(app_javascript_files, dest_file);
}

function generateSourceMaps(files_extension, dest_file)
{
	var dest_dir = path.dirname(dest_file)
	,	file_name = path.basename(dest_file, '.js');
	
	gulp.src(files_extension)
	.pipe(sourcemaps.init({largeFile: true}))
	.pipe(concat(file_name))
	.pipe(sourcemaps.write('.'))
	.pipe(map(function(file, cb)
	{
		if(path.basename(file.path, '.js') === file_name)
		{
			return cb(null, null);
		}
		cb(null, file);
	}))
	.pipe(gulp.dest(dest_dir));
}

function generateRequireSection(manifests, application, dest_file)
{
	var content = '';
	_.each(manifests, function(manifest)
	{
		if(manifest.javascript && manifest.javascript.application)
		{
			var javascript_data = manifest.javascript.application[application]
			,	app_entry_point = manifest.javascript.entry_points[application];

			if(javascript_data) 
			{
				if(app_entry_point)
				{
					content += '\n';
					var name = app_entry_point.match(/([^\/\\]*)\.js$/);
					var module_name = name.length && name[1];
					var extension_name = [manifest.vendor, manifest.name, manifest.version].join('.');

					content += 'try{\n';
					content += '	extensions[\'' + extension_name + '\']();\n';
					content += '	SC.addExtensionModule(\'' + module_name + '\');\n';
					content += '}\n';
					content += 'catch(error)\n';
					content += '{\n';
					content += '	console.error(error);\n';
					content += '}\n\n';
				}
				else
				{
					throw new Error('Manifest ' + manifest.name + ': missing entry point for ' + application);
				}		
			}
		}
	});
	
	shell.ShellString(content).toEnd(dest_file);
}

function compileJavascript(cb)
{
	var manifests = manifest_manager.getExtensionManifests();

	_.each(entry_points, function(application, i)
	{
		var js_app_dest = js_dest[i];
		generateDefinesSection(manifests, application, js_app_dest);
		generateRequireSection(manifests, application, js_app_dest);
	});

	watch_manager.registerWatch(javascript_files, ['watch-javascript']);
	cb();	
}

function reload(cb)
{
	connect.reload();
	cb();
}

gulp.task('clean-js-tmp', [], function (cb)
{
	if(shell.test('-d', javascript_destination))
	{
		del.sync(js_dest, {force: true});
		cb();
	}
	else
	{
		shell.mkdir('-p', javascript_destination);
		cb();
	}
});

gulp.task('javascript', ['clean-js-tmp'], compileJavascript);
gulp.task('watch-javascript', ['javascript'], reload);