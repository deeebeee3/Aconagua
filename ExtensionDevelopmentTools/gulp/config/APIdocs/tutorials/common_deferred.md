A lot of methods returns {@link Deferred} objects instead of returning the requested value. This is the way the API handles [Asynchrony](https://en.wikipedia.org/wiki/Asynchrony_(computer_programming). 

In other documentation you could find the concept *Promise* and is almost the same concept as *Deferred*. 
{@link Deferred} is very similar to standard Promises, with the exception that it don't have a `catch()` method, instead use [fail()]{@link Deferred#fail}

As an example, {@tutorial common_howto_cancelable_event} explains how to be notified before item's option change using [beforeOptionSelection]{@link ProductDetailsComponent#event:beforeOptionSelection} event and eventually cancel that action. Imagine that we want to validate the option selection calling an external service and eventually cancel the action if the validation fails. 

This is an typical example of asynchrony, and that's why the method [setOption]{@link ProductDetailsComponent#setOption}, for programmatically setting an option, returns a {@link Deferred} indicating that the call was successful or not. Since there could be [beforeOptionSelection]{@link ProductDetailsComponent#event:beforeOptionSelection} listeners that can cancel the action asynchronously, the response of this method must also be asynchronous: 

```javascript
container.getComponent('PDP').setOption(optionId, newValue).then(function(success) {
    if(!success) {
        // probably a third party validator has cancelled this event
    }
})
```

In this example, [then()]{@link Deferred#then} method is used, and we pass a single function argument which will be called when the promise is resolved. We call this function the *promise (success) handler*. 

## Handler signature

At this point users might wonder how to know what's the function handler signature. In the previous example, the function receives a single argument which is a boolean. This information is available in the Return section of [setOption]{@link ProductDetailsComponent#setOption} documentation. There it says, `"Returns Deferred.<Boolean>"` which means that the returned deferred object will be resolved with a boolean - in other words, the promise success handler will be called with a single boolean argument. 
