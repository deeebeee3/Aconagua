
define('Deepak.MyCoolExtension.MyCoolModule.Model'
,	[
		'Backbone'
	,	'Utils'
	,	'underscore'
	]
,	function (
		Backbone
	,	Utils
	,	_
	)
{
	'use strict';

	var MyCoolModuleModel = Backbone.Model.extend({

		urlRoot: Utils.getAbsoluteUrl(getExtensionAssetsPath('services/MyCoolModule.Service.ss'))

	,	validation: {
			title: {
				required: true
			,	msg: _('Valid task name is required').translate()
			}
		}

	,	defaults: {
			'title': ''
		,	'completed': false
		}

	,	initialize: function (options)
		{
			this.options = options;
		}
	});

	return MyCoolModuleModel;
});