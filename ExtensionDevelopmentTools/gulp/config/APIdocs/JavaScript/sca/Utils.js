/**
 * A collection of miscellaneous utility methods that goes from object manipulation, text formatting, data validation, environment information, internationalization, URL manipulation, etc. You can require the module by the `Utils`, example:
 *
 * ```
 * define('MyCustomModule', ['Utils'], function (Utils)
 * {
 *     var translated = Utils.translate('There are $(0) apples in the tree', 55);
 * });
 * ```
 *
 * Also, all methods in Utils are mixed in underscore, so for example, you is the same to call `Utils.translate()` and `_.translate()`
 */
class Utils {
    
        //FORMATTING
    
        /**
         * Will try to reformat a phone number for a given phone Format. If no format is given, it will try to use the one in site settings.
         * @param {String} phone
         * @param {String} format
         * @return {String}
         */
        formatPhone(phone, format) {
            return null
        }
        /**
         * Converts a date object to string using international format YYYY-MM-dd. Useful for inputs of type="date"
         * @param {Date} date
         * @return {String}
         */
        dateToString(date) {
            return null;
        }
        /**
         * Parse a string date into a date object.
         * @param {String} str_date
         * @param {{format:String,plusMonth:Number}} options `format` is the String format that specify the format of the input string. By Default YYYY-MM-dd. `plusMonth`: Number that indicate how many month offset should be applied whne creating the date object.
         */
        stringToDate(str_date, options) {
            return null
        }
        /**
         * Formats given number and symbol to a currency like string. Example: `Utils.formatCurrency(10, '£')`
         * @param {String} value
         * @param {String} symbol
         * @return {String}
         */
        formatCurrency(value, symbol) {
            return null
        }
        /**
         * Formats with commas as thousand separator (e.g. for displaying quantities)
         *
         * @param {String} number
         * @return {String} the formatted quantity.
         */
        formatQuantity(number) {
            return null
        }
    
    
    
    
        // VALIDATION
    
        /**
         * @param {String} value
         * @return a non empty string with a internationalized warning message
         */
        validateSecurityCode(value) {
            return null
        }
        /**
         * @param {String} phone
         * @return {String} an error message if the passed phone is invalid or falsy if it is valid
         */
        validatePhone(phone) {
            return null
        }
        /**
         * @param {String} value
         * @param {String} valName
         * @param {{country: String}} options
         * @return {String} an error message if the passed state is invalid or falsy if it is valid
         */
        validateState(value, valName, options) {
            return null
        }
        /**
         * @param {String} value
         * @param {String} valName
         * @param {{country: String}} options
         * @return {String} an error message if the passed zip code is invalid or falsy if it is valid function
         */
        validateZipCode(value, valName, options) {
            return null
        }
    
    
        /**
         * Used on all of the hardcoded texts in the templates. Gets the translated value from SC.Translations object literal.
         * Please always use the syntax `_('string').translate(1, 2)` instead of the syntax `_.translate('string', 1, 2)` if possible.
         *
         * Example using the Utils object: `Utils.translate('There are $(0) apples in the tree', appleCount)`
         *
         * Sample example using the `_.translate` (underscore mixing): `_('There are $(0) apples in the tree').translate(appleCount)`
         *
         * See {@tutorial frontend_internationalization}
         * @param {String} text @return {String}
         */
        translate(text) {
            return null
        }
    
    
    
        // OBJECT HELPERS
        /**
         * Deep Copy of the object taking care of Backbone models
         * @param {any} obj
         * @param {any} obj 
         */
        deepCopy(obj) {
            return null
        }
        /**
         * Gets given object property supporting deep property references by separating names with dots ('.')
         * @param {any} object The object to get the property from
         * @param {String} path  a path with values separated by dots
         * @param {any} [default_value] value to return if nothing is found.
         */
        getPathFromObject(object, path, default_value) {
            return null
        }
        /**
         * Sets given object property supporting deep property references by separating names with dots ('.')
         * @param {any} object the object to modify
         * @param {String} path a path with values separated by dots
         * @param {any} value the value to set
         */
        setPathFromObject(object, path, value) {
            return null
        }
    
    
        
        /**
         * Determines if we are in shopping domain (secure or non secure) or single domain
         * @return {Boolean} true if in checkout or in single domain function
         */
        isShoppingDomain() {
            return null
        }
        /**
         * Determines if we are in a secure checkout
         * domain or in a secure single domain environment
         * @return {Boolean} true if in checkout or in single domain
         */
        isCheckoutDomain() {
            return null
        }
        /**
         * Determines if we are in a single domain environment
         * @return {Boolean} true if single domain
         */
        isSingleDomain() {
            return null
        }
        /**
         * Determines if we are in shopping ssp used when there are frontend features only shown in the shopping domain
         * @return {Boolean} true if in shopping domain, false if in checkout or myaccount
         */
        isInShopping() {
            return null
        }
        /**
         * Determines if we are in checkout or my account ssp
         * @return {Boolean} true if in checkout domain
         */
        isInCheckout() {
            return null
        }
    
        /**
         * returns the absolute URL of given relative path
         * @param {String} path 
         * @return {String}
         */
        getAbsoluteUrl (path)
        {
            return null
        }
    }