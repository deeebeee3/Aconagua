<div class="facets-empty">
    <h1 class="facets-empty-title">{{translate 'Sorry, we couldn´t find any products.'}}</h1>
    <p>
        {{#if keywords}}
            {{translate 'We were unable to find results for <strong>$(0)</strong>. Please check your spelling or try searching for similar terms.' keywords}}
        {{/if}}
    </p>
    <div class="facets-empty-merchandising-zone">
        <div data-type="merchandising-zone" data-id="newArrivals"></div>
    </div>
</div>



{{!----
Use the following context variables when customizing this template: 
	
	keywords (undefined)

----}}
