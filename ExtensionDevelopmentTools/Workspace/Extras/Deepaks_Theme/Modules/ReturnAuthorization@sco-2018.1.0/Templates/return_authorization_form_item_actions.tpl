{{#if isLineActive}}
	<label class="return-authorization-form-item-actions-label" for="reason">
		{{translate 'Reason for return'}} <span class="return-authorization-form-item-actions-required">*</span>
	</label>
	{{#if showReasons}}
		<select data-action="reasons" name="reason" class="return-authorization-form-item-actions-options" data-toggle="false">
			<option value="">{{translate 'Select a reason'}}</option>
			{{#each reasons}}
				<option value="{{id}}" {{#if isSelected}}selected{{/if}}>{{text}}</option>
			{{/each}}
			{{!-- <option value="other" {{#if isOtherReasonSelected}}selected{{/if}}>{{translate 'Other'}}</option> --}}
		</select>

		{{#if isOtherReasonSelected}}
			<input type="text" data-action="reason-text" name="reason-text" value="{{textReason}}" data-toggle="false" class="return-authorization-form-item-actions-other-reason-input">
		{{/if}}

		{{#if activeLinesLengthGreaterThan1}}
			<a href="#" class="return-authorization-form-item-actions-apply-reason-button" data-action="apply-reason" data-toggle="false">{{translate 'Apply to all'}}</a>
		{{/if}}

	{{else}}
		<input type="text" data-action="reason-text" name="reason-text" value="{{textReason}}" data-toggle="false" class="return-authorization-form-item-actions-other-reason-text">
	{{/if}}
{{/if}}

{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context variables in the Console of your browser's developer tools.

----}}
