// /**
//  * The root view of the application. It is installed in a container_element HTML element that must exists in the HTML DOM (div `#main`).
// Implement the concept of a `currentView`, this is at any time there is a MAIN view in which the use case implementation is shown. When the user navigates through different parts the application the current view ({@link getCurrentView}) changes  and the events {@link Layout#beforeAppendView} and {@link Layout#afterAppendView} are triggered. In general routers are responsible of the navigation by instantiating views and calling {@link showContent} or {@link showInModal}.
//  * @class
//  * @extends View
//  */
// class Layout extends View {

//     constructor() {
//         super()
//     }
//     /**
//      * Set's the current view
//      * @param {View} view
//      * @param {Boolean} dont_scroll
//      */
//     showContent(view, dont_scroll) {
//         return null
//     }

//     /**
//      * Get's the current view.
//      * @return {View}
//      */
//     getCurrentView() {
//         return null
//     }

//     /**
//      * Shows given view in a modal
//      * @param {View} view
//      * @param {{className:String,modalOptions:Object}} options Optional object
//      * @return  {Deferred}
//      */
//     showInModal(view, options) {
//         return null
//     }

//     /**
//      * Closes the current opened modal, if any
//      */
//     closeModal() {
//         return null
//     }
// }

// /**
//  * triggered before this layout view is appended to the DOM. This is NOT a cancelable event!
//  * @event Layout#beforeAppendToDom
//  * @type {Layout}
//  * @property {Layout} layout
//  */

// /**
//  * Triggered after this layout view is appended to the DOM
//  * @event Layout#afterAppendToDom
//  * @type {Layout}
//  */

// /**
//  * Triggered before the user navigates (current view changes). This is NOT a cancelable event!
//  * @event Layout#beforeAppendView
//  * @type {View}
//  */

// /**
//  * Triggered after the user navigates (current view changes)
//  * @event Layout#afterAppendView
//  * @type {View}
//  */
