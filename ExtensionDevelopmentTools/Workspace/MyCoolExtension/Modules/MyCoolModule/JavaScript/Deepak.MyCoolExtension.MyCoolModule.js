// Entry point for javascript creates a router to handle new routes and adds a view inside the Product Details Page

define(
	'Deepak.MyCoolExtension.MyCoolModule'
,   [
		'Deepak.MyCoolExtension.MyCoolModule.List.View'
	,	'Deepak.MyCoolExtension.MyCoolModule.Collection'
	,	'Deepak.MyCoolExtension.MyCoolModule.Router'
	]
,   function (
		MyCoolModuleListView
	,	MyCoolModuleCollection
	,	MyCoolModuleRouter
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// create a model and instantate the router
			var collection = new MyCoolModuleCollection();
			new MyCoolModuleRouter(container);

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
							'Deepak.MyCoolExtension.MyCoolModule.List.View':
							{
								childViewIndex: 5
							,	childViewConstructor: function()
								{
									collection.fetch();

									return new MyCoolModuleListView({
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
