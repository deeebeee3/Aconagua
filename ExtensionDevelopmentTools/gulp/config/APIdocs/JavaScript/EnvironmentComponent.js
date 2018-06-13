/**
 * The EnvironmentComponent allow front-end accessing environment-related information like configuration, site settings, execution context and user session. This information is read-only, meaning that user changes in returned objects won't impact the application. An instance of this component can obtained by calling `container.getComponent("Environment")`.
 * @class
 * @extends BaseComponent
 * @global
 * @hideconstructor
 */
class EnvironmentComponent extends BaseComponent {

	/**
	 * Get the value of given Configuration key. If no key is provided then it returns the whole Configuration object. Use keys separated by dots to access inner objects, for example, `component.get('checkout.skipLogin')`. Notice that this method will always return a copy of the real objects so modifications on them won't have impact on the application.
	 * 
	 * @param {String} [key] configuration key to get the value of. It could be dot-separated to get an inner property. If not passed the whole configuration object will be returned. 
	 * @return {any} Returns the value of the given configuration key.
	 */
	getConfig(key) {
		return null
	}

	/**
	 * Returns true if the code is currently run by the SEO Page Generator and false if it currently run by the user's browser. 
	 * See [Page Generator NetSuite Help Center](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_4053806622.html)
	 * 
	 * @return {boolean} 
	 */
	isPageGenerator() {
		return null
	}

	/**
	 * Returns the [site-settings object](https://system.netsuite.com/app/help/helpcenter.nl?fid=section_N2532617.html)
	 * 
	 * @param {String} [key] site-settings key to get the value of. It could be dot-separated to get an inner property. If not passed the 
	 * whole site-settings object will be returned. 
	 * @return {any} 
	 */
	getSiteSetting(key) {
		return null
	}
	/**
	 * Returns information regarding the current session, like current currency, language and pricelevel. 
	 * @return {Session}
	 */
	getSession() {
		return null
	}

	/**
	 * Adds or update a translation key for given locale. Example: `setTranslation('es_ES', [{key: 'Faster than light', value: 'Más rápido que la luz'}])`. See {@tutorial frontend_internationalization}. 
	 * @param {string} locale 
	 * @param {Array<TranslationEntry>} keys keys and values to add for given locale
	 */
	setTranslation(locale, keys) {
		return null
	}

}

/**
 * @typedef {Object} TranslationEntry
 * @property {string} key
 * @property {string} value
 */

/**
 * @typedef {Object} Session
 * @property {SessionCurrency} currency
 * @property {SessionLanguage} language
 * @property {SessionTouchpoints} touchpoints
 * @property {String} priceLevel
 */

/**
 * @typedef  {Object} SessionCurrency
 * @property {String} internalid
 * @property {String} symbol
 * @property {String} code
 * @property {String} name
 * @property {String} currencyname
 * @property {String} isdefault
 * @property {Number} symbolplacement
 */

/**
 * @typedef  {Object} SessionLanguage
 * @property {String} name
 * @property {String} isdefault
 * @property {String} locale
 * @property {String} languagename
 */

/**
 * @typedef  {Object} SessionTouchpoints
 * @property {String} logout
 * @property {String} customercenter
 * @property {String} serversync
 * @property {String} viewcart
 * @property {String} login
 * @property {String} welcome
 * @property {String} checkout
 * @property {String} continueshopping
 * @property {String} home
 * @property {String} register
 * @property {String} storelocator
 */