var path = require('path')
,	fs = require('fs')
,	gutil = require('gulp-util')
,	nconf = require('nconf')
,	_ = require('underscore')
;

var manifest_manager = require('./manifest-manager');
	
'use strict';

function registerExtrasExtensions()
{
	var extensions_path = nconf.get('folders:source:extras_path')
	,	ext_path
	,	manifest_path
	;

	_.each(fs.readdirSync(extensions_path), function(vendor_folder)
	{
		vendor_folder = path.join(extensions_path, vendor_folder);
		
		_.each(fs.readdirSync(vendor_folder), function(ext_folder)
		{
			ext_path = path.join(vendor_folder, ext_folder);
			
			if(fs.statSync(ext_path).isDirectory())
			{
				try
				{
					_registerManifest(ext_path);
				}
				catch(error)
				{
					gutil.log(gutil.colors.yellow(ext_path + '/manifest.json does not exist. Ignoring ' + ext_path));
				}
			}
		});
	});
}

function registerWorkspaceExtensions()
{
	var new_extensions_path = []
	,	extensions_path = nconf.get('folders:source:source_path')
	,	ext_path
	,	manifest_path
	;

	_.each(fs.readdirSync(extensions_path), function(ext_folder)
	{
		var is_theme_extra_dir = nconf.get('folders:source:extras_path') &&
									nconf.get('folders:source:extras_path').includes(ext_folder);

		ext_path = path.join(extensions_path, ext_folder);
		
		if(!is_theme_extra_dir && fs.statSync(ext_path).isDirectory())
		{
			try
			{
				_registerManifest(ext_path);
				new_extensions_path.push(ext_path);
			}
			catch(error)
			{
				gutil.log(gutil.colors.yellow(ext_path + '/manifest.json does not exist. Ignoring ' + ext_path));
			}
		}
	});

	return new_extensions_path;
}

function _registerManifest(manifest_path)
{
	manifest_manager.addManifest(path.join(manifest_path, 'manifest.json'));
}

module.exports = function()
{
	//set up the manifest manager
	if(!nconf.get('folders:theme_path'))
	{
		var task_name = nconf.get('extensionMode') ? 'gulp extension:fetch' : 'gulp theme:fetch';
		gutil.log(gutil.colors.red('No local theme found. You need to run ' + task_name + ' before. Aborting. '));
		process.exit(1);
	}

	var app_manifest_path = path.join(nconf.get('folders:application_manifest'), 'application_manifest.json');

	if(fs.existsSync(app_manifest_path))
	{
		nconf.set('application:application_manifest', JSON.parse(fs.readFileSync(app_manifest_path).toString()));
	}

	_.each(nconf.get('folders:source'), function(src_folder)
	{
		if(!fs.existsSync(src_folder))
		{
			var message = 'The source path "' + src_folder + '" does not exist. You need to execute ';
			
			if(!nconf.get('extensionMode'))
			{
				throw new Error( message + ' "gulp theme:fetch" first.');
			}
			else
			{
				throw new Error(message + ' "gulp extension:fetch" first.');
			}
		}
	});

	//add all the manfiests
	
	var theme_path = path.join(nconf.get('folders:theme_path'));

	if(fs.statSync(theme_path).isDirectory())
	{
		manifest_manager.addManifest(path.join(theme_path, 'manifest.json'));
	}

	if(!nconf.get('extensionMode'))
	{
		registerExtrasExtensions()

		//run overrides task only in the theme tools
		var overrides = require('./overrides');
		overrides.updateOverrides();
	}
	else
	{
		var new_extensions_path = registerWorkspaceExtensions()

		//update extension paths
		new_extensions_path = new_extensions_path.map((path) => path.replace('\\', '/'));
		var config_content = JSON.parse(fs.readFileSync(nconf.get('config_path')).toString());
		nconf.set('folders:extensions_path', new_extensions_path);
		config_content.folders = nconf.get('folders');

		fs.writeFileSync(nconf.get('config_path'), JSON.stringify(config_content, null, 4));
	}

	return manifest_manager;
};