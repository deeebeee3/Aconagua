For those components that represent concepts on which interesting actions happen, events are exposed in the API so users can be notified and react to such actions. 

For example, {@link ProductDetailsComponent} will allow users to be notified when the item's option selection change. This change can be triggered by the shopper clicking the UI or by another JavaScript code that select an option programmatically using {@link ProductDetailsComponent#setOption}

## How to subscribe

Following with the example of item's options, {@link ProductDetailsComponent} expose an event so users can subscribe *after* an option is selected: {@link ProductDetailsComponent#event:afterOptionSelection}. The following is an example of how to use the API to subscribe to this event: 

```javascript
container.getComponent('PDP').on('afterOptionSelection', function(event) {
    console.log('option ' + event.optionCartId + ' was selected with value ' + event.value)
})
```

As the example shows, we use the method {@link BaseComponent#on} to subscribe to an event. The first argument is the event name and the second argument is a function which will be invoked when the event happens. We call this function the *event handler*. 

## Event handler signature

One question users might have at this point is, how to know the signature of the event handler ? In other words, how to know that the event handler is invoked with a single `event` argument and that the argument is an object that has the properties `optionCartId` and `value` and which is the type of these properties ? 

The answer is in the documentation of the event, in this case {@link ProductDetailsComponent#event:afterOptionSelection}. There, after the event description, there are listed those two properties, their names and types. Also, in general, an event handler always receives a single argument. 

Also, if a component's method invocation is able to eventually trigger events, this is also documented in the event's documentation. For example, in {@link ProductDetailsComponent#setOption}, after the method signature, the two events that can be triggered are documented in the "Fires" section. 

## *Before* and *after* moments

In general, if a component expose an event, it will expose two moments, before the action actually happen and after the action was done. For example, in the example of the item's option selection, the {@link ProductDetailsComponent} exposes two events: {@link ProductDetailsComponent#event:beforeOptionSelection} and {@link ProductDetailsComponent#event:afterOptionSelection}. 

In the case of *before* events, user's have the possibility of canceling the related action. More on this is detailed in {@tutorial common_howto_cancelable_event}. 