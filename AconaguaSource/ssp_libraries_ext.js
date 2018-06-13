/*
	© 2017 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

require('SCA');

var Application = require('Application');

var isExtended = false;
var embEndpointUrl = {};
var themeAssetsPath = '';

var app_includes = {
    "shopping": {
        "templates": [
            "shopping-templates.js"
        ],
        "js": [
            "javascript/shopping.js"
        ],
        "css": [
            "css/shopping.css"
        ],
        "ie": []
    },
    "checkout": {
        "templates": [
            "checkout-templates.js"
        ],
        "js": [
            "javascript/checkout.js"
        ],
        "css": [
            "css/checkout.css"
        ],
        "ie": []
    },
    "myaccount": {
        "templates": [
            "myaccount-templates.js"
        ],
        "js": [
            "javascript/myaccount.js"
        ],
        "css": [
            "css/myaccount.css"
        ],
        "ie": []
    }
};

_.each(app_includes, function(app){
	app.templates = _.map(app.templates, function(file){
		return Application.getNonManageResourcesPathPrefix() + file;
	});
	app.css = _.map(app.css, function(file){
		return Application.getNonManageResourcesPathPrefix() + file;
	});
	
	if(SC.Configuration.unmanagedResourcesFolderName)
	{
		app.js.unshift('backward-compatibility-amd-unclean.js');
	}
	
});

_.each(app_includes, function(app, app_name){
	app.js = app.templates.concat(app.js);
});

app_includes.shopping.ie = ["css_ie/shopping.css","css_ie/shopping_1.css","css_ie/shopping_2.css"];
app_includes.myaccount.ie = ["css_ie/myaccount.css","css_ie/myaccount_1.css","css_ie/myaccount_2.css","css_ie/myaccount_3.css","css_ie/myaccount_4.css"];
app_includes.checkout.ie = ["css_ie/checkout.css","css_ie/checkout_1.css","css_ie/checkout_2.css"];

_.each(app_includes, function(app){
	app.ie = _.map(app.ie, function(file){
		return Application.getNonManageResourcesPathPrefix() + file;
	});
});
