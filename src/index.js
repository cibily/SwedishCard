/**
 * PoliteJS Worspace - Single Page App Builder
 * ===========================================
 * 
 * 
 */



var features = [/*FEATURES*/];



/**
 * Export `require()` to the global namespace
 */
window.require = require;

window.jqb = require('jqbrick');

window.startApp = function() {
    
    /**
     * Config jQueryMobile
     */
    $.mobile.defaultPageTransition = 'slide';
    
    
    window.jqb.init();
    
    /**
     * Features Init
     */
    features.forEach(function(feature) {
        if (feature.init) {
            feature.init();
        }
    });
    
    window.jqb.start();

    /**
     * Features Start
     */
    features.forEach(function(feature) {
        if (feature.start) {
            feature.start();
        }
    });
    
    $.mobile.initializePage();
    
};
