<article class="overview-shipping">
	<div class="overview-shipping-header">
		<h4>{{translate 'Shipping'}}</h4>
	</div>
	<section class="overview-shipping-card">
	{{#if hasDefaultShippingAddress}}
		<div data-view="Address.Details" class="overview-shipping-card-content"></div>
		<a class="overview-shipping-card-button-edit" href="/addressbook/{{shippingAddressInternalid}}" data-toggle="show-in-modal">{{translate 'Edit'}}</a>
	{{else}}
		<div class="overview-shipping-card-content">
			<p>{{translate 'We have no default address on file for this account.'}}</p>
		</div>	
		<a href="/addressbook/new" class="overview-shipping-card-button-edit" data-toggle="show-in-modal">{{translate 'Create New Address'}}</a>
	{{/if}}
	</section>
</article>



{{!----
Use the following context variables when customizing this template: 
	
	hasDefaultShippingAddress (Boolean)
	shippingAddressInternalid (String)

----}}
