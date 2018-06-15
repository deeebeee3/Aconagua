// Collection of Deepak.DeepaksExtension.DeepaksSecondModuleModel

define('Deepak.DeepaksExtension.DeepaksSecondModule.Collection'
,	[
		'Deepak.DeepaksExtension.DeepaksSecondModule.Model'

	,	'Utils'
	,	'Backbone'
	,	'underscore'
	]
,	function (
		DeepaksSecondModuleModel

	,	Utils
	,	Backbone
	,	_
	)
{
	'use strict';

	return Backbone.Collection.extend({

		url: Utils.getAbsoluteUrl(getExtensionAssetsPath('services/DeepaksSecondModule.Service.ss'))
		
	,	model: DeepaksSecondModuleModel
	});
});