
'use strict';

var RequestHelper = require('./client-script/RequestHelper');

var skin_service_client = (function(){

	var skin_service_client =  {
		
		REQUEST_TIMEOUT: 120

	,	searchSkins: function searchSkins(url)
		{
			var self = this;

			var options = {
				url: url + '&operation=search_skin'
			,	timeout: self.REQUEST_TIMEOUT
			,	method: 'GET'
			,	data: null
			};

			return RequestHelper.request(options);
		}
		
	,	createSkin: function createSkin(url, skin_data)
		{
			var self = this;
			var options = {
				url: url + '&method=POST'
			,	timeout: self.REQUEST_TIMEOUT
			,	method: 'POST'
			,	data: JSON.stringify({
					skin: skin_data
				,	operation: 'create_skin'
				})
			};

			return RequestHelper.request(options);
		}
		
	,	updateSkin: function updateSkin(url, skin_data)
		{
			var self = this;
			var options = {
				url: url + '&method=PUT'
			,	timeout: self.REQUEST_TIMEOUT
			,	method: 'PUT'
			,	data: JSON.stringify({
					skin: skin_data
				,	operation: 'update_skin'
				})
			};

			return RequestHelper.request(options);
		}

	,	deleteSkin: function deleteSkin(url, skin_data)
		{
			var self = this;
			var options = {
				url: url + '&method=GET&operation=delete_skin'
			,	timeout: self.REQUEST_TIMEOUT
			,	method: 'GET'
			,	data: null
			}
			;

			return RequestHelper.request(options);
		}
	};

	return skin_service_client;
})();

module.exports = skin_service_client;