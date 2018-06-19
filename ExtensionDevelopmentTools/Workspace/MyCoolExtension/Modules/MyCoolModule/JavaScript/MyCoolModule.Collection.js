// Collection of Deepak.MyCoolExtension.MyCoolModuleModel

define('Deepak.MyCoolExtension.MyCoolModule.Collection'
,	[
		'Deepak.MyCoolExtension.MyCoolModule.Model'

	,	'Utils'
	,	'Backbone'
	,	'underscore'
	]
,	function (
		MyCoolModuleModel

	,	Utils
	,	Backbone
	,	_
	)
{
	'use strict';

	return Backbone.Collection.extend({

		url: Utils.getAbsoluteUrl(getExtensionAssetsPath('services/MyCoolModule.Service.ss'))
		
	,	model: MyCoolModuleModel
	});
});