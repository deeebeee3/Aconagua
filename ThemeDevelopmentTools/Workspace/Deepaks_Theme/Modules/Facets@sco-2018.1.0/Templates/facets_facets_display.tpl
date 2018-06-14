{{#if hasFacets}}
	<span class="facets-facets-display-narrowedby-title">{{translate 'Narrowed By:'}}</span>

	{{#each values}}
		<a class="facets-facets-display-filter" data-type="facet-selected" data-facet-id="{{facetValue}}" href="{{facetValueUrl}}">
			<span>
				{{#if facetValueIsObject}}
					{{translate '$(0) to $(1)' from to}}
				{{else}}
					{{valueLabel}}
				{{/if}}
			</span>
			<i class="facets-facets-display-filter-delete-icon" title="{{translate 'Clear filter'}}"></i>
		</a>
	{{/each}}

	<div class="facets-facets-display-clear-wrapper">
		<a href="{{clearAllFacetsLink}}" class="facets-facets-display-clear">
			<span>{{translate 'Clear All'}}</span>
			<i class="facets-facets-display-clear-icon"></i>
		</a>
	</div>
{{/if}}



{{!----
Use the following context variables when customizing this template:

	hasFacets (Boolean)
	clearAllFacetsLink (String)
	values (Array)

----}}
