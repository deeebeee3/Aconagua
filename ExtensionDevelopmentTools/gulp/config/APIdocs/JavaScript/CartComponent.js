/**
 * Provides methods for manipulating cart's lines, summary, estimates, promotions, submit. It also expose cancelable events that will be triggered before and after lines, estimates, promotions, etc change. An instance of this component can obtained by calling `container.getComponent("cart")`.
 * @class
 * @extends VisualComponent
 * @global
 * @hideconstructor
 */
class CartComponent extends VisualComponent {
	
		constructor() {
			super()
			/**
			 * Name of the cart main view. Please use this name to reference views in methods like {@link addChildView}, {@link addToViewContextDefinition}, etc
			 * @type {String}
			 */
			this.CART_VIEW = ''
	
			/**
			 * Name of the mini-cart main. Please use this name to reference views in methods like {@link addChildView}, {@link addToViewContextDefinition}, etc
			 * @type {String}
			 */
			this.CART_MINI_VIEW = ''
	
			/**
			 * @type {String}
			 */
			this.WIZARD_VIEW = ''
		}
	
		/**
		 * Adds a new line into the cart. Returns a Deferred that is resolved into the added line id {@link String}, in the case the operation was done successfully, or rejected with an error message. Example: 
		 * 
		 * ```javascript
		 * 	container.getComponent('Cart').addLine({
		 * 		line: {
		 * 			quantity: 1, 
		 * 			item: {
		 * 				internalid: 8058
		 * 			}
		 * 		}
		 * 	}).then(()=>{alert(Utils.translate('Item added'))})
		 * ```
		 * @param {AddLine} data
		 * @return {Deferred}
		 */
		addLine(data) {
			return null
		}
	
		/**
		 * Adds new lines into the cart. Returns a Deferred that is resolved with the an array of line ids (Array of strings) into the added line id in the case the operation or rejected with an error message. See {@link CartComponent#addLine}
		 * @param {AddLines} lines
		 * @return {Deferred}
		 */
		addLines(lines) {
			return null
		}
	
		/**
		 * returns the lines of the cart as a  Deferred that is resolved in the case the operation was done successfully or the promise is rejected with an error message. The promise resolves with an array of {@link Line}
		 * @return {Deferred<Array<Line>>}
		 */
		getLines() {
			return null
		}
	
		/**
		 * Removes a line from the cart. Returns a Deferred that is resolved in the case the operation was done successfully or rejected with an error message.
		 * @param {String} internalid id of the line to remove
		 * @return {Deferred}
		 */
		removeLine(internalid) {
			return null
		}
	
		/**
		 * Updates a cart's line. Returns a Deferred that is resolved with {@link Line} in the case the operation was done successfully, or rejected with an error message.
		 * @param {Line} line
		 * @return {Deferred}
		 */
		updateLine(line) {
			return null
		}
	
		/**
		 * Returns the summary of the cart as a Deferred that is resolved with a {@link Summary} in the case the operation was done successfully or rejected with an error message.
		 * @return {Deferred}
		 */
		getSummary() {
			return null
		}
	
		/**
		 * Submits the order. Returns a Deferred that is resolved with a {@link ConfirmationSubmit} object in the case the operation was done successfully, or rejected with an error message.
		 * @return {Deferred}
		 */
		submit() {
			return null
		}
	
		/**
		 * Adds a payment method
		 * //TODO: returns? - Deferred resolved with ?
		 * //TODO: data parameter ? what's the structure?
		 */
		addPayment(data) {
			return null
		}
	
		/**
		 * Returns the payment methods added to the order
		 * @return {Deferred} Return a jQuery Deferred that is resolved with an array of {@link PaymentMethod} in the case the operation was done successfully or the promise is rejected with an error message.
		 */
		getPaymentMethods() {
			return null
		}
	
		/**
		 * Adds a promotion
		 * @param {{promocode: String}} data the promocode to add
		 */
		addPromotion(data) {
			return null
		}
	
		/**
		 * Removes a promotion
		 * @param {{promocode_internalid: string}} data
		 * @return {Deferred}
		 * TODO: check param and deferred resolve with
		 */
		removePromotion(data) {
			return null
		}
	
	
		/**
		 * Returns the promotions' codes added to the cart
		 * @return {Deferred} Returns a Deferred that is resolved with an array of {@link Promotion} in the case the operation was done successfully or rejected with an error message.
		 */
		getPromotions() {
			return null
		}
	
		/**
		Returns the estimated shipping costs
		@param {{zip: string, country: string}} locationData
		TODO: returns ?
		*/
		estimateShipping(locationData) {
			return null
		}
	
		/**
		 * Removes the shipping method
		 * 	// TODO: returns ?
		 * TODO @params?
		 */
		removeShipping() {
			return null
		}
	
		/**
		 * Clears the shopping estimations in the cart
		 * TODO: returns ?
		 * TODO: params?
		 */
		clearEstimateShipping() {
			return null
		}
	
		/**
		 * Returns the addresses of the order
		 * @return {Deferred} Return a jQuery Deferred that is resolved with an array of {@link Address} in the case the operation was done successfully or the promise is rejected with an error message.
		 */
		getAddresses() {
			return null
		}
	
		/**
		 * Returns the shipping address of the order
		 * @return {Deferred} Return a jQuery Deferred that is resolved with an {@link Address} in the case the operation was done successfully or the promise is rejected with an error message.
		 */
		getShipAddress() {
			return null
		}
		/**
		 * Returns the billing address of the order
		 * @return {Deferred} Return a jQuery Deferred that is resolved with an {@link Address} in the case the operation was done successfully or the promise is rejected with an error message.
		 */
		getBillAddress() {
			return null
		}
		/**
		 * Returns the ship methods of the order
		 * @return {Deferred} Return a jQuery Deferred that is resolved with an array of {@link ShipMethod} in the case the operation was done successfully or the promise is rejected with an error message.
		 */
		getShipMethods() {
			return null
		}
		/**
		 * Returns the selected shipping method of the order
		 * @return {Deferred} Return a jQuery Deferred that is resolved with an array of {@link ShipMethod} in the case the operation was done successfully or the promise is rejected with an error message.
		 */
		getShipMethod() {
			return null
		}
	
	
	
		/**
		 * Voids a line. Implemented only for SCIS
		 * //TODO: params ?
		 * // TODO return ?
		 */
		voidLine() {
			return null
		}
	
		/**
		 * Un-voids a line. Implemented only for SCIS
		 *
		 * //TODO: params ?
		 * // TODO return ?
		 */
		unvoidLine() {
			return null
		}
	
		/**
		 * Updates a customer data. Implemented only for SCIS
		 * //TODO: params ?
		 * // TODO return ?
		 */
		updateCustomer() {
			return null
		}
	
	}
	
	
	//Events:
	
	
	/**
	 * Cancelable event triggered before a cart's line is updated. See {@link CancelableEvents}
	 * TODO: type
	 * @event CartComponent#beforeUpdateLine
	 * @type {object}
	 * @property {boolean} TODO TODO
	 */
	
	/**
	 * Triggered after a cart's line is updated See
	 * TODO: type
	 * @event CartComponent#afterUpdateLine
	 * @type {object}
	 * @property {boolean} TODO TODO
	 */
	
	/**
	 * Cancelable event triggered before a cart's line is removed. See {@link CancelableEvents}
	 * TODO: type
	 * @event CartComponent#beforeRemoveLine
	 * @type {object}
	 * @property {boolean} TODO TODO
	 */
	
	
	/**
	 * Triggered after a cart's line is removed
	 * TODO: type
	 * @event CartComponent#afterRemoveLine
	 * @type {object}
	 * @property {boolean} TODO TODO
	 */
	
	/**
	 * Cancelable event triggered before doing an estimate shipping in the cart. See {@link CancelableEvents}
	 * TODO: type
	 * @event CartComponent#beforeEstimateShipping
	 * @type {object}
	 * @property {boolean} TODO TODO
	 */
	
	/**
	 * Triggered after an estimate shipping is done in the cart
	 * TODO: type
	 * @event CartComponent#afterEstimateShipping
	 * @type {object}
	 * @property {boolean} TODO TODO
	 */
	
	/**
	 * Cancelable event triggered before clearing an estimate shipping in the cart. See {@link CancelableEvents}
	 * TODO: type
	 * @event CartComponent#beforeClearEstimateShipping
	 * @type {object}
	 * @property {boolean} TODO TODO
	 */
	
	/**
	 * Triggered after an estimate shipping is cleared in the cart
	 * TODO: type
	 * @event CartComponent#afterClearEstimateShipping
	 * @type {object}
	 * @property {boolean} TODO TODO
	 */
	
	/**
	 * Triggered before a promotion is added to the cart. See {@link CancelableEvents}
	 * TODO: type
	 * @event CartComponent#beforeAddPromotion
	 * @type {object}
	 * @property {boolean} TODO TODO
	 */
	
	/**
	 * Triggered before a promotion is added to the cart
	 * TODO: type
	 * @event CartComponent#afterAddPromotion
	 * @type {object}
	 * @property {boolean} TODO TODO
	 */
	
	/**
	 * Triggered before a promocode is removed from the cart. See {@link CancelableEvents}
	 * TODO: type
	 * @event CartComponent#beforeRemovePromotion
	 * @type {object}
	 * @property {boolean} TODO TODO
	 */
	
	/**
	 * Triggered after a promocode is removed from the cart
	 * TODO: type
	 * @event CartComponent#afterRemovePromotion
	 * @type {object}
	 * @property {boolean} TODO TODO
	 */
	
	/**
	 * Triggered before a payment method is added to the order. See {@link CancelableEvents}
	 * TODO: type
	 * @event CartComponent#beforeAddPayment
	 * @type {object}
	 * @property {boolean} TODO TODO
	 */
	
	/**
	 * Triggered after a payment method is added to the order
	 * TODO: type
	 * @event CartComponent#afterAddPayment
	 * @type {object}
	 * @property {boolean} TODO TODO
	 */
	
	/**
	 *  Triggered before the order is submitted. See {@link CancelableEvents}
	 * TODO: type
	 * @event CartComponent#beforeSubmit
	 * @type {object}
	 * @property {boolean} TODO TODO
	 */
	
	/**
	 * Triggered after the order is submitted
	 * TODO: type
	 * @event CartComponent#afterSubmit
	 * @type {object}
	 * @property {boolean} TODO TODO
	 */
	
	/**
	 * Cancelable event triggered before adding a new cart's line. See {@link CancelableEvents}
	 * TODO: type
	 * @event CartComponent#beforeAddLine
	 * @type {object}
	 * @property {boolean} TODO TODO
	 */
	
	/**
	 * Triggered after a new line is added in the cart
	 * TODO: type
	 * @event CartComponent#afterAddLine
	 * @type {object}
	 * @property {boolean} TODO TODO
	 */
	
	
	// Data types:
	
	/**
	 * This is the representation of Promotion objects for methods liks {@link addPromotion}, {@link getPromotions} etc
	 * @typedef {Object} Promotion
	 * @property {String} [internalid]
	 * @property {String} type
	 * @property {String} name
	 * @property {String} rate
	 * @property {String} code
	 * @property {String} errormsg
	 * @property {Boolean} isvalid
	 */
	
	/**
	 * Data type for adding new lines to the cart
	 * @typedef {Object} AddLine
	 * @property {Line} line
	 */
	
	/**
	 * Data type for adding new lines to the cart
	 * @typedef {Object} AddLines
	 * @property {Array<Line>} lines
	 */
	
	/**
	 * This is the representation of the cart's line objects with you call {@link addLine}, {@link getLine}, etc
	 * @typedef {Object} Line
	 * @property {String} [internalid]
	 * @property {Number} [quantity]
	 * @property {Number} [amount]
	 * @property {Number} [rate]
	 * @property {Number} [tax_amount]
	 * @property {String} [tax_code]
	 * @property {String} [itemtype]
	 * @property {*} [item]
	 *
	 * @property {Number} item.internalid
	 * @property {String} [item.itemid]
	 * @property {String} [item.displayname]
	 * @property {Boolean} [item.isinactive]
	 * @property {String} [item.itemtype]
	 * @property {Number} [item.minimumquantity]
	 *
	 * @property {Array<LineOption>} [options]
	 * 
	 * @property {*} [extras]
	 * 
	 * @property {String} [extras.shipaddress] SCA specific
	 * @property {String} [extras.shipmethod] SCA specific
	 * @property {Number} [extras.tax_rate] SCA specific
	 * @property {String} [extras.rate_formatted] SCA specific
	 * @property {Number} [extras.discount] SCA specific
	 * @property {number} [extras.total] SCA specific
	 * @property {String} [extras.amount_formatted] SCA specific
	 * @property {String} [extras.tax_amount_formatted] SCA specific
	 * @property {String} [extras.discount_formatted] SCA specific
	 * @property {String} [extras.total_formatted] SCA specific
	 * @property {String} [extras.description] SCIS specific
	 * @property {String} [extras.giftcertfrom] SCIS specific
	 * @property {String} [extras.giftcertmessage] SCIS specific
	 * @property {Number} [extras.giftcertnumber] SCIS specific
	 * @property {String} [extras.giftcertrecipientemail] SCIS specific
	 * @property {String} [extras.giftcertrecipientname] SCIS specific
	 * @property {String} [extras.taxrate1] SCIS specific
	 * @property {String} [extras.taxrate2] SCIS specific
	 * @property {String} [extras.grossamt] SCIS specific
	 * @property {String} [extras.tax1amt] SCIS specific
	 * @property {String} [extras.custreferralcode] SCIS specific
	 * @property {Boolean} [extras.excludefromraterequest] SCIS specific
	 * @property {String} [extras.custcol_ns_pos_voidqty] SCIS specific
	 * @property {Number} [extras.voidPercentage] SCIS specific
	 * @property {Number} [extras.returnedQuantity] SCIS specific
	 * @property {Boolean} [extras.isUnvalidatedReturn] SCIS specific
	 * @property {Boolean} [extras.order] SCIS specific
	 * @property {String} [extras.note] SCIS specific
	
	 */
	
	
	/**
	 * This is the representation of the line's option in the  {@link Line} type
	 * @typedef {Object} LineOption
	 * @property {String} cartOptionId
	 * @property {{internalid:String}} value an object with a String property *internalid*
	 */
	
	
	
	
	
	
	
	
	
	/**
	 * This is the representation of the cart's summary returned by  {@link getSummary},  etc
	 * @typedef {Object} Summary
	 * @property {Number} [total]
	 * @property {Number} [taxtotal]
	 * @property {Number} [tax2total]
	 * @property {Number} [discounttotal]
	 * @property {Number} [subtotal]
	 * @property {Number} [shippingcost]
	 * @property {Number} [handlingcost]
	 * @property {Number} [giftcertapplied]
	
	 * @property {String} [discounttotal_formatted] SCA specific
	 * @property {String} [taxonshipping_formatted] SCA specific
	 * @property {String} [taxondiscount_formatted] SCA specific
	 * @property {Number} [itemcount] SCA specific
	 * @property {String} [taxonhandling_formatted] SCA specific
	 * @property {Number} [discountedsubtotal] SCA specific
	 * @property {String} [discountedsubtotal_formatted] SCA specific
	 * @property {Number} [taxondiscount] SCA specific
	 * @property {String} [handlingcost_formatted] SCA specific
	 * @property {Number} [taxonshipping] SCA specific
	 * @property {String} [taxtotal_formatted] SCA specific
	 * @property {String} [totalcombinedtaxes_formatted] SCA specific
	 * @property {Number} [totalcombinedtaxes] SCA specific
	 * @property {String} [giftcertapplied_formatted] SCA specific
	 * @property {String} [shippingcost_formatted] SCA specific
	 * @property {Number} [discountrate] SCA specific
	 * @property {Number} [taxonhandling] SCA specific
	 * @property {String} [tax2total_formatted] SCA specific
	 * @property {String} [discountrate_formatted] SCA specific
	 * @property {Number} [estimatedshipping] SCA specific
	 * @property {String} [estimatedshipping_formatted] SCA specific
	 * @property {String} [total_formatted] SCA specific
	 * @property {String} [subtotal_formatted] SCA specific
	
	 * @property {String} shippingtax1rate SCIS specific
	 * @property {Boolean} shippingcostoverridden SCIS specific
	 * @property {Number} amountdue SCIS specific
	 * @property {String} tranid SCIS specific
	 * @property {Date} createddate SCIS specific
	 * @property {String} couponcode SCIS specific
	 * @property {Date} createdfrom SCIS specific
	 * @property {Number} changedue SCIS specific
	 */
	
	
	
	/**
	 * in SCA the object returned by getShoppingSession().getOrder().submit()
	 * @typedef {Object} ConfirmationSubmit
	 */
	
	
	
	/**
	 * This is the representation an address
	 * @typedef {Object} Address
	 * @property {String} internalid
	 * @property {String} zip
	 * @property {String} country
	 * @property {String} addr1
	 * @property {String} addr2
	 * @property {String} addr3
	 * @property {String} city
	 * @property {String} company
	 * @property {Boolean} defaultbilling
	 * @property {Boolean} defaultshipping
	 * @property {String} fullname
	 * @property {Boolean} isresidential
	 * @property {Boolean} isvalid
	 * @property {String} phone
	 * @property {String} state
	 */
	
	/**
	 * This is the representation of a shipping method
	 * @typedef {Object} ShipMethod
	 * @property {String} internalid
	 * @property {String} name
	 * @property {Number} rate
	 * @property {String} rate_formatted
	 * @property {String} shipcarrier
	 */
	
	/**
	 * This is the representation of a shipping method
	 * @typedef {Object} PaymentMethod
	 * @property {String} internalid
	 * @property {String} type valid options: [creditcard, invoice, paypal, giftcertificate, external_checkout]
	 * @property {CreditCard} creditcard Required only if it is a creditcard
	
	 * @property {String} creditcard.ccnumber Required only if it is a creditcard
	 * @property {String} creditcard.ccname Required only if it is a creditcard
	 * @property {String} creditcard.ccexpiredate Required only if it is a creditcard
	 * @property {String} creditcard.expmonth Required only if it is a creditcard
	 * @property {String} creditcard.expyear Required only if it is a creditcard
	 * @property {String} creditcard.ccsecuritycode Required only if it is a creditcard
	
	 * @property {String} creditcard.paymentmethod.internalid
	 * @property {String} creditcard.paymentmethod.name
	 * @property {Boolean} creditcard.paymentmethod.creditcard
	 * @property {Boolean} creditcard.paymentmethod.ispaypal
	 * @property {String} creditcard.paymentmethod.key
	
	 * @property {String} key
	 * @property {String} thankyouurl
	 * @property {String} errorurl
	 * @property {String} giftcertificate.code Required only if it is a giftcertificate
	
	 */
	