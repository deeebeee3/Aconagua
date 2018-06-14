{{#if isLoading}}
	<div class="product-details-add-to-product-list-loading">
		{{translate 'Loading List...'}}
	</div>
{{else}}
	<div data-view="ProductListControl"></div>
{{/if}}



{{!----
Use the following context variables when customizing this template: 
	
	isLoading (Boolean)

----}}
