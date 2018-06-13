/**
 * The ProductListPage component let's the user interact with most important aspect of the Product List Page (a.k.a "search"), like setting options, pagination, filters, ordering, and obtain item's related information.
 *
 * Note some methods of this class only make sense to be called when the current page is the "search" page. In other case, they will return a {@link Deferred} object resolved with `false` and print a warning message in the browser's console.
 *
 * An instance of this component can obtained by calling `container.getComponent("PLP")`.
 * @extends VisualComponent
 * @hideconstructor
 * @global
 */
class ProductListPageComponent extends VisualComponent {

    constructor() {
        super()
		/**
		 * Name of the cart main view. Please use this name to reference views in methods like {@link addChildViews}, {@link addToViewContextDefinition}, etc
		 * @type {String}
		 */
        this.PLP_VIEW = 'facet-browse'
    }

    /**
     * Return the info of the current options in the PLP
     * @return {Pagination}
     */
    getPagination() {
        return null
    }

    /**
     * Navigates to given page. The current view must be the search page for this to work.
     * @param {number} page
     * @return {Deferred} that will resolved with false if there is any error or with non-false value otherwhise.
     */
    setPage(page) {
        return null
    }

    /**
     * Get the info of the active sorting option. The current view must be the search page for this to work.
     * @return {Sorting} or null if the current page is not the search page.
     */
    getSorting() {
        return null
    }

    /**
     *  Get the info of all the sorting option
     * @return {Array<Sorting>}
     */
    getAllSorting() {
        return null
    }

    /**
     * Sets the sorting of the current search page. Will only work if the current page is the search page.
     * @param {Sorting} sorting
     * @return {Deferred} will resolve to false if the current page is not the search page or if there is an error - different than false otherwise.
     */
    setSorting(sorting) {
        return null
    }

    /**
     * Get the info of the active display option. Will only work if the current page is the search page.
     * @return {Display}
     */
    getDisplay() {
        return null
    }

    /**
     * Get the info of all the display option including which is the active one. Will only work if the current page is the search page.
     * @return {Array<Display>}
     */
    getAllDisplay() {
        return null
    }

    /**
     * Set the display option in the PLP. Will only work if the current page is the search page.
     * @param {Display} options
     * @return {Deferred} will resolve to false if the current page is not the search page or if there is an error - different than false otherwise.
     */
    setDisplay(options) {
        return null
    }

    /**
     * Get the info of the active page size option. Will only work if the current page is the search page.
     * @return {PageSize}
     */
    getPageSize() {
        return null
    }


    /**
     * Get the info of all the page size option. Will only work if the current page is the search page.
     * @return {Array<PageSize>}
     */
    getAllPageSize() {
        return null
    }

    /**
     * Set the page size in the current search page. Will only work if the current page is the search page.
     * @param {PageSize} options
     * @return {Deferred} will resolve to false if the current page is not the search page or if there is an error - different than false otherwise.
     */
    setPageSize(options) {
        return null
    }

    /**
     * Get the info of the active filters that are currently applied in the current search page.  Will only work if the current page is the search page.
     * @return {Array<Filter>}
     */
    getFilters() {
        return null
    }

    /**
     * Get the info of all the filters - one of them is active. Will only work if the current page is the search page.
     * @return {Array<Filter>}
     */
    getAllFilters() {
        return null
    }

    /**
     * Set the filters for the PLP
     * @param {Array<Filter>} filters
     * @return {Deferred} will resolve to false if the current page is not the search page or if there is an error - different than false otherwise.
     */
    setFilters(filters) {
        return null
    }

    /**
     * get the current text query that is being search in the current search page or null if the current page is not the search page.
     * @return {String|null}
     */
    getSearchText() {
        return null
    }

    /**
     * Triggers a search using given keywords in the current search page.
     * @param {{keywords: String}} options
     * @return {Deferred} will resolve to false if the current page is not the search page or if there is an error - different than false otherwise.
     */
    setSearchText(options) {
        return null
    }

    /**
     * Get the info of all the items in the PLP
     * @return {Array<SearchItemInfo>}
     */
    getItemsInfo() {
        return null
    }

    // Get the info of the current Category
    // // @return {Object}
    // getCategoryInfo(){

    // }
}


/**
 * @typedef {Object} Filter
 * @property {String} id
 * @property {String} url
 * @property {String} value
 * @property {Boolean} active
 * @property  {Object} config
 * @property {String} config.id
 * @property {String} config.name
 * @property {String} config.url
 * @property {String} config.behavior
 * @property {Number} config.max
 * @property {String} config.titleToken
 */


/**
 * @typedef {Object} PageSize
 * @property {Number} items
 * @property {String} name
 * @property {Boolean} isDefault
 * @property {String} id
 * @property {Boolean} active
 */


/**
 * @typedef {Object} Display
 * @property {String} id
 * @property {String} name
 * @property {String} template
 * @property {Number} columns
 * @property {String} icon
 * @property {Boolean} isDefault
 * @property {Boolean} active
 */


/**
 * @typedef {Object} Sorting
 * @property {String} id
 * @property {String} name
 * @property {Boolean} isDefault
 * @property {Boolean} [active]
 */

/**
 * @typedef  {Object} Pagination
 * @property {Number} currentPage
 * @property {Number} pageCount
 * @property {Number} itemCount
 * @property {Number} pageSize
 * @property {String} sorting
 * @property {String} display
 * @property {Object} filters
 * @property {String} searchText
 */








/**
 * @typedef  {Object} SearchItemInfo
 * @property {Boolean} [isinstock]
 * @property {Number} [onlinecustomerprice]
 * @property {matrixchilditems_detail[]} [matrixchilditems_detail]
 * @property {String} [itemid]
 * @property {Boolean} [ispurchasable]
 * @property {String} [onlinecustomerprice_formatted]
 * @property {String} [stockdescription]
 * @property {Boolean} [isbackorderable]
 * @property {Object} [itemimages_detail]
 * @property {onlinecustomerprice_detail} [onlinecustomerprice_detail]
 * @property {String} [custitem_automation_item_field_001]
 * @property {String} [onlinematrixpricerange]
 * @property {Number} [internalid]
 * @property {Boolean} [showoutofstockmessage]
 * @property {String} [outofstockbehavior]
 * @property {String} [custitem_automation_item_field_002]
 * @property {itemoptions_detail} [itemoptions_detail]
 * @property {String} [outofstockmessage]
 * @property {String} [displayname]
 * @property {String} [storedisplayname2]
 * @property {String} [storedescription]
 * @property {String} [urlcomponent]
 * @property {SearchItemInfo_options[]} [options]
 */
/**
 * @typedef  {Object} matrixchilditems_detail
 * @property {Boolean} [isinstock]
 * @property {String} [itemid]
 * @property {Boolean} [ispurchasable]
 * @property {String} [stockdescription]
 * @property {Boolean} [isbackorderable]
 * @property {onlinecustomerprice_detail} [onlinecustomerprice_detail]
 * @property {Number} [internalid]
 * @property {Boolean} [showoutofstockmessage]
 * @property {String} [outofstockbehavior]
 * @property {String} [itemtype]
 * @property {String} [outofstockmessage]
 */
/**
 * @typedef  {Object} onlinecustomerprice_detail
 * @property {String} [onlinecustomerprice_formatted]
 * @property {Number} [onlinecustomerprice]
 */
/**
 * @typedef  {Object} itemimages_detail
 * @property {itemimages_detail_urls[]} [urls]
 */
/**
 * @typedef  {Object} itemimages_detail_urls
 * @property {String} [altimagetext]
 * @property {String} [url]
 */
/**
 * @typedef  {Object} itemoptions_detail
 * @property {String} matrixtype
 * @property {itemoptions_detail_fields[]} fields
 */
/**
 * @typedef  {Object} itemoptions_detail_fields
 * @property {Boolean} [ismandatory]
 * @property {String} [internalid]
 * @property {Boolean} [ismatrixdimension]
 * @property {itemoptions_detail_fields_values[]} [values]
 * @property {String} [label]
 * @property {String} [type]
 * @property {String} [sourcefrom]
 */
/**
 * @typedef  {Object} itemoptions_detail_fields_values
 * @property {String} [label]
 * @property {Boolean} [isAvailable]
 * @property {String} [url]
 */
/**
 * @typedef  {Object} SearchItemInfo_options
 * @property {String} label
 * @property {SearchItemInfo_options_values[]} values
 * @property {String} type
 * @property {String} cartOptionId
 * @property {String} itemOptionId
 * @property {Boolean} isMatrixDimension
 * @property {Boolean} isMandatory
 * @property {String} urlParameterName
 * @property {Boolean} useLabelsOnUrl
 * @property {Number} index
 */
/**
 * @typedef  {Object} SearchItemInfo_options_values instance
 * @property {String} label
 * @property {Boolean} isAvailable
 * @property {String} url
 */

