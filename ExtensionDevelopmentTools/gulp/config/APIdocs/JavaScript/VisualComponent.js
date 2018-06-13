/**
 * Base abstract class supporting components which include a visual aspect. For example, concrete components like {@link ProductDetailsComponent} or {@link ProductListPageeComponent} allow users to manipulate its views and composition, so they inherith from here. 
 * 
 * Among other things allow users to programatically manipulate child views, DOM event handlers, DOM input data bindings, child views context data, etc. 
 * 
 * In general users needs to work against the {@link View} interface, and special HTML attributes like `data-view` for referencing DOM elements that will remain compatible (for example to insert a new child view in a certain place). 
 * 
 * See {@tutorial frontend_defining_new_views} to learn how to implement new Views. 
 * 
 * See {@tutorial frontend_view_manipulation} to learn how to manipulate existing views and add new ones. 
 * 
 * @class
 * @extends BaseComponent
 * @hideconstructor
 * @global
 */
class VisualComponent extends BaseComponent {
	
	constructor() {
		super()
	}

	/**
	 * Change the position of a Child View inside a container
	 * @param {string} view_id The identifier of the view, of the current component, that will have the Child View to change the index
	 * @param {string} placeholder_selector Identifier of the location where the view is located inside the specified View (view_id)
	 * @param {string} view_name Identifier of an specific view into the placeholder
	 * @param {number} index The new index to position the Child View
	 * @return {void} null if everything works as expected. An exception will be thrown otherwise.
	 * @throws {Error}
	 */
	setChildViewIndex() {
		return null
	}
	
	
	/**
	 * Adds one or more child views to existing Views which is already appended in the DOM with the given `data-view` HTML attribute. Notice that this is a very flexible method but also very complex. Users rarely will need such flexibility and in general they shoud use {@link addChildView} which is simpler. Usage example: 
	 * 
	 * ```javascript
	 * checkout.addChildViews(
	 *     checkout.WIZARD_VIEW
	 *     , {
	 *         'Wizard.StepNavigation':
	 *         {
	 *             'CheckoutView':
	 *             {
	 *                 childViewIndex: 1
	 *             ,   childViewConstructor: function ()
	 *                 {
	 *                     return new CheckoutExtensionView({checkout:checkout});
	 *                 }
	 *             }
	 *         }
	 *     }
	 * );
	 * ```
	 * @param {string} view_id The identifier of the view, of the current component, that will be extended with an extra/s child view/s
	 * @param {object} child_views Identifier of the location where the new view will be located inside the specified View (view_id)
	 * @return {void} null if everything works as expected. An exception will be thrown otherwise.
	 * @throws {Error}
	 */
	addChildViews(view_id, child_views) {
		return null
	}

	/**
	 * Adds a child view to an existing View which is already appended in the DOM with the given `data-view` HTML attribute. Example:
	 * 
	 * ```javascript
	 * checkout.addChildView('Wizard.StepNavigation', function () {
	 *     return new CheckoutExtensionView({checkout:checkout});
	 * });
	 * ```
	 * @param {string} view_id The identifier of the view, of the current component, that will be extended with an extra/s child view/s
	 * @param {SimpleChildViewConstructor} childViewConstuctor Identifier of the location where the new view will be located inside the specified View (view_id)
	 * @return {void} null if everything works as expected. An exception will be thrown otherwise.
	 * @throws {Error} 
	 */
	addChildView(view_id, childViewConstuctor) {
		return null
	}

	/**
	 * Removes a child view for a given view id
	 * @param {string} view_id The identifier of the view, of the current component, that will be extended with an extra child view
	 * @param {string} placeholder_selector Identifier of the location where the new view will be located inside the specified View (view_id)
	 * @param {string} [view_name] Identifier of an specific view into the placeholder
	 * @return {void} null if everything works as expected. An exception will be thrown otherwise.
	 * @throws {Error}
	 */
	removeChildView(view_id, placeholder_selector, view_name) {
		return null
	}

	/**
	 * Adds an extra property to the UI context of a view id to extend the interaction with its template
	 * @param {string} view_id The identifier of the view, of the current component, that will have its context extended.
	 * @param {string} property_name Name of the new property to be added
	 * @param {string} type Name of the type of the result of the callback (function that generates the value of the new property)
	 * @param {Function} callback Function in charge of generating the value for the new property.
	 * @return {void} null if everything works as expected. An exception will be thrown otherwise.
	 * @throws {Error}
	 */
	addToViewContextDefinition(view_id, property_name, type, callback) {
		return null
	}

	/**
	 * Removes an extra property to the UI context of a view.
	 * @param {string} view_id The identifier of the view, of the current component, that will have its context extended.
	 * @param {string} property_name Name of the new property to be added
	 * @return {void} null if everything works as expected. An exception will be thrown otherwise.
	 * @throws {Error}
	 */
	removeToViewContextDefinition(view_id, property_name) {
		return null
	}

	/**
	 * Allows to add an extra event handler over a particular view for the given event selector
	 * @param {string} view_id The identifier of the view, of the current component, that will be extended with an extra event handler.
	 * @param {string} event_selector
	 * @param {Function} callback Event handler function called when the specified event occurs
	 * @return {void} null if everything works as expected. An exception will be thrown otherwise.
	 * @throws {Error}
	 */
	addToViewEventsDefinition(view_id, event_selector, callback) {
		return null
	}

	/**
	 * Allows to remove and an extra event handler added previously.
	 * @param {string} view_id The identifier of the view, of the current component.
	 * @param {string} event_selector
	 * @return {void}
	 * @throws {Error}
	 */
	removeToViewEventsDefinition(view_id, event_selector) {
		return null
	}
}

/**
 * @typedef {Function} SimpleChildViewConstructor
 * @param {...any} any
 * @return {View}
 */