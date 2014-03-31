
ko.bindingHandlers.play = {
    update: function(element, valueAccessor) {
        
        setTimeout(function() {
            
            if (element.className.indexOf('ui-btn') === -1) {
                $(element).button();
            }
            
            $(element).parent().on('click', function(e) {
                e.preventDefault();
                
                // does not work on iphone
                var $iframe = $('#text2speec');
                if (!$iframe.length) {
                    $iframe = $('<iframe id="text2speec">');
                    $iframe.appendTo('body');
                }

                $iframe.load(function() {
                    console.log('sound played');
                });

                $iframe.attr('src','http://translate.google.com/translate_tts?ie=UTF-8&q='+encodeURIComponent(ko.unwrap(valueAccessor()))+'&tl=sv');

            });
            
        }, 0);
        
        
        
    }
};