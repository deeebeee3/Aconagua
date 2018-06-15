
function service(request, response)
{
	'use strict';
	try 
	{
		require('Deepak.DeepaksExtension.DeepaksSecondModule.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Deepak.DeepaksExtension.DeepaksSecondModule.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}