
/**
 * Fake DB
 */
var db = [{
    q: "question 01" ,
    a: [{
        t: "answer 01-01",
        c: false
    },{
        t: "answer 01-02",
        c: true
    }]
},{
    q: "question 02" ,
    a: [{
        t: "answer 02-01",
        c: true
    },{
        t: "answer 02-02",
        c: false
    }]
},{
    q: "question 03" ,
    a: [{
        t: "answer 03-01",
        c: false
    },{
        t: "answer 03-02",
        c: false
    },{
        t: "answer 03-03",
        c: true
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