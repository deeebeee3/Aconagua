{{#if showStockDescription}}
	<p class="product-line-stock-description-msg-description {{stockInfo.stockDescriptionClass}}">
		<i class="product-line-stock-description-icon-description"></i>
		{{stockInfo.stockDescription}}
	</p>
{{/if}}




{{!----
Use the following context variables when customizing this template: 
	
	showStockDescription (Boolean)
	stockInfo (Object)
	stockInfo.isInStock (Boolean)
	stockInfo.outOfStockMessage (String)
	stockInfo.showOutOfStockMessage (Boolean)
	stockInfo.inStockMessage (String)
	stockInfo.showInStockMessage (Boolean)
	stockInfo.stockDescription (String)
	stockInfo.showStockDescription (Boolean)
	stockInfo.stockDescriptionClass (String)
	stockInfo.isNotAvailableInStore (Boolean)
	stockInfo.stockPerLocation (Array)
	stockInfo.isAvailableForPickup (Boolean)
	stockInfo.showQuantityAvailable (Boolean)

----}}
