<div class="product-reviews-form-preview">
    <h1>{{{header}}}</h1>

    <div class="product-reviews-form-preview-divider-desktop"></div>
    <div class="product-reviews-form-preview-divider"></div>

    <div class="product-reviews-form-preview-item-cell">
        <div data-view="Facets.ItemCell" data-template="facets_item_cell_list"></div>
    </div>
    
    <div class="product-reviews-form-preview-content">
        <form>
        	<div class="product-reviews-form-preview-main">
        		<div data-view="ProductReviews.Preview"></div>
        	</div>
            <div class="product-reviews-form-preview-actions">
        		<button type="button" class="product-reviews-form-preview-actions-button-submit" data-action="save">{{translate 'Submit Review'}}</button>
        		<button type="button" class="product-reviews-form-preview-actions-button-edit" data-action="edit">{{translate 'Edit Review'}}</button>
        	</div>
        </form>
    </div>
</div>



{{!----
Use the following context variables when customizing this template: 
	
	header (String)
	itemUrl (String)

----}}
