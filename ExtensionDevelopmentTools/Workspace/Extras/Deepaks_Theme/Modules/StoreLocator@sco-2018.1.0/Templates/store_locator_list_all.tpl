<div class="store-locator-list-all-main">
	<h2>Store List</h2>

	{{#if showList}}
		<ul data-view="StoreLocatorListAllStoreView" class="store-locator-list-all-container"></ul>
		<div data-view="GlobalViews.Pagination"></div>
	{{else}}
		<div class="store-locator-list-all-container">
			<p>{{translate 'The list of stores is not available.'}}</p>
		</div>
	{{/if}}
</div>



{{!----
Use the following context variables when customizing this template: 
	
	showList (Boolean)

----}}
