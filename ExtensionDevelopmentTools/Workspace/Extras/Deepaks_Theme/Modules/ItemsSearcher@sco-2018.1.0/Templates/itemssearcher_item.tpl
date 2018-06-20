{{#if isItemSelected}}
	<a class="itemssearcher-item-results" data-hashtag="{{model._url}}" data-touchpoint="home">
	    <div class="itemssearcher-item-results-image">
	        <img data-loader="false" class="typeahead-image" src="{{resizeImage model._thumbnail.url 'thumbnail'}}" alt="{{model._thumbnail.altimagetext}}">
	    </div>
	    <div class="itemssearcher-item-results-content">
	        <div class="itemssearcher-item-results-title">
	            {{highlightKeyword model._name currentQuery}}
	        </div>
	        <div data-view="Global.StarRating"></div>
	    </div>
	</a>
{{else}}
	<div class="itemssearcher-item-shadow"></div>
	{{#if hasResults}}
		<div class="itemssearcher-item-all-results">
			{{translate 'See all results'}}
			<span class="hide">{{currentQuery}}</span>
		</div>
	{{else}}
		{{#if isAjaxDone}}
			<div class="itemssearcher-item-no-results">
				{{translate 'No results'}}
				<span class="hide">{{currentQuery}}</span>
			</div>
		{{else}}
			<div class="itemssearcher-item-searching">
				{{translate 'Searching...'}}
				<span class="hide">{{currentQuery}}</span>
			</div>
		{{/if}}
	{{/if}}
{{/if}}

{{!----
The context variables for this template are not currently documented. Use the {{log this}} helper to view the context variables in the Console of your browser's developer tools.

----}}
