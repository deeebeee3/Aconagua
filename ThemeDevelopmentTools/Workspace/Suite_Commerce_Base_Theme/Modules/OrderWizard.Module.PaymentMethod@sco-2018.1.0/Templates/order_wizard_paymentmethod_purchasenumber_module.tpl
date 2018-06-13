<div class="order-wizard-paymentmethod-purchasenumber-module">
	<h3 class="order-wizard-paymentmethod-purchasenumber-module-title">
		{{translate 'Purchase Order Number'}}
	 </h3>
	<div class="order-wizard-paymentmethod-purchasenumber-module-row">
		<label for="purchase-order-number" class="order-wizard-paymentmethod-purchasenumber-module-purchase-order-label">
			{{translate 'Enter Purchase Order Number'}} <span class="order-wizard-paymentmethod-purchasenumber-module-purchase-order-optional"> {{ translate '(Optional)' }} </span>
		</label>
		<input
			type="text"
			name="purchase-order-number"
			id="purchase-order-number"
			class="order-wizard-paymentmethod-purchasenumber-module-purchase-order-value"
			value="{{purchaseNumber}}"
		>
	</div>
</div>

{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context variables in the Console of your browser's developer tools.

----}}
