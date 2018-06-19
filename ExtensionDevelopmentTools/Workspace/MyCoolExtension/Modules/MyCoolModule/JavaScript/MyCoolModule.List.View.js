// List View, it will create as child view a collection of Edit Views.

define('Deepak.MyCoolExtension.MyCoolModule.List.View'
,	[
		'Deepak.MyCoolExtension.MyCoolModule.Edit.View'
	,	'Backbone.CollectionView'
		
	,	'deepak_mycoolextension_mycoolmodule_list.tpl'

	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		MyCoolModuleEditView
	,	BackboneCollectionView

	,	deepak_mycoolextension_mycoolmodule_list_tpl

	,	Backbone
	,	jQuery
	,	_
	)
{
	'use strict';

	return Backbone.View.extend({

		template: deepak_mycoolextension_mycoolmodule_list_tpl

	,	title: _('MyCoolExtension').translate()

	,	events: {
			'click [data-action="remove"]': 'removeMyCoolModule'
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
			'MyCoolModule.Collection': function ()
			{
				return new BackboneCollectionView(
				{
					childView: MyCoolModuleEditView
				,	collection: this.collection
				,	childViewOptions: {
						mode: 'list'
					,	can_edit: this.can_edit
					}
				});
			}
		}

	,	removeMyCoolModule: function removeMyCoolModule(e)
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