{{#if isAvailableForShip}}
	<div class="pickup-in-store-fulfillment-options-ship pickup-in-store-fulfillment-options">
		<i class="pickup-in-store-fulfillment-options-ship-icon" aria-hidden="true"></i>
		{{translate 'Ship'}}
	</div>
{{/if}}

{{#if isAvailableForPickup}}
	<div class="pickup-in-store-fulfillment-options-pickup pickup-in-store-fulfillment-options">
		<i class="pickup-in-store-fulfillment-options-pickup-icon" aria-hidden="true"></i>
		{{translate 'Pick up in Store'}}
	</div>
{{/if}}

{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context variables in the Console of your browser's developer tools.

----}}
