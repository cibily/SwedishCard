
module.exports = function(i) {
    if (Array.isArray) {
        return Array.isArray(i);
    } else {
        return i instanceof Array();
    }
};
