
function service(request, response)
{
	'use strict';
	try 
	{
		require('Deepak.DeepaksExtension.CoolCCT.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Deepak.DeepaksExtension.CoolCCT.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}