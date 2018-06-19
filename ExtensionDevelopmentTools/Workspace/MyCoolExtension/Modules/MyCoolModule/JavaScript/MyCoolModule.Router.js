// @module module_dep_name
define('Deepak.MyCoolExtension.MyCoolModule.Router'
,	[
		'Deepak.MyCoolExtension.MyCoolModule.List.View'
	,	'Deepak.MyCoolExtension.MyCoolModule.Edit.View'
	,	'Deepak.MyCoolExtension.MyCoolModule.Collection'
	,	'Deepak.MyCoolExtension.MyCoolModule.Model'
	,	'Backbone'
	]
,	function (
		MyCoolModuleListView
	,	MyCoolModuleEditView
	,	MyCoolModuleCollection
	,	MyCoolModuleModel
	,	Backbone
	)
{
	'use strict';

	//@class Deepak.MyCoolExtension.MyCoolModule.Router @extend Backbone.Router
	return Backbone.Router.extend({

		routes: {
			'test_extension': 'showMyCoolModule'
		,	'test_extension/new': 'addMyCoolModule'
		,	'test_extension/:id': 'editMyCoolModule'
		}

	,	initialize: function (application)
		{
			this.application = application;
		}

	,	showMyCoolModule: function showMyCoolModule()
		{
			this.collection = new MyCoolModuleCollection();
			
			var view = new MyCoolModuleListView({
				collection: this.collection
			,	application: this.application
			,	mode: 'list'
			,	can_edit: true
			});

			view.showContent();

			this.collection
			.fetch();
		}

	,	addMyCoolModule: function addMyCoolModule()
		{
			var model = new MyCoolModuleModel();

			var view = new MyCoolModuleEditView({
				application: this.application
			,	collection: this.collection
			,	model: model
			,	mode: 'add'
			});

			view.showContent();
		}

	,	editMyCoolModule: function editMyCoolModule(id)
		{
			var model = this.collection.get(id);

			var view = new MyCoolModuleEditView({
				application: this.application
			,	collection: this.collection
			,	model: model
			,	mode: 'edit'
			});

			view.showContent();
		}
	});
});
