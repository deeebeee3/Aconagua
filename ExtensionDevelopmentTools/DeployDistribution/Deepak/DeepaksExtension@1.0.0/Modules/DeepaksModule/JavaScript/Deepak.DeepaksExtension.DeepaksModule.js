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
