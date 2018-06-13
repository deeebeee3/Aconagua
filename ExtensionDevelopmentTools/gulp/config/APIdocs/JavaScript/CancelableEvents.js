/** 
 * Cancelable events adds canceling functionality to the Observer pattern so Listeners can notify the Subject to cancel the actual action. 
 * 
 * Particularly, in SuiteCommerce extension APIs, for each action, two different events are triggered, one *before* the action happen and other *after* the action happen. In the case of *before* events, listeners can cancel the execution of the actual  action by throwing an Error or by returning a rejected {@link Deferred} instance. 
 * 
 * See {@tutorial common_howto_cancelable_event}. 
 * 
 * @class
 * @hideconstructor
 * @global
 */

class CancelableEvents {
	
		/**
			Allow to attach an event handler into a particular event name
			@param {String} event_name The name of the event to attach to
			@param {Function} handler The event handler function that will be invoked when the event __event_name__ is triggered.
			This function can receive optionally one parameter representing the action parameter. Besides optionally can return a Deferred
			to details the execution of the trigger's callback. If the returned Deferred is rejected the trigger's callback wont be called
			@return {void}
			*/
		cancelableOn(event_name, handler) {
			return null
		}
	
		/** 
			Allow to detach an event handler.
			@param {String} event_name The name of the event to detach from. Note that this parameter is mandatory
			@param {Function} handler The event handler function that will be removed from the list of register handlers. Note this parameter is required.
			@return {void}
			*/
		cancelableOff(event_name, handler) {
			return null
		}
	
		/**
			Allow to disable all the handlers of a particular event
			@param {String} event_name The name of the event to disable
			@return {void}
			*/
		cancelableDisable(event_name) {
			return null
		}
	
		/** 
			Allow to enable (restore) all the handlers of a particular event
			@param {String} event_name The name of the event to disable
			@return {Void}
			*/
		cancelableEnable(event_name) {
			return null
		}
	
		/**
			Trigger the indicate event with the passed in parameters. In case that any of the event handler reject the execution (the callback WONT be called)
			@param {String} event_name Event to trigger
			@param {...params} args All other parameter passed to this function will be broadcaster to all event handlers
			@return {Deferred} As the event handler of an event can be asynchronous (that why it use Deferrers) the invocation of the callback is async. This means that this function
			will return Deferred to represent this asynchronous
			*/
		cancelableTrigger(event_name, ...params) {
			return null
		}
	
		/**
			Trigger the indicate event with the passed in parameters WITHOUT sanitize them.
			In case that any of the event handler reject (returns a rejected Deferred) the execution (the callback WONT be called)
			@param {String} event_name Event to trigger
			@param {...params} args All other parameter passed to this function will be broadcaster to all event handlers
			@return {Deferred} As the event handler of an event can be asynchronous (that why it use Deferrers) the invocation of the callback is async. This means that this function
			will return Deferred to represent this asynchronous
			*/
		cancelableTriggerUnsafe(event_name) {
			return null
		}
	}
	