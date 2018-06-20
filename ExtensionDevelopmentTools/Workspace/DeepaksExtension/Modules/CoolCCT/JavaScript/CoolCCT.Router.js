// @module module_dep_name
define('Deepak.DeepaksExtension.CoolCCT.Router'
,	[
		'Deepak.DeepaksExtension.CoolCCT.List.View'
	,	'Deepak.DeepaksExtension.CoolCCT.Edit.View'
	,	'Deepak.DeepaksExtension.CoolCCT.Collection'
	,	'Deepak.DeepaksExtension.CoolCCT.Model'
	,	'Backbone'
	]
,	function (
		CoolCCTListView
	,	CoolCCTEditView
	,	CoolCCTCollection
	,	CoolCCTModel
	,	Backbone
	)
{
	'use strict';

	//@class Deepak.DeepaksExtension.CoolCCT.Router @extend Backbone.Router
	return Backbone.Router.extend({

		routes: {
			'test_extension': 'showCoolCCT'
		,	'test_extension/new': 'addCoolCCT'
		,	'test_extension/:id': 'editCoolCCT'
		}

	,	initialize: function (application)
		{
			this.application = application;
		}

	,	showCoolCCT: function showCoolCCT()
		{
			this.collection = new CoolCCTCollection();
			
			var view = new CoolCCTListView({
				collection: this.collection
			,	application: this.application
			,	mode: 'list'
			,	can_edit: true
			});

			view.showContent();

			this.collection
			.fetch();
		}

	,	addCoolCCT: function addCoolCCT()
		{
			var model = new CoolCCTModel();

			var view = new CoolCCTEditView({
				application: this.application
			,	collection: this.collection
			,	model: model
			,	mode: 'add'
			});

			view.showContent();
		}

	,	editCoolCCT: function editCoolCCT(id)
		{
			var model = this.collection.get(id);

			var view = new CoolCCTEditView({
				application: this.application
			,	collection: this.collection
			,	model: model
			,	mode: 'edit'
			});

			view.showContent();
		}
	});
});
