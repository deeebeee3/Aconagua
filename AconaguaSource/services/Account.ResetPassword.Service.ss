/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

function service(request, response)
{
	'use strict';
	try 
	{
		require('Account.ResetPassword.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Account.ResetPassword.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}