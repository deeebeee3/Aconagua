
define(
	'Deepak.MyCoolExtension.CoolCCT.ServiceController'
,	[
		'ServiceController'
	,	'SC.Models.Init'
	,	'Deepak.MyCoolExtension.CoolCCT.Model'
	]
,	function(
		ServiceController
	,	ModelsInit
	,	CoolCCTModel
	)
	{
		'use strict';

		return ServiceController.extend({

			name: 'Deepak.MyCoolExtension.CoolCCT.ServiceController'

			// The values in this object are the validation needed for the current service.
			// Can have values for all the request methods ('common' values) and specific for each one.
		,	options: {
				common: {
					requireLoggedInPPS: true
				}
			}

		,	get: function get()
			{
				return CoolCCTModel.get();
			}

		,	post: function post()
			{
				return CoolCCTModel.create(this.data);
			}

		,	put: function put()
			{
				return CoolCCTModel.update(this.data);
			}
			
		,	delete: function()
			{
				var id = this.request.getParameter('internalid');
          		return CoolCCTModel.remove(id);
			}
		});
	}
);