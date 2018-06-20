<a data-action="edit" class="payment-wizard-invoice-action-button {{#unless showAction}}hidden{{/unless}}" href="#" >
	{{#if isPayfull}}
		{{translate 'Edit Payment'}}
	{{else}}
		{{translate 'Partial Payment'}}
	{{/if}}
</a>



{{!----
Use the following context variables when customizing this template: 
	
	isPayfull (Boolean)
	showAction (Boolean)

----}}
