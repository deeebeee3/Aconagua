// @module module_dep_name
define('Deepak.DeepaksExtension.DeepaksModule.Router'
,	[
		'Deepak.DeepaksExtension.DeepaksModule.List.View'
	,	'Deepak.DeepaksExtension.DeepaksModule.Edit.View'
	,	'Deepak.DeepaksExtension.DeepaksModule.Collection'
	,	'Deepak.DeepaksExtension.DeepaksModule.Model'
	,	'Backbone'
	]
,	function (
		DeepaksModuleListView
	,	DeepaksModuleEditView
	,	DeepaksModuleCollection
	,	DeepaksModuleModel
	,	Backbone
	)
{
	'use strict';

	//@class Deepak.DeepaksExtension.DeepaksModule.Router @extend Backbone.Router
	return Backbone.Router.extend({

		routes: {
			'test_extension': 'showDeepaksModule'
		,	'test_extension/new': 'addDeepaksModule'
		,	'test_extension/:id': 'editDeepaksModule'
		}

	,	initialize: function (application)
		{
			this.application = application;
		}

	,	showDeepaksModule: function showDeepaksModule()
		{
			this.collection = new DeepaksModuleCollection();
			
			var view = new DeepaksModuleListView({
				collection: this.collection
			,	application: this.application
			,	mode: 'list'
			,	can_edit: true
			});

			view.showContent();

			this.collection
			.fetch();
		}

	,	addDeepaksModule: function addDeepaksModule()
		{
			var model = new DeepaksModuleModel();

			var view = new DeepaksModuleEditView({
				application: this.application
			,	collection: this.collection
			,	model: model
			,	mode: 'add'
			});

			view.showContent();
		}

	,	editDeepaksModule: function editDeepaksModule(id)
		{
			var model = this.collection.get(id);

			var view = new DeepaksModuleEditView({
				application: this.application
			,	collection: this.collection
			,	model: model
			,	mode: 'edit'
			});

			view.showContent();
		}
	});
});
