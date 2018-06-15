// List View, it will create as child view a collection of Edit Views.

define('Deepak.DeepaksExtension.DeepaksSecondModule.List.View'
,	[
		'Deepak.DeepaksExtension.DeepaksSecondModule.Edit.View'
	,	'Backbone.CollectionView'
		
	,	'deepak_deepaksextension_deepakssecondmodule_list.tpl'

	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		DeepaksSecondModuleEditView
	,	BackboneCollectionView

	,	deepak_deepaksextension_deepakssecondmodule_list_tpl

	,	Backbone
	,	jQuery
	,	_
	)
{
	'use strict';

	return Backbone.View.extend({

		template: deepak_deepaksextension_deepakssecondmodule_list_tpl

	,	title: _('DeepaksExtension').translate()

	,	events: {
			'click [data-action="remove"]': 'removeDeepaksSecondModule'
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
			'DeepaksSecondModule.Collection': function ()
			{
				return new BackboneCollectionView(
				{
					childView: DeepaksSecondModuleEditView
				,	collection: this.collection
				,	childViewOptions: {
						mode: 'list'
					,	can_edit: this.can_edit
					}
				});
			}
		}

	,	removeDeepaksSecondModule: function removeDeepaksSecondModule(e)
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