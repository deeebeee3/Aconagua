// @module Deepak.DeepaksExtension.CoolCCT

// An example cct that shows a message with the price, using the context data from the item
// it also links to a complete TODO list example, for you to check how to make CRUD operations

// Use: Utils.getAbsoluteUrl(getExtensionAssetsPath('services/service.ss')) 
// to reference services or images available in your extension assets folder

define(
	'Deepak.DeepaksExtension.CoolCCT'
,   [
		'Deepak.DeepaksExtension.CoolCCT.View'
	,	'Deepak.DeepaksExtension.CoolCCT.Router'
	]
,   function (
		CoolCCTView
	,	CoolCCTRouter
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			container.getComponent('CMS').registerCustomContentType({
				
				// this property value MUST be lowercase
				id: 'cct_deepak_coolcct'
				
				// The view to render the CCT
			,	view: CoolCCTView
			});

			new CoolCCTRouter(container);
		}
	};
});