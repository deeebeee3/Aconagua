{{#if showCells}}
	<aside class="item-relations-correlated">
		<h3>{{translate 'Customers who bought this item also bought'}}</h3>
		<div class="item-relations-correlated-row">
			<div data-type="backbone.collection.view.rows"></div>
		</div>
	</aside>
{{/if}}



{{!----
Use the following context variables when customizing this template: 
	
	collection (Array)
	showCells (Boolean)

----}}
