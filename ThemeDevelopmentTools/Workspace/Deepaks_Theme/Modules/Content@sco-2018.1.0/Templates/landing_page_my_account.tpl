<div class="landing-page-my-account-header">
	{{#if pageHeaderAndNotInModal}}
		<h3>{{pageHeader}}</h3>
		<hr>
	{{/if}}
	<div id="main-banner" class="landing-page-my-account-main-banner"></div>
</div>
{{#if pageAndPageContent}}
	<div id="landing-page-content" class="landing-page-my-account-content">
		{{{pageContent}}}
	</div>
{{/if}}

{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context variables in the Console of your browser's developer tools.

----}}
