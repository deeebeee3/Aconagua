For accessing application SuiteCommerce Application configuration from front-end code the method [getConfig]{@link EnvironmentComponent#getConfig}. Very easy to use, it accepts the configuration key of the desired configuration property. It will return the given property value, tat it could be a String, array, object, depending on the property.

{@link EnvironmentComponent} can be obtained by calling `container.getComponent("Environment")`.

If you call  [getConfig]{@link EnvironmentComponent#getConfig} without passing any parameter it will return the entire configuration object (useful when you are developing to inspect the whole object to find a concrete property). 

You can use dot-separated property names for accessing configuration. For example, `component.get('checkout')` will return an object that, among others, contains the boolean property `skipLogin`. `component.get('checkout.skipLogin')` will return the boolean `skipLogin` property. In other words, the following three expressions are equivalent: 

```javascript
component.getConfig('checkout.skipLogin')
component.getConfig('checkout').skipLogin
component.getConfig().checkout.skipLogin

```

IMPORTANT: [getConfig]{@link EnvironmentComponent#getConfig} will always *return a copy* of the actual configuration object so it's impossible to change the actual configuration by modifying the returned object. The only way of changing the configuration is by using SuiteCommerce Configuration UI in NetSuite's Backend (Setup -> SuiteCommerce Advanced -> Configuration)