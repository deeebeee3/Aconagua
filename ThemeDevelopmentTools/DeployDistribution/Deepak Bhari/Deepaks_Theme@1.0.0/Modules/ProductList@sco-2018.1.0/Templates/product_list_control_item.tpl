<div class="product-list-control-item">
	{{#if isMoving}}
		<span class="product-list-control-item-label" data-action="product-list-item">
			{{#if isTypePredefined}}
				{{translate itemName}}
			{{else}}
				{{itemName}}
			{{/if}}
		</span>
	{{else}}
		<label class="product-list-control-item-label">
			<input class="product-list-control-item-checkbox" type="checkbox" data-product-list-id="{{listId}}" data-action="product-list-item" {{#if isChecked}}checked{{/if}}>		

			{{#if isTypePredefined}}
				{{translate itemName}}
			{{else}}
				{{itemName}}
			{{/if}}
		</label>
	{{/if}}	
</div>




{{!----
Use the following context variables when customizing this template: 
	
	isMoving (Boolean)
	isChecked (Boolean)
	isTypePredefined (Boolean)
	itemName (String)
	listId (String)

----}}
