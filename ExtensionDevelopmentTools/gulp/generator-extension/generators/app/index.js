var gutil = require('gulp-util')
,	path = require('path')
,	shell = require('shelljs')
,	_ = require('underscore');

var ModuleGenerator = require('../module/index');

module.exports = class extends ModuleGenerator {

	constructor(args, opts) {
		super(args, opts);
		this.option('n');
	}

	prompting() {

		this.log('\nWelcome! Let´s bootstrap your extension by following these steps:\n');

		return this.prompt([
			{
				type    : 'input'
			,	name    : 'fantasy_name'
			,	message : 'Set your Extension Fantasy Name'
			,	default	: 'My Cool Extension!'
			}
		,	{
				type    : 'input'
			,	name    : 'name'
			,	message : 'Set your Extension Name (for folders and files)'
			,	default	: 'MyCoolExtension'
			,	validate: function(input)
				{
					var re = new RegExp(/^[a-z0-9]+$/i);

					if (!re.test(input))
					{
						return 'The Extension name must include only alphanumeric character.';
					}

					re = new RegExp(/^[a-z][a-z0-9]+$/i);

					if (!re.test(input))
					{
						return 'The Extension name must start with an alphabetic character.';
					}

				    return true;
				}
			}
		,	{
				type    : 'input'
			,	name    : 'vendor'
			,	message : 'Set the Vendor Name'
			,	default	: 'Acme'
			,	store   : true
			,	validate: function(input)
				{
					var re = new RegExp(/^[a-z0-9]+$/i);

					if (!re.test(input))
					{
						return 'The Vendor name must include only alphanumeric character.';
					}

					re = new RegExp(/^[a-z][a-z0-9]+$/i);

					if (!re.test(input))
					{
						return 'The Vendor name must start with an alphabetic character.';
					}

				    return true;
				}
			}
		,	{
				type    : 'input'
			,	name    : 'version'
			,	message : 'Assign a Version Number'
			,	default	: '1.0.0'
			,   validate: function(input)
	            {
	                var message;

	                if(input.length > 0)
	                {
	                    var values = input.split('.')
	                    ,   i = 0;

	                    if(values.length > 3)
	                    {
	                        return 'Please provide a valid version number (ie. 1.0.0)';
	                    }

	                    while(!message && i < values.length)
	                    {
	                        var value = values[i];

	                        if(_.isNaN(parseInt(value)))
	                        {
	                            message = 'Please provide a valid version number (ie. 1.0.0)';
	                        }

	                        i++;
	                    }

	                    return message || true;
	                }
	                else
	                {
	                    return true;
	                }
	            }
			}
		,   {
                type	: 'input'
            ,   name	: 'description'
            ,   message	: 'Set a Description for your extension'
            ,	default	: 'My cool extension does magic!'
        	}
         ,   {
                 type: 'checkbox'
             ,   name: 'target'
             ,   message: 'This extension supports'
             ,	store: true
             ,	default: ['SCA', 'SCS']
             ,	choices: [
             		{value: 'SCA', name: 'SuiteCommerce Advance'}
             	,	{value: 'SCS', name: 'SuiteCommerce Standard'}
             	]
         	}
        ,	{
        		type: 'checkbox'
        	,	name: 'application'
        	,	message: 'This extension will be applied to'
        	,	default: ['shopping', 'myaccount', 'checkout']
        	,	choices: [
        			{value: 'shopping', name: 'Shopping'}
        		,	{value: 'myaccount', name: 'My Account'}
        		,	{value: 'checkout', name: 'Checkout'}
        		]
        	}
        ,	{
        		type: 'checkbox'
        	,	name: 'resources'
        	,	message: 'For this extension you will be using'
        	,	default: ['templates', 'sass', 'configuration', 'suitescript', 'javascript']
        	,	choices: [
        			{value: 'templates', name: 'Templates'}
        		,	{value: 'sass', name: 'Sass'}
        		,	{value: 'configuration', name: 'Configuration'}
        		,	{value: 'javascript', name: 'JavaScript'}
        		,	{value: 'suitescript', name: 'SuiteScript'}
        		]
        	}
        ,	{
        		type	: 'input'
        	,	name	: 'module_name'
        	,	message	: 'Set the initial Module Name (for folders and files)'
        	,	default	: 'MyCoolModule'
			,	validate: function(input)
				{
					var re = new RegExp(/^[a-z0-9]+$/i);

					if (!re.test(input))
					{
						return 'The Module name must include only alphanumeric character.';
					}

					re = new RegExp(/^[a-z][a-z0-9]+$/i);

					if (!re.test(input))
					{
						return 'The Module name must start with an alphabetic character.';
					}

				    return true;
				}
	        }
		])
		.then((answers) => {

	        this.extension_options = answers;
			this.extension_options.is_cct = false;

	        var ext_application = this.config.get('ext_application') || {};
	        ext_application[this.extension_options.name] = this.extension_options.application;

	        // this will determine for all the rest of the files of this extension
	        // for which application will they be compiled
	        this.config.set('ext_application', ext_application);

        	var root_ext_path = path.join(this.contextRoot, this.work_folder, this.extension_options.name);

        	if(shell.test('-d', root_ext_path))
			{
				return this.prompt([
					{
		        		type: 'confirm'
		        	,	name: 'continue'
		        	,	message: 'The extension ' +  this.extension_options.fantasy_name + ' already exists.\nDo you want to continue and overwrite it?'
		        	,	default: false
		        	}
			    ]);
			}
		})
		.then((answer_confirm) =>
		{
			if(answer_confirm && !answer_confirm.continue)
        	{
        		this.env.error('Create extension ' + this.extension_options.fantasy_name + ' operation was cancelled.');
        	}
		});
	}

	writing() {
		//create basic extension folders
		var root_ext_path = path.join(this.contextRoot, this.work_folder, this.extension_options.name)
		,	assets_path = path.join(root_ext_path, 'assets')
		,	manifest_dest_path = path.join(root_ext_path, 'manifest.json')
		,	module_name = this.extension_options.module_name
		,	module_path = path.join(root_ext_path, 'Modules', this.extension_options.module_name)
		,	self = this
		;

		shell.mkdir('-p', root_ext_path);
		shell.mkdir('-p', path.join(root_ext_path, 'Modules'));
		shell.mkdir('-p', module_path);
		shell.mkdir('-p', assets_path);
		shell.mkdir('-p', path.join(assets_path, 'fonts'));
		shell.mkdir('-p', path.join(assets_path, 'img'));
		shell.mkdir('-p', path.join(assets_path, 'services'));

		this.fs.copyTpl(
	      	this.templatePath('manifest.json')
		,	this.destinationPath(manifest_dest_path)
		,	{
				name: self.extension_options.name
			,	fantasy_name: self.extension_options.fantasy_name
			,	version: self.extension_options.version
			,	vendor: self.extension_options.vendor
			,	target: self.extension_options.target.join(',')
			,	description: self.extension_options.description || ''
			}
		);

		var manifest = this.fs.readJSON(manifest_dest_path);

		var module_metadata = {
			manifest: manifest
		,	base_path: root_ext_path
		,	module_name: module_name
		,	create_mode: true
		};

		//add resources accordignly

		_.each(this.extension_options.resources, function(resource)
		{
			switch(resource)
			{
				case 'javascript':
					self._writeJavascript(module_metadata);
					break;
				case 'configuration':
					self._writeConfiguration(module_metadata);
					break;
				case 'suitescript':
					self._writeSuiteScript(module_metadata);
					break;
				case 'sass':
					self._writeSass(module_metadata);
					break;
				case 'templates':
					self._writeTemplates(module_metadata);
					break;
			}
		});

		this.fs.extendJSON(manifest_dest_path, manifest);
	}

	configuring()
	{
		var config = this.fs.readJSON(this.config_path)
		,	new_ext_path = this.work_folder + '/' + this.extension_options.name
		;

		if(config.folders.extensions_path)
		{
			if(!_.contains(config.folders.extensions_path, new_ext_path))
			{
				config.folders.extensions_path.push(new_ext_path);
			}
		}
		else
		{
			config.folders.extensions_path = [new_ext_path];
		}

		this.fs.extendJSON(this.config_path, config);
	}

	end()
	{
		var time_diff =  Math.abs(new Date() - this.initial_time);
		this.log(gutil.colors.green('\nGood! The process "extension:create" finished after ' + Math.round(time_diff / 1000) + ' sec.\n'));

		this.log(gutil.colors.green('You can continue developing using the following commands in order:\n'));
		this.log(
			gutil.colors.green('\t1- ') + 'gulp extension:fetch - to get the current theme and compile all the resources.\n' +
			gutil.colors.green('\t2- ') + 'gulp extension:local - (Optional) to develop locally styles and template files.\n' +
			gutil.colors.green('\t3- ') + 'gulp extension:deploy - to deploy your extension to the file cabinet and try it using the Extension Management UI.\n'
		);
	}
};
