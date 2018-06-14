<div class="product-list-bulk-actions-button-group">

	<button class="product-list-bulk-actions-button-addtocart" data-action="add-items-to-cart" {{#unless isAddToCartEnabled}}disabled{{/unless}}>{{translate 'Add Items to Cart'}}</button>
	<button class="product-list-bulk-actions-button-expander" data-toggle="dropdown" aria-expanded="false" {{#unless isAtLeastOneItemChecked}}disabled{{/unless}}>
		<i></i>
	</button>
	
	<ul class="product-list-bulk-actions-dropdown" role="menu">
		<li>
			<a href="#" data-action="delete-items">{{translate 'Remove Items'}}</a>
		</li>
	</ul>
</div>



{{!----
Use the following context variables when customizing this template: 
	
	isAtLeastOneItemChecked (Boolean)
	hasItems (Number)
	isAddToCartEnabled (Boolean)
	isTypePredefined (Boolean)

----}}
