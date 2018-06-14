{{#if showActions}}
	<a 
		class="receipt-details-item-actions-reorder" 
		data-action="addToCart"
		data-line-id="{{line.internalid}}"
		data-item-id="{{itemId}}" 
		data-item-quantity="{{line.quantity}}"
		data-partial-quantity="{{line.partial_quantity}}" 
		data-parent-id="{{itemParentId}}" 
		data-item-options="{{lineFormatOptions}}">
		{{#if isQuantityGreaterThan1}}
			{{translate 'Reorder these Items'}}
		{{else}}
			{{translate 'Reorder this Item'}}
		{{/if}}
	</a>
{{/if}}

{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context variables in the Console of your browser's developer tools.

----}}
