

var viewModel = require('./view-model').create();

exports.start = function() {
    
    ko.applyBindings(viewModel, document.getElementById('cards'));
    
    $('a[href="#next-card"]').on('vclick', viewModel.random.bind(viewModel));
    
//    setTimeout(function() {
//        $("#cards ul").listview();
//    }, 0);
};

