Sometimes your extensions will need to add new views in an existing page or even create new full visual experiences. 

For this is necessary to define new {@link View} classes and write their html templates and this tutorial is just about that.

The default way of implementing a view is by requiring [Backbone](backbonejs.org) library and use {@link View.extend} method as shown in the following snippet:

```javascript
define('MyCoolView', ['Backbone', 'my_cool.tpl'], function (Backbone, my_cool_tpl)
{
    return Backbone.View.extend({

        template: my_cool_tpl,   
        
        getContext: function () {
            return {
                name: 'John'
            };
        }
    });
});
```

And the ```my_cool.tpl``` template could be written in [handlebars](handlebarsjs.com). In the following example we are printing the name property that is exposed by the {@link View#getContext}, like this: 

```html
<p>Hello {{name}}!</p>
```

Related tutorials

 * {@tutorial frontend_view_manipulation}