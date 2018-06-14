<div class="landing-page-header">
	{{#if pageHeaderAndNotInModal}}
		<h1>{{pageHeader}}</h1>
	{{/if}}
	<div id="main-banner" class="landing-page-main-banner"></div>
</div>
{{#if pageAndPageContent}}
	<div id="landing-page-content" class="landing-page-content">
		{{{pageContent}}}
	</div>
{{/if}}

{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context variables in the Console of your browser's developer tools.

----}}
