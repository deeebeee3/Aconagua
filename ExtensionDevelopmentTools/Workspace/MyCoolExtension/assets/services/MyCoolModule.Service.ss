
function service(request, response)
{
	'use strict';
	try 
	{
		require('Deepak.MyCoolExtension.MyCoolModule.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Deepak.MyCoolExtension.MyCoolModule.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}