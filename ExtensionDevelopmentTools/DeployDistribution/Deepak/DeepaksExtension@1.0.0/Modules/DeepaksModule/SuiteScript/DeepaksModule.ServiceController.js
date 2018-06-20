
define(
	'Deepak.DeepaksExtension.DeepaksModule.ServiceController'
,	[
		'ServiceController'
	,	'SC.Models.Init'
	,	'Deepak.DeepaksExtension.DeepaksModule.Model'
	]
,	function(
		ServiceController
	,	ModelsInit
	,	DeepaksModuleModel
	)
	{
		'use strict';

		return ServiceController.extend({

			name: 'Deepak.DeepaksExtension.DeepaksModule.ServiceController'

			// The values in this object are the validation needed for the current service.
			// Can have values for all the request methods ('common' values) and specific for each one.
		,	options: {
				common: {
					requireLoggedInPPS: true
				}
			}

		,	get: function get()
			{
				return DeepaksModuleModel.get();
			}

		,	post: function post()
			{
				return DeepaksModuleModel.create(this.data);
			}

		,	put: function put()
			{
				return DeepaksModuleModel.update(this.data);
			}
			
		,	delete: function()
			{
				var id = this.request.getParameter('internalid');
          		return DeepaksModuleModel.remove(id);
			}
		});
	}
);