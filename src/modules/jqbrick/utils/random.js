var isArray = require('./is-array');

exports.number = function (min, max) {
    if (isArray(min)) {
        max = min.length -1;
        min = 0;
    }
    return random(min,max);
};

exports.arrayItem = function(a) {
    return a[random(0, a.length - 1)];
};

function random(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}