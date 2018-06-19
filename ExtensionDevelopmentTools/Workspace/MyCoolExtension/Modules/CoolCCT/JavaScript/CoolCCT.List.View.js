// List View, it will create as child view a collection of Edit Views.

define('Deepak.MyCoolExtension.CoolCCT.List.View'
,	[
		'Deepak.MyCoolExtension.CoolCCT.Edit.View'
	,	'Backbone.CollectionView'
		
	,	'deepak_mycoolextension_coolcct_list.tpl'

	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	]
,	function (
		CoolCCTEditView
	,	BackboneCollectionView

	,	deepak_mycoolextension_coolcct_list_tpl

	,	Backbone
	,	jQuery
	,	_
	)
{
	'use strict';

	return Backbone.View.extend({

		template: deepak_mycoolextension_coolcct_list_tpl

	,	title: _('MyCoolExtension').translate()

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