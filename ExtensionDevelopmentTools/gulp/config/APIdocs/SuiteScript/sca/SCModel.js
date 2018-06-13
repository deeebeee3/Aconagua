/**
 * SCModel subclasses are used to implement restful-like methods for accessing a particular
 * resource, in general a NetSuite record like commerce order, session, or custom record.
 * 
 * Note: When using SCModel for defining models think more on object singletons like in classes.
 * 
 * Note: Also SCModel instances support Aspect Oriented functionality on methods so users can register to before 
 * or after a method of model is called. See {@link SCEventWrapper}
 * @class 
 * @global  
 * @extends SCEventWrapper
 * @hideconstructor
 */

class SCModel extends SCEventWrapper {
    constructor(){
        super()
        /**
         * a [Backbone.Validation](https://github.com/thedersen/backbone.validation) like object to validate given 
         * json data provided in {@link SCModel#validate}
         * @type {object}
         */
        this.validation=null
    }
	/**
     * Validate provided data using {@link SCModel#validation} rules like documented in 
     * [Backbone.Validation](https://github.com/thedersen/backbone.validation)
	 * @param {object} data 
	 * @throws {SCError}
	 */
	validate(data) {

	}
}
