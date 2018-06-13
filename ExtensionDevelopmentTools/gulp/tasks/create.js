
var gulp = require('gulp-help')(require('gulp'), { hideDepsMessage: true, hideEmpty: true })
,	gutil = require('gulp-util')
,	fs = require('fs')
,	nconf = require('nconf')
,	path = require('path')
,	yeoman = require('yeoman-environment')
,	_ = require('underscore')
;

'use strict';

var env = yeoman.createEnv();
env.register(require.resolve('generator-extension'), 'extension');
env.register(require.resolve('generator-extension/generators/module/index.js'), 'extension:module');
env.register(require.resolve('generator-extension/generators/cct/index.js'), 'extension:cct');

var extensions_path = nconf.get('folders:source:source_path');


//add all the extension manfiests
function registerExtensions()
{
	var new_extensions_path = []
	,	workspace_ext_path
	;

	_.each(fs.readdirSync(extensions_path), function(folder)
	{
		var manifest_path = path.join(extensions_path, folder);

		if(fs.statSync(manifest_path).isDirectory())
		{
			var isExtraFolder = nconf.get('folders:source:extras_path') &&
									nconf.get('folders:source:extras_path').includes(folder);

			if(!isExtraFolder)
			{

				workspace_ext_path = manifest_path;
				new_extensions_path.push(workspace_ext_path);
			}
		}
	});

	//update extension paths
	new_extensions_path = new_extensions_path.map((path) => path.replace('\\', '/'));

	var config_content = JSON.parse(fs.readFileSync(nconf.get('config_path')).toString());
	nconf.set('folders:extensions_path', new_extensions_path);
	config_content.folders = nconf.get('folders');

	fs.writeFileSync(nconf.get('config_path'), JSON.stringify(config_content, null, 4));
}

function create(cb)
{
	var options = {
		gulp_context: 'gulp/generator-extension'
	,	work_folder: nconf.get('folders:source:source_path')
	,	config_path: nconf.get('config_path')
	,	deploy_folder: nconf.get('folders:extensions_dest_name')
	,	force: true
	};

	env.run('extension', options, cb)
	.on('error', function (error) {
    	cb(new gutil.PluginError('gulp extension:create', gutil.colors.yellow(error)));
  	});
}

function createModule(cb)
{
	registerExtensions();

	if(nconf.get('folders:extensions_path').length === 0)
	{
		cb(new gutil.PluginError('gulp extension:create-module', 'Sorry. No valid extensions were found for you to add a new module'));
	}
	else
	{
		var options = {
			gulp_context: 'gulp/generator-extension'
		,	work_folder: nconf.get('folders:source:source_path')
		,	config_path: nconf.get('config_path')
		,	deploy_folder: nconf.get('folders:extensions_dest_name')
		,	force: true
		};

		env.run('extension:module', options, cb);
	}
}

function createCCT(cb)
{
	registerExtensions();

	if(nconf.get('folders:extensions_path').length === 0)
	{
		cb(new gutil.PluginError('gulp extension:create-cct', 'Sorry. No valid extensions were found for you to add a new CCT'));
	}
	else
	{
		var options = {
			gulp_context: 'gulp/generator-extension'
		,	work_folder: nconf.get('folders:source:source_path')
		,	config_path: nconf.get('config_path')
		,	deploy_folder: nconf.get('folders:extensions_dest_name')
		,	force: true
		};

		env.run('extension:cct', options, cb);
	}
}

gulp.task('extension:create'
	,	'Scaffolds an extension for you.\n'
	,	create
);

gulp.task('extension:create-module'
	,	'Adds an example module into an extension.\n'
	,	createModule
);

gulp.task('extension:create-cct'
	,	'Adds an example CCT into an extension.\n'
	,	createCCT
);
