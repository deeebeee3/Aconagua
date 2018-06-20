// Collection of Deepak.DeepaksExtension.DeepaksModuleModel

define('Deepak.DeepaksExtension.DeepaksModule.Collection'
,	[
		'Deepak.DeepaksExtension.DeepaksModule.Model'

	,	'Utils'
	,	'Backbone'
	,	'underscore'
	]
,	function (
		DeepaksModuleModel

	,	Utils
	,	Backbone
	,	_
	)
{
	'use strict';

	return Backbone.Collection.extend({

		url: Utils.getAbsoluteUrl(getExtensionAssetsPath('services/DeepaksModule.Service.ss'))
		
	,	model: DeepaksModuleModel
	});
});