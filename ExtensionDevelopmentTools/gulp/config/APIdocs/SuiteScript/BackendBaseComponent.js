// @ts-check

/**
 * Base abstract class for backend-end components based on SuiteScript. Use method {@link BackendBaseComponent.extend} to build concrete component implementations. 
 * Note for implementers: For each method defined in a component, an equivalent synchronous operation method will be created automatically. 
 * For example if your implementation has a method foo() that returns a {@link Deferred}, and your component extends {@link BackendBaseComponent}
 * the extra method fooSync() will be created automatically that will return the value on which the Deferred was resolved, instead of the actual Deferred. 
 * @class
 * @extends BackendCancelableEvents
 * @hideconstructor
 * @global
 */
class BackendBaseComponent extends BackendCancelableEvents {

	constructor() {
		super()

		/**
		 * The name which identify this kind of component. This name is used both for registering a new component and 
		 * getting a component implementation with {@link ComponentContainer} 
		 * @type {string} 
		 */
		this.componentName = ''
	}

	/**
	 * Extends the current component to generate a child one
	 * @param {{}} componentDefinition Any object with properties/methods that will be used to generate the Component that will be returned
	 * @return {BackendBaseComponent}
	 * @static
	 */
	extend(componentDefinition) {
		return null
	}

	/** 
	 * Allow to attach an event handler into a particular event name. Alias for {@link BackendCancelableEvents#cancelableOn} 
     * @param {string} event_name The name of the event to attach to
     * @param {Function} handler The event handler function that will be invoked when the event *event_name* is triggered.
     * This function can receive optionally one parameter representing the action parameter. Besides optionally can return a Deferred
     * to details the execution of the trigger's callback. If the returned Deferred is rejected the trigger's callback wont be called
	 * @return {void}
	 */
	on(event_name, handler) {}

	/**
	 * Allow to detach an event handler. Alias for {@link BackendCancelableEvents#cancelableOff}    	
     * @param {string} event_name The name of the event to detach from. Note that this parameter is mandatory
     * @param {Function} handler The event handler function that will be removed from the list of register handlers. Note this parameter is required.
     * @return {void}
	 */
	off(event_name, handler) {}
}	

