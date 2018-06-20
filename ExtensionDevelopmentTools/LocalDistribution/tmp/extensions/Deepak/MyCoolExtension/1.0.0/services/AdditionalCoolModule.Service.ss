
function service(request, response)
{
	'use strict';
	try 
	{
		require('Deepak.MyCoolExtension.AdditionalCoolModule.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Deepak.MyCoolExtension.AdditionalCoolModule.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}