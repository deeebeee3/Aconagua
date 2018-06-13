/**
 * Subset of SuiteCommerce View exposed for Extensions developers for declaring new views, adding child-views, etc.
 *
 * Internally is implemented with ```Backbone.View``` which is enhanced with handlebars templates, render plugins, context,
 * SEO, composition, navigation, etc.
 *
 * See {@tutorial frontend_defining_new_views}
 *
 * @class
 */
class View {
	
		constructor() {
			/**
			 * The template for this view, in general a function that accepts this view context object and returns an HTML string.
			 * If it is a string an AMD module with that name is tried to be loaded.
			 * If it is undefined the view will be rendered without errors as an empty string
			 * @type {Function|String}
			 */
			this.template = null
	
			/**
			 * @type {{string:string}|{string:Function}}
			 */
			this.events = null
	
			/**
			 * @type {{string:string}}
			 */
			this.bindings = null
	
			// /**
			//  * The container element of this view. The first-level element of this view template is this.$el
			//  * @type {jQuery}
			//  */
			// this.$el = null
		}
	
		/**
		 * this is executed when a new view is instantiated - equivalent to the instance contructor.
		 * @param {...any} options
		 * @return {void}
		 */
		initialize(options) {
			return null
		}
	
		/**
		 * @return {void}
		 */
		render() {
			return null
		}
	
		/**
		 * Returns the object which will be consumed by this view's template
		 * @return {Object}
		 */
		getContext() {
			return null
		}
	
		/**
		 * @return {void}
		 */
		destroy() {
			return null
		}
	
		/**
		 * @param {View} view_definition an object with some of this class members.
		 * @return {typeof View}
		 */
		extend(view_definition) {
			return null;
		}
	}
	
	/**
	 * Represents a jQuery object
	 * @typedef {{}} jQuery
	 * @see {@link http://api.jquery.com/jQuery/}
	 */
	