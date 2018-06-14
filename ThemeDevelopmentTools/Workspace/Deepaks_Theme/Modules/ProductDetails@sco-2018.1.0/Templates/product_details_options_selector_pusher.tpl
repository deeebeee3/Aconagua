<div class="product-details-options-selector-pusher" data-validation="control-group">
	<div data-validation="control" class="product-details-options-selector-pusher-validation">
		<button type="button" class="product-details-options-selector-pusher-button" name="options">
			{{#if isSelectionCompleted}}
				{{translate 'Options'}}
			{{else}}
				{{translate 'Select options'}}
			{{/if}}
			{{#if hasSelectedOptions}}:{{/if}}

			<i></i>

			{{#each selectedOptions}}
				{{#if @first}}
					<span> {{label}} </span>
				{{else}}
					<span> , {{label}} </span>
				{{/if}}
			{{/each}}
		</button>
	</div>
</div>

{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context variables in the Console of your browser's developer tools.

----}}
