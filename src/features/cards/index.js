
require('./ko-play');

var viewModel = require('./view-model').create();

exports.start = function() {
    
    ko.applyBindings(viewModel, document.getElementById('cards'));
    
    $('a[href="#next-card"]').on('vclick', viewModel.random.bind(viewModel));
    
};

