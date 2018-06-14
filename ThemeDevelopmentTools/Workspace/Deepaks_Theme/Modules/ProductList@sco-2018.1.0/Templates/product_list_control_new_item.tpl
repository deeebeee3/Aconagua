<a class="product-list-control-new-item-button-create" data-action="show-add-new-list-form">
	{{translate 'Create a New List'}}
</a>
<form action="#" data-action="create-and-move" data-type="product-list-control-add-new-list-form" class="product-list-control-new-item-add-new-list-form">
	<div class="product-list-control-new-item-add-new-list-input-container" data-validation="control-group">
		<input class="product-list-control-new-item-add-new-list-input" name="name" type="text" data-type="new-product-list-name" placeholder="{{translate 'Your new list name'}}" >
	</div>

	<div class="product-list-control-new-item-add-new-list-buttons">
		<button type="submit" class="product-list-control-new-item-button-create">
		{{#if isMoving}}
			{{translate 'Create and Move Item'}}
		{{else}}
			{{translate 'Create and Add Item'}}
		{{/if}}
		</button>
	</div>
</form>




{{!----
Use the following context variables when customizing this template: 
	
	isMoving (Boolean)

----}}
