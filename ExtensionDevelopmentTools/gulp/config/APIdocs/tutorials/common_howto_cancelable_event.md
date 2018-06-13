In the case of *before* events, listeners can cancel the execution of the actual action by throwing an Error or by returning a rejected {@link Deferred} instance. 

This is specially useful when doing validations, being able to call an external service to validate the input, and canceling if the validation fails.

Canceling an option selection from a listener by throwing an Error:

```javascript
pdp_component.on('beforeOptionSelection', function()	{
	if(someCondition)
		throw new Error('Canceling select option.');
});
```

Canceling an option selection from a listener by returning a rejected Promise:

```javascript
pdp_component.on('beforeOptionSelection', function()	{
  if(someCondition)
     return jQuery.Deferred().reject(new Error('Canceling select option.'));
});
```