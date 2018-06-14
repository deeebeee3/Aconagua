<div class="order-wizard-paymentmethod-paypal-module-row">
	<div class="order-wizard-paymentmethod-paypal-module-column-left">
		<img class="order-wizard-paymentmethod-paypal-module-paypal-logo" src="{{getThemeAssetsPathWithDefault paypalImageUrl 'img/paypal.png'}}" alt="PayPal">
	</div>
	<div class="order-wizard-paymentmethod-paypal-module-column-right">

		{{#if isPaypalComplete}}
			<p>
				{{translate 'You have selected to pay using PayPal as your payment method.'}}
			</p>
			<p>
				{{translate 'To review your order, click the "Continue" button below.'}}
			</p>
		{{else}}
			<p>
				{{translate 'Please select the "Continue To PayPal" button below to sign in into your PayPal account.'}}
			</p>
			<p>
				{{translate 'You will be redirected to PayPal, but will have an opportunity to review your order back on our site before purchasing.'}}
			</p>
		{{/if}}
	</div>
</div>

{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context variables in the Console of your browser's developer tools.

----}}
