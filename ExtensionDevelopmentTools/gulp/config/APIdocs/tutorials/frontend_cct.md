The aim of this document is help users getting started with CCTs front-end development. 

# Register a new CCT

In order to register a new CCT in the front end, one needs to extend {@link CustomContentTypeBaseView} which implements the CCT life cycle like installation, configuration, activation, etc. For this, method {@link CMSComponent#registerCustomContentType} needs to be called passing that class and an id for the new CCT, like shown in the following snippet in which `Instagram.View` would be the class implementing {@link registerCustomContentType}: 

```javascript
define('Instagram', ['Instagram.View'], function (InstagramView) {
  return {
    mountToApp: function (container) {
      container.getComponent('CMS').registerCustomContentType({
        id: 'cct_instagram',
        view: InstagramView
      })
    }
  }
})
```

# Implementing CCT View

The CCT life cycle is controlled by a {@link CustomContentTypeBaseView} subclass. This {@link View} not only implements the main CCT UI but also control the CCT live cycle moments like creation, configuration, destruction, etc. 

TODO:  install/update/settings, etc