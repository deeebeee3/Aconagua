/**
 * Base abstract class for front-end components. Use method {@link BaseComponent.extend} to build concrete components.
 * @class
 * @extends CancelableEvents
 * @hideconstructor
 * @global
 */
class BaseComponent extends CancelableEvents {

	constructor() {
		super()

		/**
		 * The name which identify this kind of component. This name is used both for registering a new component and
		 * getting a component implementation with {@link ComponentContainer}
		 * @type {String}
		 */
		this.componentName = ''

		/**
		 * The name which identify this kind of component. This name is used both for registering a new component and
		 * getting a component implementation with {@link ComponentContainer}
		 * @type {ComponentContainer}
		 */
		this.application = new ComponentContainer()
	}

	/**
	 * Extends the current component to generate a child one
	 * @param {{}} componentDefinition Any object with properties/methods that will be used to generate the Component that will be returned
	 * @return {BaseComponent}
	 */
	extend(componentDefinition) {
		return new BaseComponent()
	}

	/**
	 * Allow to attach an event handler into a particular event name. Alias for {@link CancelableEvents#cancelableOn}
     * @param {String} event_name The name of the event to attach to
     * @param {Function} handler
	 * @return {void}
	 */
	on(event_name, handler) {
		return null
	}

	/**
	 * Allow to detach an event handler. Alias for {@link CancelableEvents#cancelableOff}
     * @param {String} event_name The name of the event to detach from. Note that this parameter is mandatory
     * @param {Function} handler 
     * @return {void}
	 */
	off(event_name, handler) {
		return null
	}
}