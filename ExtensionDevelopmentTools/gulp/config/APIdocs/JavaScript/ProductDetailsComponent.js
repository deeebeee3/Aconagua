/**
 * The ProductDetails component let's the user interact with most important aspect of the Product Details Page, like setting options, changing quantity, and obtain item's related information. An instance of this component can obtained by calling `container.getComponent("PDP")`
 * @extends VisualComponent
 * @hideconstructor
 * @global
 */
class ProductDetailsComponent extends VisualComponent {
  constructor () {
    super()

    /**
     * Name of the PDP main full view. Please use this name to reference views in methods like {@link addChildViews}, {@link addToViewContextDefinition}, etc
     * @type {String}
     */
    this.PDP_FULL_VIEW = 'ProductDetails.Full.View'

    /**
     * Name of the PDP quick-view. Please use this name to reference views in methods like {@link addChildViews}, {@link addToViewContextDefinition}, etc
     * @type {String}
     */
    this.PDP_QUICK_VIEW = 'ProductDetails.QuickView.View'
  }

  /**
   * Sets an option of the current PDP. It will only work if the current view is a Product Details Page
   * @param {String} cart_option_id Identifier of the option
   * @param {String} value Optional value. In case of invalid or not specified value the option selected will be cleaned
   * @return {Deferred<Boolean>} Returns a Deferred that is resolved with true or false accordingly if the action was successful or not
   * @fires ProductDetailsComponent#afterOptionSelection
   * @fires ProductDetailsComponent#beforeOptionSelection
   */
  setOption (cart_option_id, value) {
    return null
  }

  /**
   * Set the quantity of the current PDP. If the current View is a PDP
   * @param {Number} quantity
   * @return {Deferred} Returns a Deferred that is resolved with true or false accordingly if the action was successful or not
   * @fires ProductDetailsComponent#beforeQuantityChange
   * @fires ProductDetailsComponent#afterQuantityChange
   */
  setQuantity (quantity) {
    return null
  }

  /**
   * If the current View is a PDP it will return a representation of the transaction line represented in the current pdp, null otherwise. Notice that there could be some dynamic - user - configured extra fields.
   * @return {ItemInfo}
   */
  getItemInfo () {
    return null
  }

  /**
   * Filters all the child items that apply for the passed in matrix_options or the current item selection.
   * If no matrix_options is sent, and there is no options selected, it will return all the matrix child items.
   * If matrix_options is null or undefined, it will return the matrhix childs for the current selection.
   * @param {MatrixOptionSelection} matrix_options Options to filter matrix child items
   * @return {Array<MatrixChild.ItemInfo>} All the children of a matrix that complies with the current or passed in selection
   */
  getSelectedMatrixChilds (matrix_options) {
    return null
  }

  /**
   * Returns all the matrix child of the matrix item
   * @return {Array<MatrixChild.ItemInfo>} All the children of a matrix item
   */
  getAllMatrixChilds () {
    return null
  }

  /**
   * Returns the information available about the stock of the item.
   * If it is an Inventory Item will return the stock quantity available.
   * Depending on the current matrix options selection, it returns the sum of the stock available of all the matrix item childs.
   * @return {Item.StockInfo}
   */
  getStockInfo () {
    return null
  }
}

// Events:

/**
 * Cancelable event triggered before an option is selected. See {@link CancelableEvents}
 * @event ProductDetailsComponent#beforeOptionSelection
 * @property {String} optionCartId The selected option id
 * @property {String} value The selected option value
 */

/**
 * Triggered after an option is selected.
 * @event ProductDetailsComponent#afterOptionSelection
 * @property {String} optionCartId The selected option id
 * @property {String} value the selected option value
 */

/**
 * Cancelable event triggered before the quantity is changed. See {@link CancelableEvents}
 * @event ProductDetailsComponent#beforeQuantityChange
 * @type {number}
 */

/**
 * Triggered after the quantity is changed.
 * @event ProductDetailsComponent#afterQuantityChange
 * @type {number}
 */

/**
 * Cancelable event triggered before the main image displayed in the Details page changes. See {@link CancelableEvents}
 * @event ProductDetailsComponent#beforeImageChange
 * @property {number} currentIndex
 * @property {number} nextIndex
 */

/**
 * Triggered after the main image displayed in the Details page changes.
 * @event ProductDetailsComponent#afterImageChange
 * @type {undefined}
 */

// Data types:

/**
 * Representation of the data objects used to send a transaction line representation to the back-end without sending all the heavy weight JSON that is not totally needed by the back-end
 * @typedef {Object} ItemInfo
 *
 * @property {String} internalid
 * @property {Number} [quantity]
 * @property {Array<Object>} [options]
 * @property {Number} [splitquantity]
 * @property {Number} [shipaddress]
 * @property {Number} [shipmethod]
 * @property {Number} [location]
 * @property {String} [fulfillmentChoice]
 * @property {*} [item]
 * @property {String} [item.internalid]
 * @property {String} [item.type]
 * @property {String} [item.onlinecustomerprice_detail]
 */

/**
 *  @typedef {Object} MatrixOptionSelection
 *
 * @property {String} custom_item_option
 * @property {String|Number} custom_item_option_value
 */

/**
 *  @typedef {Object} MatrixChild.ItemInfo
 *
 * @property {String} internalid
 * @property {String} custom_item_option??
 * @property {boolean} isbackorderable
 * @property {boolean} isinstock
 * @property {boolean} ispurchasable
 * @property {boolean} isstorepickupallowed
 * @property {String} itemid
 * @property {String} itemtype
 * @property {String} itemtype
 * @property {Array} options
 * @property {String} outofstockbehavior
 * @property {String} outofstockmessage
 * @property {Number} quantityavailable
 * @property {Location} quantityavailableforstorepickup_detail
 * @property {boolean} showoutofstockmessage
 * @property {String} stockdescription

 * @property {object} keyMapping_attributesRating
 * @property {array} keyMapping_attributesToRateOn
 * @property {Breadcrumb} [keyMapping_breadcrumb]
 * @property {Number} keyMapping_comparePriceAgainst
 * @property {String} keyMapping_comparePriceAgainstFormated
 * @property {String} keyMapping_correlatedItemsDetail
 * @property {String} keyMapping_id
 * @property {Image} [keyMapping_images]
 * @property {String} keyMapping_inStockMessage
 * @property {String} keyMapping_isBackorderable
 * @property {String} keyMapping_isInStock
 * @property {String} keyMapping_isPurchasable
 * @property {boolean} keyMapping_isReturnable
 * @property {boolean} keyMapping_isfulfillable
 * @property {boolean} keyMapping_isstorepickupallowed
 * @property {String} keyMapping_itemType
 * @property {String} keyMapping_keywords
 * @property {String} keyMapping_matrixChilds
 * @property {String} keyMapping_matrixParent
 * @property {String} keyMapping_metaTags
 * @property {Number} keyMapping_minimumQuantity
 * @property {String} keyMapping_name
 * @property {String} keyMapping_optionsDetails
 * @property {String} keyMapping_outOfStockMessage
 * @property {String} [keyMapping_pageHeader]
 * @property {String} [keyMapping_pageTitle]
 * @property {Number} keyMapping_price
 * @property {String} keyMapping_priceDetails
 * @property {String} keyMapping_price_formatted
 * @property {StorePickUpDetail} [keyMapping_quantityavailableforstorepickup_detail]
 * @property {Number} keyMapping_rating
 * @property {Number} keyMapping_ratingsCount
 * @property {object} keyMapping_ratingsCountsByRate
 * @property {String} keyMapping_relatedItems
 * @property {String} keyMapping_relatedItemsDetail
 * @property {boolean} keyMapping_showInStockMessage
 * @property {String} keyMapping_showOutOfStockMessage
 * @property {boolean} keyMapping_showQuantityAvailable
 * @property {boolean} keyMapping_showStockDescription
 * @property {String} keyMapping_sku
 * @property {String} keyMapping_stock
 * @property {String} keyMapping_stockDescription
 * @property {String} keyMapping_stockDescriptionClass
 * @property {*} keyMapping_thumbnail

 * @property {String} [keyMapping_thumbnail.url]
 * @property {String} [keyMapping_thumbnail.altimagetext]

 * @property {String} keyMapping_url
 * @property {*} onlinecustomerprice_detail

 * @property {String} [onlinecustomerprice_detail.onlinecustomerprice_formatted]
 * @property {Number} [onlinecustomerprice_detail.onlinecustomerprice]
 */

/**
 *  @typedef {Object} Breadcrumb
 *
 * @property {String} href
 * @property {String} text
 */

/**
 *  @typedef {Object} Image
 *
 * @property {String} altimagetext
 * @property {String} url
 */

/**
 *  @typedef {Object} StorePickUpDetail
 *
 * @property {Number} internalid
 * @property {Number} qtyavailableforstorepickup
 */

/**
 *  @typedef {Object} Item.StockInfo
 *
 * @property {Number} stock
 * @property {String} inStockMessage
 * @property {boolean} isAvailableForPickup
 * @property {boolean} isInStock
 * @property {boolean} isNotAvailableInStore
 * @property {String} outOfStockMessage
 * @property {boolean} showInStockMessage
 * @property {boolean} showQuantityAvailable
 * @property {boolean} showStockDescription
 * @property {String} stockDescription
 * @property {String} stockDescriptionClass
 * @property {StorePickUpDetail} [stockPerLocation]
 */
