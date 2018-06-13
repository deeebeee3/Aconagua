{{#if hasBanner}}
	{{#if hasLink}}
		<a href="{{linkUrl}}" target="{{linkTarget}}"><img src="{{imageSource}}"></a>
	{{else}}
		<img src="{{imageSource}}">
	{{/if}}

	<hr>
{{/if}}



{{!----
Use the following context variables when customizing this template: 
	
	hasBanner (Boolean)
	hasLink (Boolean)

----}}
