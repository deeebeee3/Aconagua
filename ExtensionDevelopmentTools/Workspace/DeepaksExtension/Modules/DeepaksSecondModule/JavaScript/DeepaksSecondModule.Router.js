// @module module_dep_name
define('Deepak.DeepaksExtension.DeepaksSecondModule.Router'
,	[
		'Deepak.DeepaksExtension.DeepaksSecondModule.List.View'
	,	'Deepak.DeepaksExtension.DeepaksSecondModule.Edit.View'
	,	'Deepak.DeepaksExtension.DeepaksSecondModule.Collection'
	,	'Deepak.DeepaksExtension.DeepaksSecondModule.Model'
	,	'Backbone'
	]
,	function (
		DeepaksSecondModuleListView
	,	DeepaksSecondModuleEditView
	,	DeepaksSecondModuleCollection
	,	DeepaksSecondModuleModel
	,	Backbone
	)
{
	'use strict';

	//@class Deepak.DeepaksExtension.DeepaksSecondModule.Router @extend Backbone.Router
	return Backbone.Router.extend({

		routes: {
			'test_extension': 'showDeepaksSecondModule'
		,	'test_extension/new': 'addDeepaksSecondModule'
		,	'test_extension/:id': 'editDeepaksSecondModule'
		}

	,	initialize: function (application)
		{
			this.application = application;
		}

	,	showDeepaksSecondModule: function showDeepaksSecondModule()
		{
			this.collection = new DeepaksSecondModuleCollection();
			
			var view = new DeepaksSecondModuleListView({
				collection: this.collection
			,	application: this.application
			,	mode: 'list'
			,	can_edit: true
			});

			view.showContent();

			this.collection
			.fetch();
		}

	,	addDeepaksSecondModule: function addDeepaksSecondModule()
		{
			var model = new DeepaksSecondModuleModel();

			var view = new DeepaksSecondModuleEditView({
				application: this.application
			,	collection: this.collection
			,	model: model
			,	mode: 'add'
			});

			view.showContent();
		}

	,	editDeepaksSecondModule: function editDeepaksSecondModule(id)
		{
			var model = this.collection.get(id);

			var view = new DeepaksSecondModuleEditView({
				application: this.application
			,	collection: this.collection
			,	model: model
			,	mode: 'edit'
			});

			view.showContent();
		}
	});
});
