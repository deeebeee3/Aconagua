// Collection of Deepak.DeepaksExtension.CoolCCTModel

define('Deepak.DeepaksExtension.CoolCCT.Collection'
,	[
		'Deepak.DeepaksExtension.CoolCCT.Model'

	,	'Utils'
	,	'Backbone'
	,	'underscore'
	]
,	function (
		CoolCCTModel

	,	Utils
	,	Backbone
	,	_
	)
{
	'use strict';

	return Backbone.Collection.extend({

		url: Utils.getAbsoluteUrl(getExtensionAssetsPath('services/CoolCCT.Service.ss'))
		
	,	model: CoolCCTModel
	});
});