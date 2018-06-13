var gutil = require('gulp-util')
,	path = require('path')
,	shell = require('shelljs')
,	_ = require('underscore');

var ModuleGenerator = require('../module/index');

module.exports = class extends ModuleGenerator {

	constructor(args, opts) {
		super(args, opts);

		var context = this.options.gulp_context ?  this.options.gulp_context + '/' : '';
		this.work_folder = this.options.work_folder;
		this.config_path = this.options.config_path;
		this.deploy_folder = this.options.deploy_folder;
		this.sourceRoot(context + 'generators/app/templates');
		this.extension_options = {};
		this.initial_time = new Date();
	}

	prompting() {

		this.log('\nWelcome! Let´s bootstrap your CCT by following these steps:\n');

		return this.prompt([
			{
	        	type	: 'input'
        	,	name	: 'fantasy_module_name'
        	,	message	: 'Set the Label of the CCT'
        	,	default	: 'Cool CCT!'
        	}
		,	{
	        	type	: 'input'
        	,	name	: 'module_name'
        	,	message	: 'Set the Name of the CCT (for folders and files)'
        	,	default	: 'CoolCCT'
			,	validate: function(input)
				{
					var re = new RegExp(/^[a-z0-9]+$/i);

					if (!re.test(input))
					{
						return 'The CCT name must include only alphanumeric character.';
					}

					re = new RegExp(/^[a-z][a-z0-9]+$/i);

					if (!re.test(input))
					{
						return 'The CCT name must start with an alphabetic character.';
					}

				    return true;
				}
        	}
		,   {
                type	: 'input'
            ,   name	: 'module_description'
            ,   message	: 'Set a Description for your CCT'
            ,	default	: 'My cool CCT does magic!'
        	}
       	,	{
        		type	: 'checkbox'
        	,	name	: 'resources'
        	,	message	: 'For this CCT you will be using'
        	,	default	: ['templates', 'sass', 'configuration', 'suitescript', 'javascript']
        	,	choices	: [
        			{value: 'templates', name: 'Templates'}
        		,	{value: 'sass', name: 'Sass'}
        		,	{value: 'configuration', name: 'Configuration'}
        		,	{value: 'javascript', name: 'JavaScript'}
        		,	{value: 'suitescript', name: 'SuiteScript'}
        		]
        	}
		])
		.then((answers) => {
	        this.extension_options = answers;

	        this.extension_options.is_cct = true;
	        return this._inquireExtension();
		})
		.then((manifest) =>
		{
			this.extension_options.name = manifest.name;
	        this.extension_options.vendor = manifest.vendor;
			this.extension_options.version = manifest.version;

	        this.extension_options.application = this.config.get('ext_application') ? this.config.get('ext_application')[manifest.name] : ['shopping', 'myaccount', 'checkout'];

        	var root_ext_path = path.join(this.contextRoot, this.work_folder, this.extension_options.name, this.extension_options.module_name);

        	if(shell.test('-d', root_ext_path))
			{
				return this.prompt([
					{
		        		type: 'confirm'
		        	,	name: 'continue'
		        	,	message: 'The CCT ' +  this.extension_options.fantasy_module_name + ' already exists.\nDo you want to continue and overwrite it?'
		        	}
			    ]);
			}
		})
		.then((answer_confirm) =>
		{
			if(answer_confirm && !answer_confirm.continue)
			{
				this.env.error('Canceling extension:create-cct for ' + this.extension_options.fantasy_module_name);
			}
		});
	}

	writing()
	{
		ModuleGenerator.prototype.writing.apply(this, arguments);
	}

	end()
	{
		ModuleGenerator.prototype.end.apply(this, arguments);
	}

};
