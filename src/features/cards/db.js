
/**
 * Fake DB
 */
var db = [{
    q: "vad heter du?" ,
    a: [{
        t: "Jag heter Joe",
        c: true
    },{
        t: "Jag är 22 år gammal",
        c: false
    }]
},{
    q: "Hur gammal är du?" ,
    a: [{
        t: "Jag är 22 år gammal",
        c: true
    },{
        t: "Jag heter Joe",
        c: false
    }]
},{
    q: "vad ifrån kommer du?" ,
    a: [{
        t: "Jag fran Italien",
        c: false
    },{
        t: "Jag kommer fran Italien",
        c: true
    },{
        t: "Jag heter Joe",
        c: false
    }]
}];


/**
 * Asyncronous utility,
 * should load data from a remote server
 */
module.exports = function(callback) {
    setTimeout(function() {
        callback(null, db);
    }, 0);
};