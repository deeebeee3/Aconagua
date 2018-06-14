<section class="facets-browse-category-heading-list-header">
	<div class="facets-browse-category-heading-main-description">
		<h1>{{pageheading}}</h1>
		{{#if showDescription}}	
			<p>{{{description}}}</p>
		{{/if}}
	</div>
	{{#if hasBanner}}
		<div class="facets-browse-category-heading-main-image">
			<img src="{{resizeImage banner 'categorybanner'}}" alt="{{pageheading}}" />
		</div>
	{{/if}}
</section>




{{!----
Use the following context variables when customizing this template: 
	
	name (String)
	banner (String)
	description (String)
	pageheading (String)
	hasBanner (Boolean)
	showDescription (Boolean)

----}}
