/**
 * Defines the controller used by all auto-generated services. In SuiteCommerce, services are responsible of implement
 * the REST facade while and delegate data access and logic to models (see {@link SCModel}). 
 * 
 * Implementers should extend this class using {@link ServiceController.extend}
 * and implement methods {@link ServiceController#get}, {@link ServiceController#post}, {@link ServiceController#put}, 
 * {@link ServiceController#delete} and {@link ServiceController#patch} that will handle each REST method. These methods will 
 * end up calling {@link ServiceController#sendContent} or {@link ServiceController#sendError}
 * 
 * See {@tutorial backend_service_controller}
 * 
 * @class 
 * @global  
 * @extends SCEventWrapper
 * @hideconstructor
 */

class ServiceController extends SCEventWrapper {

	constructor() {
		super()

		/**
		 * The request made to this service
		 * @type {nlobjRequest}
		 */
		this.request = null

		/**
		 * the response object to write the data to respond by the call
		 * @type {nlobjResponse}
		 */
		this.response = null

		/**
		 * the REST http method currently requested
		 * @type {String}
		 */
		this.method = null

		/**
		 * the JSON object in the request body
		 * @type {any}
		 */
		this.data = null

		/**
		 * The options which configure this service controller. If implementer use `common` those options will apply to all request while if they use a particular http method, like for example `get`, those options will apply only to `get` requests. Particular options override `common`'s
		 * @type {ServiceControllerGeneralOptions}
		 */
		this.options = null
	}

	/**
	 * Writes the given content in the request object using the right headers, and content type
	 * @param {ServiceControllerOptions} options
	 * @param {String} content
	 * @fires before:ServiceController.sendContent
	 * @fires after:ServiceController.sendContent
	 */
	sendContent(content, options) {
		return null
	}

	/**
	 * Process given error and then writes it in the http response
	 * @param {nlobjError | SCError} e
	 */
	sendError(e) {
		return null
	}

	/**
	 * Users should implement this method for the service to support the http get operation
	 * @return {object} returns the JSON object that will end up being written in the http response
	 */
	get() {
		return null
	}

	/**
	 * Users should implement this method for the service to support the http post operation and use 
	 * {@link ServiceController#sendContent} to write the response. Requested data is available in 
	 * {@link ServiceController#data}
	 * @return {void} 
	 */
	post() {
		return null
	}

	/**
	 * Users should implement this method for the service to support the http put operation
	 * @return {object} returns the JSON object that will end up being written in the http response.
	 * Requested data is available in {@link ServiceController#data}
	 */
	put() {
		return null
	}

	/**
	 * Users should implement this method for the service to support the http delete operation
	 * @return {any} returns the JSON object that will end up being written in the http response - 
	 * for example indicating if everything is OK or there was an error deleting the specified resources
	 * Requested data is available in {@link ServiceController#data}
	 */
	delete() {
		return null
	}

	/**
	 * Users should implement this method for the service to support the http patch operation
	 * @return {any} returns the JSON object that will end up being written in the http response
	 */
	patch() {
		return null
	}
}



/**
 * The type of {@link ServiceController#options} which are options for all kind of requests if you use `common` or refined per particular http method. 
 * @typedef {Object} ServiceControllerGeneralOptions
 * @property {ServiceControllerOptions} common options that apply to all requests
 * @property {ServiceControllerOptions} get options that apply to `get` requests
 * @property {ServiceControllerOptions} put options that apply to `put` requests
 * @property {ServiceControllerOptions} post options that apply to `post` requests
 * @property {ServiceControllerOptions} delete options that apply to `delete` requests
 */





/**
 * Request options. The needed permissions, validations, etc. 
 * @typedef {Object} ServiceControllerOptions
 * @property {any} requirePermissions . Object indicating required permissions of the user invoking the service. Other whise it will respond with 503 error. Example: 
 * ```javascript
 *  requirePermissions: {
		list: ['lists.listCase.1'],
	},
		```
 * @property {Boolean}  requireSecure If http protocol is not secure it will throw an error 
 * @property {Boolean}  validateLoggedInPPS  Verifies if user is not logged in and Pwd protected site is enabled, and if registration is enabled
 * @property {Boolean}  requireLogin If user not logged in it will throw an error
 * @property {Boolean}  checkLoggedInCheckout Pass only if we are not in checkout OR if we are logged in
 * 
 * */
