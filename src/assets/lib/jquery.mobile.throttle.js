/**
 * Throttle jQueryMobile initialization.
 * It gives time to the `feature.init()` to alter JQM configuration.
 */

$(document).on('mobileinit', function() {
    $.mobile.autoInitializePage = false;
});