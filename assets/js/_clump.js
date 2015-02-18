'use strict';
window.qn = window.qn || {};

window.qn.editor = {
  element: '#quotenote',
  quotes: [
    "Passion and Gradualness",
    "All that we are is the result of what we have thought",
    "Become who you are by learning who you are",
    "Things ain’t what they use to be and probably never was",
    "It takes as much energy to wish as it does to plan.",
    "I can accept failure, everyone fails at something. But I can’t accept not trying"
  ],

  init: function(){
    var $ele = $(this.element);
    this.cycle_quotes($ele);
    this.resize_text($ele);
  },

  resize_text: function($ele){
    var $quote = $ele.find('.quote-text');
    var $container = $ele.find('.quote');
    var content_height = $container.outerHeight();
    var window_height = $(window).height();
    var font_size = parseInt($quote.css("font-size"));

    $ele.height(window_height);

    while(window_height > (content_height) ) {
      // console.log(window_height + 'qh');
      // console.log(content_height + 'ch');
      content_height = $container.outerHeight();
      font_size = font_size + 0.5;
      $quote.css({"font-size": font_size + "px"});
    }

    while(window_height < (content_height) ) {
      console.log(window_height + 'qh');
      console.log(content_height + 'ch');
      content_height = $container.outerHeight();
      font_size = font_size - 0.5;
      $quote.css({"font-size": font_size + "px"});
    }
  },

  cycle_quotes: function(){
    var random_quote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
    this.change_quote(random_quote);
  },

  change_quote: function(quote_text) {
    var $quote = $('.quote-text');
    $quote.text(quote_text);
  }
};

$(window).load(function(){
  window.qn.editor.init();
});
