/**
 * Manager of components. Extensions can get components implementations and register new component
 * classes. A component is referenced always by its name. Host application provides a container instance to extensions through
 * method {@link ExtensionEntryPoint#mountToApp}
 * @class
 * @hideconstructor
 * @global
 */
class ComponentContainer {
	constructor() {}

	/**
	 * Allows to register a new component into the running application it also seals the component, so
	 * as to not add new properties or messing up with the available components APIs.
	 * @param {BaseComponent} component Component to be registered
	 * @return {void}
	 */
	registerComponent(component) {}

	/**
	 * Returns the requested component based on its name if there is no component with that name registered in this container
	 * @param {String} component_name
	 * @return {BaseComponent}
	 */
	getComponent(component_name) {
		return null
	}
}

/**
 * An extension entry point is an object provided by component implementers like extensions or modules.
 * Implement the {@link ExtensionEntryPoint#mountToApp} that is called by the host application that passes a
 * {@link ComponentContainer} so they can obtain existing component instances to extend the application
 * ({@link ComponentContainer#getComponent}) or register new component types ({@link ComponentContainer#registerComponent}).
 * or register component ({@link BaseComponent}) implementations. See {@link ComponentContainer}
 * @class
 */
class ExtensionEntryPoint {
	/**
	 * When the host application starts, it will call this method for each activated extension, in order of activatio, passign the component container as parameter so extensions can get components to work with (see {@link ComponentContainer#getComponent}) or register new components (see {@link ComponentContainer#registerComponent}).
	 * @param {ComponentContainer} componentContainer componentContainer
	 */
	mountToApp(componentContainer) {}
}
