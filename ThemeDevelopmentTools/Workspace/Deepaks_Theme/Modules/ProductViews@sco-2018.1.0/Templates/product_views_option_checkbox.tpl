<div id="{{cartOptionId}}-container" class="product-views-option-checkbox" data-type="option" data-cart-option-id="{{cartOptionId}}" data-item-option-id="{{itemOptionId}}">
	<div class="{{cartOptionId}}-controls-group" data-validation="control-group">
		{{#if showLabel}}
			<label class="product-views-option-checkbox-label" for="{{cartOptionId}}">
				{{label}}
			</label>
		{{/if}}
		<div data-validation="control">			
			<input
				name="{{cartOptionId}}"
				type="checkbox"
				id="{{cartOptionId}}"
				class="product-views-option-checkbox-input"
				value="T"
				{{#if isActive}}checked{{/if}}				
				>			
		</div>
	</div>
</div>

{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context variables in the Console of your browser's developer tools.

----}}
