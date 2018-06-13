## In JavaScript output

See {@link Utils#translate}

```javascript
Utils.translate('There are $(0) eggs in the basket', eggs.length)
```

## In templates

```handlebars
{{translate 'there are $(0) eggs in the basket' eggs.length}}
```

## In backend

SuiteCommerce currently don't support internationalization of strings in backend code since in general text in the backend is provided and internationalized by NetSuite Core APIs like Commerce API or SuiteScript.

## Adding new string literals

Can be done through SC Configuration (TODO: property path)

Also translation keys can be added or modified by using {@link EnvironmentComponent#setTranslation} :

```javascript
environmentComponent.setTranslation('es_ES', [
    {key: 'Faster than light', value: 'Más rápido que la luz'}
])
```

After this, using `translate` function or Handlebars helper will return the correct translation if the website is setted up in Spanish-Spain: `{{translate 'Faster than light'}}`

> *IMPORTANT*: String literals are case sensitive! 