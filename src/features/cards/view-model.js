var random = require('jqbrick/utils/random');

var loadCards = require('./db');


var ViewModel = {
    
    init: function() {
        this.loading = ko.observable(true);
        this.question = ko.observable('first question');
        this.answers = ko.observableArray();
        
        this.card = null;
        loadCards(this.onCardsReady.bind(this));
        
    },
                  
    onCardsReady: function(err, cards) {
        this.cards = cards;
        this.loading(false);
        this.random();
    },
    
    random: function() {
        // get new card
        var card;
        while ((card = random.arrayItem(this.cards)) == this.card ) {}
        this.card = card;
        
        // populate local data
        this.question(card.q);
        this.answers(card.a);
    },
    
    onAnswersRender: function() {
        var self = this;
        clearTimeout(this.afterRenderTimeout);
        this.afterRenderTimeout = setTimeout(function() {
            $("#cards ul").listview().listview("refresh");
        }, 0);
    },
    
    onAnswer: function(item, e, vm) {
        var self = this;
        if (item.c) {
            $(e.target).parents('li').css('background', 'green');
            setTimeout(function() {
                self.random();
            }, 500);
        } else {
            $(e.target).parents('li').css('background', 'red');
        }
    }

};


exports.create = function() {
    var instance = Object.create(ViewModel);
    instance.init();
    return instance;
};