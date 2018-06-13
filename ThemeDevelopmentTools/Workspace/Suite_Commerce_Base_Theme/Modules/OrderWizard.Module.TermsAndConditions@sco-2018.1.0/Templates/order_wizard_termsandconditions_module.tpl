{{#if showWrapper}}
<div class="{{wrapperClass}}">
{{/if}}
	<label class="order-wizard-termsandconditions-module-label">
		<input type="checkbox" id="termsandconditions" name="termsandconditions" {{#if isAgreeTermCondition}}checked{{/if}}>
		{{translate 'I agree to the <a data-type="term-condition-link-module" data-toggle="show-terms" href="#">Terms & Conditions</a>'}}
	</label>
{{#if showWrapper}}
</div>
{{/if}}

{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context variables in the Console of your browser's developer tools.

----}}
