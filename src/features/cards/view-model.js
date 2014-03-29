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
        $("#cards ul").listview().listview("refresh");
    },
    
    onAnswer: function(item, e, vm) {
        var self = this;
        var target = e.currentTarget;
        console.log(target);
        if (item.c) {
            $(target).css({
                background: '#88c089',
                'text-shadow' : 'none'
            });
            setTimeout(function() {
                self.random();
            }, 500);
        } else {
            $(target).css({
                background: '#d03136',
                color: '#fff',
                'text-shadow' : 'none'
            });
        }
    }

};


exports.create = function() {
    var instance = Object.create(ViewModel);
    instance.init();
    return instance;
};