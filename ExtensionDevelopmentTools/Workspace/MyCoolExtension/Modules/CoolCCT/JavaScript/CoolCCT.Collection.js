// Collection of Deepak.MyCoolExtension.CoolCCTModel

define('Deepak.MyCoolExtension.CoolCCT.Collection'
,	[
		'Deepak.MyCoolExtension.CoolCCT.Model'

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