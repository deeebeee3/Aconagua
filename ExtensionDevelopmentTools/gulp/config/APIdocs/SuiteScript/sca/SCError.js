/**
 * SuiteCommerce back-end errors are related to REST operations errors when errors occurs in data-model access like permission, suitescript errors, etc. 
 * @class 
 * @global 
 * @hideconstructor
 */
class SCError extends Error {

	constructor() {
        super()
		/**
         * http status code corresponding to this error
		 * @type {number} 
		 */
		this.status = null
		/**
         * a string-code for this error - like ```ERR_BAD_REQUEST```
		 * @type {String}
		 */
		this.code = null
		/**
		 * @type {string}
		 */
		this.message = null
    }
    
    get(){}
    put(){}
    post(){}
    delete(){}
    patch(){}
}
