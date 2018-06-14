{{#if showLocation}}
	<section class="order-wizard-cartitems-pickup-in-store-details-container">
		<div class="order-wizard-cartitems-pickup-in-store-details-body">
			<h4 class="order-wizard-cartitems-pickup-in-store-details-title">
				{{translate 'Pick Up at $(0)' location.name}}
			</h4>
			<div class="order-wizard-cartitems-pickup-in-store-details-address">
				<div class="order-wizard-cartitems-pickup-in-store-details-address-container" data-view="PickupInStore.StoreLocationInfo"></div>
			</div>
			<div class="order-wizard-cartitems-pickup-in-store-details-item-list">
					<div data-view="Items.Collection"></div>
			</div>
		</div>
	</section>
{{/if}}

{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context variables in the Console of your browser's developer tools.

----}}
