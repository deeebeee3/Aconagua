/**
 * Supports automatically ```before``` - ```after``` triggering events for user-defined methods to support AOP similar functionality. 
 * 
 * End-user classes like SCModel and ServiceController augments this class so they automatically trigger events for their methods.
 * 
 * These events will be prefixed with ```before:``` or ```after:```, then the provided ```name``` and last the method name. 
 * Also, listeners will receive method parameters and return value (in case of ```after:```). 
 * 
 * For example, we can hook to the time when an LiveOrder is submitted so we can customize its behavior like this:
 * 
 * ```javascript
 * Application.on('before:LiveOrder:save', function()
 * {
 *      ... do something before submitting a live order ...
 * })
 * ```
 *  
 * @class
 * @global
 * @hideconstructor
 */
class SCEventWrapper {

	constructor() {
		/**
		 * The name of this model. Is mandatory that al SCEventWrappers to have a name. 
		 * @type {string}
		 */
		this.name = null
	}

	/**
	 * Create a new class with provided name and methods that will automatically trigger *after* and *before* events when 
	 * methods are called to provide AOP-similar functionality. 
	 * @param {{name:string}} definition The definition for the new model that contain a name and the model methods to wrap. 
	 * The name is mandatory. 
	 * @return {Class<SCEventWrapper>}
	 */
	static extend(definition) {
		return null
	}
}
