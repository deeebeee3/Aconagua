var extensions = {};

extensions['Deepak.DeepaksExtension.1.0.0'] = function(){

function getExtensionAssetsPath(asset){
	return 'extensions/Deepak/DeepaksExtension/1.0.0/' + asset;
}

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


// List View, it will create as child view a collection of Edit Views.

define('Deepak.DeepaksExtension.DeepaksModule.List.View'
,	[
		'Deepak.DeepaksExtension.DeepaksModule.Edit.View'
	,	'Backbone.CollectionView'
		
	,	'deepak_deepaksextension_deepaksmodule_list.tpl'

	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		DeepaksModuleEditView
	,	BackboneCollectionView

	,	deepak_deepaksextension_deepaksmodule_list_tpl

	,	Backbone
	,	jQuery
	,	_
	)
{
	'use strict';

	return Backbone.View.extend({

		template: deepak_deepaksextension_deepaksmodule_list_tpl

	,	title: _('DeepaksExtension').translate()

	,	events: {
			'click [data-action="remove"]': 'removeDeepaksModule'
		}

	,	initialize: function (options)
		{
			var self = this;
			this.collection.get();
			this.loading = true;
			this.can_edit = options.can_edit;

			this.collection.on('reset sync add remove change destroy', function ()
			{
				self.loading = false;
				self.render();
			});
		}

	,	childViews: {
			'DeepaksModule.Collection': function ()
			{
				return new BackboneCollectionView(
				{
					childView: DeepaksModuleEditView
				,	collection: this.collection
				,	childViewOptions: {
						mode: 'list'
					,	can_edit: this.can_edit
					}
				});
			}
		}

	,	removeDeepaksModule: function removeDeepaksModule(e)
		{
			var id = jQuery(e.target).data('id');
			this.collection.get(id).destroy({ wait: true });
		}

	,	getContext: function getContext()
		{
			return {
				loading: this.loading
			,	can_edit: this.can_edit
			};
		}
	});
});

// Edit View, it will allow to list, edit and add todo tasks
// depending on the mode

define('Deepak.DeepaksExtension.DeepaksModule.Edit.View'
,	[
		'deepak_deepaksextension_deepaksmodule_edit.tpl'

	,	'Backbone.FormView'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		deepak_deepaksextension_deepaksmodule_edit_tpl

	,	BackboneFormView
	,	Backbone
	,	jQuery
	,	_
	)
{
	'use strict';

	return Backbone.View.extend({

		template: deepak_deepaksextension_deepaksmodule_edit_tpl

	,	initialize: function (options)
		{
			var self = this;
			this.options = options;
			this.model = options.model;
			this.list = options.collection;
			this.mode = options.mode;
			this.can_edit = options.can_edit;

			BackboneFormView.add(this);

			this.model.on('change', function()
			{
				if(self.mode === 'add')
				{
					self.list.add(self.model);
				}
				else
				{
					self.mode = 'list';
					self.render();
				}
				
			});
		}

	,	events: {
			'click [data-action="edit"]': 'editMode'
		,	'change [name="completed"]': 'markCompleted'
		,	'submit form': 'saveForm'
		}

	,	bindings: {
			'[name="title"]': 'title'
		,	'[name="completed"]': 'completed'
		}

	, 	childViews: {
			
		}

	,	editMode: function editMode()
		{
			this.mode = 'edit';
			this.render();
		}

	,	markCompleted: function markCompleted(e)
		{
			var completed = jQuery(e.target).is(':checked');
			this.model.set('completed', completed);
			this.model.save();
		}

	,	getContext: function getContext()
		{
			return {
				id: this.model.id
			,	title: this.model.get('title')
			,	completed: this.model.get('completed')
			,	can_edit: this.can_edit

			,	add_mode: this.mode === 'add'
			,	edit_mode: this.mode === 'edit'
			,	list_mode: this.mode === 'list'
			};
		}
	});
});

// Collection of Deepak.DeepaksExtension.DeepaksModuleModel

define('Deepak.DeepaksExtension.DeepaksModule.Collection'
,	[
		'Deepak.DeepaksExtension.DeepaksModule.Model'

	,	'Utils'
	,	'Backbone'
	,	'underscore'
	]
,	function (
		DeepaksModuleModel

	,	Utils
	,	Backbone
	,	_
	)
{
	'use strict';

	return Backbone.Collection.extend({

		url: Utils.getAbsoluteUrl(getExtensionAssetsPath('services/DeepaksModule.Service.ss'))
		
	,	model: DeepaksModuleModel
	});
});


define('Deepak.DeepaksExtension.DeepaksModule.Model'
,	[
		'Backbone'
	,	'Utils'
	,	'underscore'
	]
,	function (
		Backbone
	,	Utils
	,	_
	)
{
	'use strict';

	var DeepaksModuleModel = Backbone.Model.extend({

		urlRoot: Utils.getAbsoluteUrl(getExtensionAssetsPath('services/DeepaksModule.Service.ss'))

	,	validation: {
			title: {
				required: true
			,	msg: _('Valid task name is required').translate()
			}
		}

	,	defaults: {
			'title': ''
		,	'completed': false
		}

	,	initialize: function (options)
		{
			this.options = options;
		}
	});

	return DeepaksModuleModel;
});

// @module Deepak.DeepaksExtension.CoolCCT

// An example cct that shows a message with the price, using the context data from the item
// it also links to a complete TODO list example, for you to check how to make CRUD operations

// Use: Utils.getAbsoluteUrl(getExtensionAssetsPath('services/service.ss')) 
// to reference services or images available in your extension assets folder

define(
	'Deepak.DeepaksExtension.CoolCCT'
,   [
		'Deepak.DeepaksExtension.CoolCCT.View'
	,	'Deepak.DeepaksExtension.CoolCCT.Router'
	]
,   function (
		CoolCCTView
	,	CoolCCTRouter
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			container.getComponent('CMS').registerCustomContentType({
				
				// this property value MUST be lowercase
				id: 'cct_deepak_coolcct'
				
				// The view to render the CCT
			,	view: CoolCCTView
			});

			new CoolCCTRouter(container);
		}
	};
});

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


// List View, it will create as child view a collection of Edit Views.

define('Deepak.DeepaksExtension.CoolCCT.List.View'
,	[
		'Deepak.DeepaksExtension.CoolCCT.Edit.View'
	,	'Backbone.CollectionView'
		
	,	'deepak_deepaksextension_coolcct_list.tpl'

	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		CoolCCTEditView
	,	BackboneCollectionView

	,	deepak_deepaksextension_coolcct_list_tpl

	,	Backbone
	,	jQuery
	,	_
	)
{
	'use strict';

	return Backbone.View.extend({

		template: deepak_deepaksextension_coolcct_list_tpl

	,	title: _('DeepaksExtension').translate()

	,	events: {
			'click [data-action="remove"]': 'removeCoolCCT'
		}

	,	initialize: function (options)
		{
			var self = this;
			this.collection.get();
			this.loading = true;
			this.can_edit = options.can_edit;

			this.collection.on('reset sync add remove change destroy', function ()
			{
				self.loading = false;
				self.render();
			});
		}

	,	childViews: {
			'CoolCCT.Collection': function ()
			{
				return new BackboneCollectionView(
				{
					childView: CoolCCTEditView
				,	collection: this.collection
				,	childViewOptions: {
						mode: 'list'
					,	can_edit: this.can_edit
					}
				});
			}
		}

	,	removeCoolCCT: function removeCoolCCT(e)
		{
			var id = jQuery(e.target).data('id');
			this.collection.get(id).destroy({ wait: true });
		}

	,	getContext: function getContext()
		{
			return {
				loading: this.loading
			,	can_edit: this.can_edit
			};
		}
	});
});

// Edit View, it will allow to list, edit and add todo tasks
// depending on the mode

define('Deepak.DeepaksExtension.CoolCCT.Edit.View'
,	[
		'deepak_deepaksextension_coolcct_edit.tpl'

	,	'Backbone.FormView'
	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		deepak_deepaksextension_coolcct_edit_tpl

	,	BackboneFormView
	,	Backbone
	,	jQuery
	,	_
	)
{
	'use strict';

	return Backbone.View.extend({

		template: deepak_deepaksextension_coolcct_edit_tpl

	,	initialize: function (options)
		{
			var self = this;
			this.options = options;
			this.model = options.model;
			this.list = options.collection;
			this.mode = options.mode;
			this.can_edit = options.can_edit;

			BackboneFormView.add(this);

			this.model.on('change', function()
			{
				if(self.mode === 'add')
				{
					self.list.add(self.model);
				}
				else
				{
					self.mode = 'list';
					self.render();
				}
				
			});
		}

	,	events: {
			'click [data-action="edit"]': 'editMode'
		,	'change [name="completed"]': 'markCompleted'
		,	'submit form': 'saveForm'
		}

	,	bindings: {
			'[name="title"]': 'title'
		,	'[name="completed"]': 'completed'
		}

	, 	childViews: {
			
		}

	,	editMode: function editMode()
		{
			this.mode = 'edit';
			this.render();
		}

	,	markCompleted: function markCompleted(e)
		{
			var completed = jQuery(e.target).is(':checked');
			this.model.set('completed', completed);
			this.model.save();
		}

	,	getContext: function getContext()
		{
			return {
				id: this.model.id
			,	title: this.model.get('title')
			,	completed: this.model.get('completed')
			,	can_edit: this.can_edit

			,	add_mode: this.mode === 'add'
			,	edit_mode: this.mode === 'edit'
			,	list_mode: this.mode === 'list'
			};
		}
	});
});

// Collection of Deepak.DeepaksExtension.CoolCCTModel

define('Deepak.DeepaksExtension.CoolCCT.Collection'
,	[
		'Deepak.DeepaksExtension.CoolCCT.Model'

	,	'Utils'
	,	'Backbone'
	,	'underscore'
	]
,	function (
		CoolCCTModel

	,	Utils
	,	Backbone
	,	_
	)
{
	'use strict';

	return Backbone.Collection.extend({

		url: Utils.getAbsoluteUrl(getExtensionAssetsPath('services/CoolCCT.Service.ss'))
		
	,	model: CoolCCTModel
	});
});


define('Deepak.DeepaksExtension.CoolCCT.Model'
,	[
		'Backbone'
	,	'Utils'
	,	'underscore'
	]
,	function (
		Backbone
	,	Utils
	,	_
	)
{
	'use strict';

	var CoolCCTModel = Backbone.Model.extend({

		urlRoot: Utils.getAbsoluteUrl(getExtensionAssetsPath('services/CoolCCT.Service.ss'))

	,	validation: {
			title: {
				required: true
			,	msg: _('Valid task name is required').translate()
			}
		}

	,	defaults: {
			'title': ''
		,	'completed': false
		}

	,	initialize: function (options)
		{
			this.options = options;
		}
	});

	return CoolCCTModel;
});

// Deepak.DeepaksExtension.CoolCCTView, this is the view your cct
// will load after dragged into the application

define('Deepak.DeepaksExtension.CoolCCT.View'
,	[
		'CustomContentType.Base.View'

	,	'deepak_deepaksextension_coolcct.tpl'

	,	'jQuery'
	,	'underscore'
	]
,	function (
		CustomContentTypeBaseView

	,	deepak_deepaksextension_coolcct_tpl

	,	jQuery
	,	_
	)
{
	'use strict';

	return CustomContentTypeBaseView.extend({

		template: deepak_deepaksextension_coolcct_tpl

		// As an example of the 'install' method, we are going to emulate a fetch to a service with the setTimeout
		// Until the promise is resolved, you won't be able to edit the settings of this CCT
		// The same could happen with the 'update' method
	,	install: function (settings, context_data)
		{
			this._install(settings, context_data);

			// call some ajax here
			
			var promise = jQuery.Deferred();
			return promise.resolve();
		}

		// The list of contexts that you may need to run the CCT
		// These are all the context data you have available by default depending on where you dropped the cct
	,	contextDataRequest: ['item']

		// By default when you drop a CCT in the SMT admin, it will run the 'validateContextDataRequest' method to check that you have
		// all the requested contexts and it will fail if some context is missing.
		// We will override the 'validateContextDataRequest' method to return always true
		// since I want to run the CCT even if I don't have an 'item' or the rest of the context data
	,	validateContextDataRequest: function validateContextDataRequest()
		{
			return true;
		}

	,	getContext: function getContext()
		{
			var text = 'Awesome price, only for today';

			//example of how to access context data from the item
			if (this.contextData.item)
			{
				var item = this.contextData.item();

				text += ' at $' + item.keyMapping_price + '!!';
			}

			// if you would want to get the settings from the SMT Panel you would consult
			// var field_value = this.settings.custrecord_<id of the custom field in the cct record>

			return {
				promotion_text: text
			};
		}
	});
});

// Entry point for javascript creates a router to handle new routes and adds a view inside the Product Details Page

define(
	'Deepak.DeepaksExtension.DeepaksModule'
,   [
		'Deepak.DeepaksExtension.DeepaksModule.List.View'
	,	'Deepak.DeepaksExtension.DeepaksModule.Collection'
	,	'Deepak.DeepaksExtension.DeepaksModule.Router'
	]
,   function (
		DeepaksModuleListView
	,	DeepaksModuleCollection
	,	DeepaksModuleRouter
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// create a model and instantate the router
			var collection = new DeepaksModuleCollection();
			new DeepaksModuleRouter(container);

			// using the 'PDP' component we add a new child view inside the 'Product.Information' existing view 
			// (there will be an DOM element with the HTML attribute data-view="Product.Information")

			/** @type {ProductDetailsComponent} */
			var pdp = container.getComponent('PDP');
			
			if(pdp)
			{
				pdp.addChildViews(
					'ProductDetails.Full.View'
				,	{
						'Product.Information': {
							'Deepak.DeepaksExtension.DeepaksModule.List.View':
							{
								childViewIndex: 5
							,	childViewConstructor: function()
								{
									collection.fetch();

									return new DeepaksModuleListView({
										collection: collection
									,	can_edit: false
									});
								}
							}
						}
					}
				);
			}

		}
	};
});


};


try{
	extensions['Deepak.DeepaksExtension.1.0.0']();
	SC.addExtensionModule('Deepak.DeepaksExtension.DeepaksModule');
}
catch(error)
{
	console.error(error);
}

