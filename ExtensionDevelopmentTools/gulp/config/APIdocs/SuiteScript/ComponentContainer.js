// @ts-check

/**
 * Manager of components. Extensions can get components implementations and register new component 
 * classes. A component is referenced always by its name. 
 * @class
 * @hideconstructor
 * @global
 */
class BackendComponentContainer {
	constructor() {}

	/**
	 * Allows to register a new component into the running application it also seals the component, so 
	 * as to not add new properties or messing up with the available components APIs.
	 * @param {BackendBaseComponent} component Component to be registered
	 * @return {void}
	 */
	registerComponent(component) {}

	/**
	 * Returns the requested component based on its name if there is no component with that name registered in this container
	 * @param {String} component_name
	 * @return {BackendBaseComponent}
	 */
	getComponent(component_name) {
		return null
	}
}
