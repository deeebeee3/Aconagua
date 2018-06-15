
define(
	'Deepak.DeepaksExtension.DeepaksSecondModule.ServiceController'
,	[
		'ServiceController'
	,	'SC.Models.Init'
	,	'Deepak.DeepaksExtension.DeepaksSecondModule.Model'
	]
,	function(
		ServiceController
	,	ModelsInit
	,	DeepaksSecondModuleModel
	)
	{
		'use strict';

		return ServiceController.extend({

			name: 'Deepak.DeepaksExtension.DeepaksSecondModule.ServiceController'

			// The values in this object are the validation needed for the current service.
			// Can have values for all the request methods ('common' values) and specific for each one.
		,	options: {
				common: {
					requireLoggedInPPS: true
				}
			}

		,	get: function get()
			{
				return DeepaksSecondModuleModel.get();
			}

		,	post: function post()
			{
				return DeepaksSecondModuleModel.create(this.data);
			}

		,	put: function put()
			{
				return DeepaksSecondModuleModel.update(this.data);
			}
			
		,	delete: function()
			{
				var id = this.request.getParameter('internalid');
          		return DeepaksSecondModuleModel.remove(id);
			}
		});
	}
);