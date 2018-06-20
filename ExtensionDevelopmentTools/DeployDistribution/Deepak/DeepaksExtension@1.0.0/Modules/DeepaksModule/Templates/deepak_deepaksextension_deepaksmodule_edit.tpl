
<div class="deepaksmodule-container">
  {{#if list_mode}}
    <section class="deepaksmodule-list-card">
      <input id="completed" name="completed" type="checkbox" {{#if completed}} checked {{/if}}>
     
      <h3 class="deepaksmodule-todo-title {{#if completed}}deepaksmodule-completed{{/if}}">{{title}}</h3>
      
      <button class="deepaksmodule-button-delete" data-action="remove" ><i data-id={{id}} class="deepaksmodule-delete-icon"></i></button>

      {{#if can_edit}}
        <a href="/test_extension/{{id}}" class="deepaksmodule-button-edit" data-toggle="show-in-modal">{{translate 'Edit'}}</a>
      {{/if}}
      <div class="deepaksmodule-clear">
      </div>
     
    </section>
  {{else}}
    <h3 class="deepaksmodule-form-title">{{translate 'DeepaksExtension To Do'}}</h3>
    
    <form class="deepaksmodule-form">
      <fieldset>
          <label for="title">{{translate 'Task name'}}:<small class="required">*</small></label>
          <input type="text" id="title" name="title" value="{{title}}"/>
      </fieldset>
      <button class="deepaksmodule-submit-button" data-action="submit" data-toggle="show-in-modal"> 
        {{#if add_mode}} 
          {{translate 'Add'}}
        {{else}}
          {{translate 'Save'}}
        {{/if}}
      </button>
    </form>
    <div data-type="alert-placeholder"></div>

  {{/if}}
</div>

<!--
  Available helpers:
  {{ getExtensionAssetsPath ‘img/image.jpg’}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var ‘img/image.jpg’}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var ‘img/image.jpg’}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var ‘img/theme-image.jpg’}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->