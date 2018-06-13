<div class="product-list-deletion-body">
	{{body}}
</div>
<div class="product-list-deletion-footer">
	<button class="product-list-deletion-button-delete-button" data-action="delete">
		{{#if hasConfirmLabel}}
			{{confirmLabel}}
		{{else}}
			{{translate 'Yes'}}
		{{/if}}
	</button>
	<button class="product-list-deletion-button-delete-cancel" data-dismiss="modal" data-action="cancel">
		{{#if hasCancelLabel}}
			{{cancelLabel}}
		{{else}}
			{{translate 'Cancel'}}
		{{/if}}
	</button>
</div>

{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context variables in the Console of your browser's developer tools.

----}}
