// Entry point for javascript creates a router to handle new routes and adds a view inside the Product Details Page

define(
	'Deepak.DeepaksExtension.DeepaksSecondModule'
,   [
		'Deepak.DeepaksExtension.DeepaksSecondModule.List.View'
	,	'Deepak.DeepaksExtension.DeepaksSecondModule.Collection'
	,	'Deepak.DeepaksExtension.DeepaksSecondModule.Router'
	]
,   function (
		DeepaksSecondModuleListView
	,	DeepaksSecondModuleCollection
	,	DeepaksSecondModuleRouter
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// create a model and instantate the router
			var collection = new DeepaksSecondModuleCollection();
			new DeepaksSecondModuleRouter(container);

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
							'Deepak.DeepaksExtension.DeepaksSecondModule.List.View':
							{
								childViewIndex: 5
							,	childViewConstructor: function()
								{
									collection.fetch();

									return new DeepaksSecondModuleListView({
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
