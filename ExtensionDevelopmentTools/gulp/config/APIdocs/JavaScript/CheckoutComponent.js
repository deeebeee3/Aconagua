/**
 * The CheckoutComponent allow the user to manage the checkout's wizard experience programatically, for example getting the current step, go forward or backwards in the step-chain, get/set the step/step-group information, add/remove modules to existing steps, or even add/remove steps or step-groups. An instance of this component can obtained by calling `container.getComponent("Checkout")`.
 * @class
 * @extends VisualComponent
 * @global
 * @hideconstructor
 */
class CheckoutComponent extends VisualComponent {
	/**
	 * Returns the current checkout's step info
	 * @return {Deferred<CheckoutStep>} Return a Deferred that is resolved with a {@link CheckoutStep} in case the operation is successful or rejected with an error message otherwise.
	 */
    getCurrentStep() {
        return null
    }
    /**
	 * Sets the current checkout step to the given one
     * @param {CheckoutStep}
	 * @return {Deferred<CheckoutStep>} Return a Deferred that is resolved if the operation was successful or rejected with an error message otherwise.
	 */
    setCurrentStep(step) {
        return null
    }

    /**
     * Returns the step groups of the checkout flow
     * @return {Deferred<Array<CheckoutStepGroup>>} Return a Deferred that is resolved with an array of {@link CheckoutStepGroup} in case the operation was done successfully or rejected with an error message.
     */
    getStepGroupsInfo() {
        return null
    }

    /**
     *  Returns the steps of the checkout flow
     * @return {Deferred<Array<CheckoutStep>>} Return a Deferred that is resolved with an array of {@link CheckoutStep} in case the operation was done successfully or rejected with an error message.
     */
    getStepsInfo() {
        return null
    }

    /**
     * Return the name of the configured checkout flow
     * @return {String}
     */
    getCheckoutFlow() {
        return null
    }

    /**
     * Adds a new module to a step. Example: 
     * 
     * ```javascript
     * checkout.addModuleToStep( {
     *     step_url: 'shipping/new_step'
     * ,	module: {
     *         id: 'new_module'
     *     ,	index: 0
     *     ,	classname: 'OrderWizard.Module.Shipmethod'
     *     ,	options: { container: '#wizard-step-content-right'}
     *     }
     * })
     * ```
     * Notice that you will need to extend class {@link WizardModule} to implement new modules 
     * 
     * @param {AddModuleData} data 
     * @return {Deferred} Return a Deferred that is resolved in case the operation was done successfully or rejected with an error message.
     */
    addModuleToStep(data) {
        return null
    }

    /**
     * Removes a module from a step
     * @param {RemoveModuleData} data
     * @return {Deferred} Return a Deferred that is resolved in case the operation was done successfully or rejected with an error message.
     */
    removeModuleFromStep(data) {
        return null
    }

    /**
     * Adds a new steps group
     * @param {AddStepGroupData} data
     * @return {Deferred<CheckoutStepGroup>} Return a Deferred that is resolved with {@link CheckoutStepGroup} in case the operation was done successfully or rejected with an error message otherwise.
     */
    addStepsGroup(data) {
        return null
    }

    /**
     * Removes a steps group
     * @param {RemoveStepGroupData} data
     * @return {Deferred} Return a Deferred that is resolved in case the operation was done successfully or rejected with an error message.
     */
    removeStepsGroup(data) {
        return null
    }

    /**
     * Adds a new step to a step_group
     * @param {AddStepData} data
     * @return {Deferred<CheckoutStep>} Return a Deferred that is resolved with {@link CheckoutStep} in case the operation was done successfully or rejected with an error message.
     */
    addStep(data) {
        return null
    }

    /**
     * Removes a step from a step_group
     * @param {String} step_url
     * @return {Deferred} Return a Deferred that is resolved in case the operation was done successfully or rejected with an error message.
     */
    removeStep(step_url) {
        return null
    }
}

/**
 * TODO
 * @event CheckoutComponent#beforeAddModuleToStep
 */
/**
 * TODO
 * @event CheckoutComponent#afterAddModuleToStep
 */
/**
 * TODO
 * @event CheckoutComponent#beforeSetCurrentStep
 */
/**
 * TODO
 * @event CheckoutComponent#afterSetCurrentStep
 */
/**
 * TODO
 * @event CheckoutComponent#beforeAddStep
 */
/**
 * TODO
 * @event CheckoutComponent#afterAddStep
 */

/**
 * TODO
 * @event CheckoutComponent#beforeAddStepsGroup
 */

/**
 * TODO
 * @event CheckoutComponent#afterAddStepsGroup
 */


/**
 * @typedef {Object} RemoveStepGroupData
 * @property {String} group_name
 */

/**
 * @typedef {Object} AddStepData
 * @property {String} name
 * @property {String} url
 * @property {Function} isActive
 * @property {String} group_name
 * @property {Number} index
 */

/**
 * @typedef {Object} AddStepGroupData
 * @property {String} name
 * @property {String} url
 * @property {Number} index
 */

/**
 * @typedef {Object} AddModuleData
 * @property {String} step_url
 * @property {ModuleData} module
 */

/**
 * @typedef {Object} ModuleData
 * @property {String} id
 * @property {Number} index
 * @property {String} classname the JavaScript class name of the new module to add
 * @property {ModuleOptions} options
 */

/**
 * @typedef {Object} ModuleOptions
 * @property {String} container where to add the new module, for example, '#wizard-step-content-right'
 */

/**
 * @typedef {Object} RemoveModuleData
 * @property {String} step_url
 * @property {String} module_id
 */

/**
 * @typedef {Object} CheckoutStepGroup
 * @property {Number} index
 * @property {String} name
 * @property {String} url
 * @property {Boolean} show_group
 * @property {String} state
 * @property {Array<CheckoutStep>} steps
 */

/**
 * @typedef {Object} CheckoutStep 
 * @property {String} url It is the step identifier
 * @property {String} name
 * @property {Boolean} show_step
 * @property {String} state
 * @property {String} step_group_name
 * @property {Array<CheckoutStepModule>} modules
 */

/**
 * @typedef {Object} CheckoutStepModule
 * @property {String} id
 * @property {Boolean} is_active
 * @property {Boolean} is_ready
 * @property {Number} index
 */

