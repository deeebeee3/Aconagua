// @ts-check

/**
 * amd - requirejs define() function
 * @function
 * @param {String|Array<String>} a
 * @param {Array<String>|Function} b
 * @param {Function=} c
 * @return {any}
 * @global
 */
function define(a, b, c) {}

/**
 * global SuiteCommerce namespace
 * @global
 * @type {object}
 */
var SC={}



/**
 * @class
 * @template T
 */
class Class {

    /**
     * @method
     * @param {T} p
     */
    m(p){}
}
/**
 * Front-end global function to get the correct path of an static asset or service. Example of how to reference a service from a Backbone.Model: 
 * 
 * ```javascript
 *  return Backbone.Model.extend({ 
 *      url: Utils.getAbsoluteUrl(getExtensionAssetsPath('services/MyCoolModule.Service.ss'))
 * });
 * ```
 * @param {String} path a relative path to an asset or service
 * @return {String}
 */
function getExtensionAssetsPath(path){return null}
