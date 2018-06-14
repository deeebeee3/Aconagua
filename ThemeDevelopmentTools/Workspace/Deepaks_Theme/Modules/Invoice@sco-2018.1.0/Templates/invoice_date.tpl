{{#if showOverdueFlag}}
	<span class="invoice-date-overdue">{{dueDate}}</span>
	<i class="invoice-date-overdue-icon"></i>
{{else}}
	<span class="invoice-date-due"> 
		{{dueDate}}
	</span>
{{/if}}
{{#if showPartiallyPaid}}
	<span class="invoice-date-legend">{{translate 'Partially paid'}}</span>
{{/if}}

{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context variables in the Console of your browser's developer tools.

----}}
