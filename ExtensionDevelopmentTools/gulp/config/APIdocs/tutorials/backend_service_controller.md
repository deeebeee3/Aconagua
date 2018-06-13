Although extension developers can use the plain old `.ss` or `.ssp` files as documented in [SSP Application Overview](https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_N2490486.html) for implementing custom services in NetSuite, SuiteCommerce supports a high abstraction JavaScript layer to declare and implement [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) services: {@link ServiceController}

Imagine a situation where developer needs to implement a service that only accepts `GET` only in secure domain. Requests that don't comply with this requirement should be answered with a corresponding error page. For example, in the following code, we are implementing a `MyCases` service that will only respond if current user has the list permission for `lists.listCase.1` and only `GET` requests :  

```javascript
define('MyCases.ServiceController', ['ServiceController'], function(ServiceController) {
  return ServiceController.extend({
    name: 'MyCases.ServiceController',
    options: {
      common: {
        requireLogin: true,
        requirePermissions: {
          list: ['lists.listCase.1'],
        },
      },
    },
    get: function() {
      return [{ name: 'Sebastian' }];
    },
  });
});

```

Considerations: 

 * use [extend()]{@link SCEventWrapper.extend} method to define new services
 * ServiceController's must have [name]{@link ServiceController#name}
 * declare the behavior of your service using {@link ServiceController#options}. In the example, we declare in `options.common` that this service requires the user to be logged in and also to have permissions for `list.listCase.1`. Otherwise the service will repond with error 503 or similar
 * we only implemented method (get)[@link ServiceController#get] so service will only respond to get http request and return 500 in the case of other http methods requested. 

### How to declare your services

TODO: how / if a service controller needs to be declared in ns.package.json
TODO: where is available after deploy

### Related links

 * Developers.SuiteCommerce - Services and Backend models - https://developers.suitecommerce.com/section4484203090
 * https://system.netsuite.com/app/help/helpcenter.nl?fid=chapter_N2490486.html

