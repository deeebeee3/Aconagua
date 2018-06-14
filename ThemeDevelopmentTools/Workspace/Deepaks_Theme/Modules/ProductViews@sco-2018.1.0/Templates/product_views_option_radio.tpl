<div id="{{cartOptionId}}-container" class="product-views-option-radio" data-type="option" data-cart-option-id="{{cartOptionId}}" data-item-option-id="{{itemOptionId}}">
	<div class="{{cartOptionId}}-controls-group" data-validation="control-group">
		{{#if showLabel}}
		<div class="product-views-option-radio-label-header">
			<label class="product-views-option-radio-label" for="{{cartOptionId}}">
				{{label}}:
			</label>
			{{#if showSelectedValue}}
				 <span class="product-views-option-radio-value" data-value="{{cartOptionId}}">{{selectedValue.label}}</span>
			{{/if}}
			{{#if showRequiredLabel}}<span class="product-views-option-radio-input-required">*</span>{{/if}}
		</div>
		{{/if}}
		<div  class="{{cartOptionId}}-controls" data-validation="control">
			{{#each values}}
				{{#if internalId}}
					<label data-label="label-{{../cartOptionId}}" class="{{#if isActive}}active{{/if}}" value="{{internalId}}">
						<input
							type="radio"
							id="{{../cartOptionId}}"
							name="{{../cartOptionId}}"
							data-action="changeOption"
							value="{{internalId}}"
							{{#if isActive}}checked{{/if}}
							data-toggle="set-option"
							data-active="{{isActive}}"
							data-available="{{isAvailable}}"
							class="product-views-option-radio-input">
						<span class="product-views-option-radio-value">{{label}}</span>
					</label>
				{{/if}}
			{{/each}}
		</div>
	</div>
</div>

{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context variables in the Console of your browser's developer tools.

----}}
