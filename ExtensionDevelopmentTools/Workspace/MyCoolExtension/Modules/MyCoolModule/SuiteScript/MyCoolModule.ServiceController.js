
define(
	'Deepak.MyCoolExtension.MyCoolModule.ServiceController'
,	[
		'ServiceController'
	,	'SC.Models.Init'
	,	'Deepak.MyCoolExtension.MyCoolModule.Model'
	]
,	function(
		ServiceController
	,	ModelsInit
	,	MyCoolModuleModel
	)
	{
		'use strict';

		return ServiceController.extend({

			name: 'Deepak.MyCoolExtension.MyCoolModule.ServiceController'

			// The values in this object are the validation needed for the current service.
			// Can have values for all the request methods ('common' values) and specific for each one.
		,	options: {
				common: {
					requireLoggedInPPS: true
				}
			}

		,	get: function get()
			{
				return MyCoolModuleModel.get();
			}

		,	post: function post()
			{
				return MyCoolModuleModel.create(this.data);
			}

		,	put: function put()
			{
				return MyCoolModuleModel.update(this.data);
			}
			
		,	delete: function()
			{
				var id = this.request.getParameter('internalid');
          		return MyCoolModuleModel.remove(id);
			}
		});
	}
);