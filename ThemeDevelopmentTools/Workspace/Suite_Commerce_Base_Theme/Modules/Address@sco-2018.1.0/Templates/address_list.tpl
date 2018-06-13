{{#if showBackToAccount}}
	<a href="/" class="address-list-button-back">
		<i class="address-list-button-back-icon"></i>
		{{translate 'Back to Account'}}
	</a>
{{/if}}

<section class="address-list">
	<h2>{{pageHeader}}</h2>
	<div class="address-list-button-container">
		<a href="/addressbook/new"  class="address-list-button-info-cards-new" data-toggle="show-in-modal"> {{translate 'Add New Address'}}</a>		
	</div>

	<div class="address-list-default-addresses">
		<div data-view="Addresses.Collection"></div>
	</div>
</section>




{{!----
Use the following context variables when customizing this template: 
	
	pageHeader (String)
	isAddressCollectionLengthGreaterThan0 (Boolean)
	showBackToAccount (Boolean)

----}}
