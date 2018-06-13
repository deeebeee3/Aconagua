/**
 * Base class to implement new Checkout Wizard Modules. See {@link CheckoutComponent#addModuleToStep}. Users need to extend this class to implement their custom checkout wizard modules
 *
 * @class
 * @extends View
 * 
 */
class WizardModule extends View {
	
	constructor() {
		super()
		/**
		 * @type {Array<String>}
		 */
		this.errors = null
		/**
		 * current module error if any
		 * @type {WizardModuleError}
		 */
		this.error = null
	}
	/**
	 * General method to disable the module interface called at the moment of submitting the step
	 */
	disableInterface() {
		return null
	}
	/**
	 * General method to re-enable the module interface called after getting an ERROR on submitting
	 */
	enableInterface() {
		return null
	}
	/**
	 * Auxiliary method to refresh a module. For example, iIt is implemented by the OrderWizard to refresh titles
	 */
	refresh() {
		return null
	}

	/**
	 * by default, a module returns it's validation promise. 
	 * @returns {Deferred} resolved if this module was successfully submitted or rejected otherwise
	 */
	submit() {
		return null
	}
	/**
	 * @returns {Deferred}
	 */
	cancel() {
		return null
	}

	/**
	 * validate resolves a promise because maybe it needs to do some ajax for validation
	 * @returns {Deferred}
	 */
	isValid() {
		return null
	}

	/**
	 * Determines is a module is active (can be submitted, rendered or just use) or not. 
	 * @returns {Boolean}
	 */
	isActive() {
		return null
	}

	/**
	 * returns the title of the module, can be overridden in the configuration file. 
	 * @returns {String}
	 */
	getTitle() {
		return null
	}

	/**
	 * 
	 * @param {WizardModuleError} error 
	 * @return {undefined}
	 */
	manageError (error){
		return null
	}

	/**
	 * Shows the current error if any, see {@link error}
	 * @return {undefined}
	 */
	showError(){
		return null
	}

	/**
	 * clear all error messages being shown
	 * @return {undefined}
	 */
	clearError(){
		return null
	}

	/**
	 * clear all general messages being shown
	 * @return {undefined}
	 */
	clearGeneralMessages(){
		return null
	}

	/**
	 * Notify a message (not just an error) at step level. Type can be a boolean (true: for errors, false: for success) or string to add a class alert-<type>
	 * @param {string} message 
	 * @param {string} type 
	 * @return {undefined}
	 */
	showGeneralMessage(message, type){
		return null
	}

}
	
/**
 * @typedef {Object} WizardModuleError
 * @property {String} errorMessage
 * @property {String} errorCode
 */
