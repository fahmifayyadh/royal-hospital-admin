var $border_color = "#efefef";
var $grid_color = "#ddd";
var $default_black = "#666";
var $red = "#eb4343";
var $blue = "#5da4cd";
var $green = "#abd14f";
var $yellow = "#ffaa3a";
var $yellow_one = "#FFF844";
var $grey = "#999999";
var $blue_one = "#74b1d4";
var $blue_two = "#84bad9";
var $blue_three = "#9bc7e0";
var $blue_four = "#afd2e6";
var $blue_five = "#badff2";


// Custom Widgets
$(function() {
  $.fn.raty.defaults.path = 'img';

  $('#rate3').raty({ score: 3 });
  $('#rate5').raty({ score: 5 });
  $('#rate1').raty({ score: 1 });
  $('#rate6').raty({ score: 2 });
  $('#rate7').raty({ score: 4 });
  $('#rate_four').raty({
    score: 2,
    number: function() {
      return $(this).attr('data-number');
    }
  });
});

// Today income
var incrementA = $('#income_a').text();

$({numberValue: incrementA}).animate({
  numberValue: 34599
},{
  duration: 1850000,
  easing: 'linear',
  step: function () { 
    $('#income_a').text(Math.ceil(this.numberValue)); 
  },
   done: function () {
    $('#income_a').text(Math.ceil(this.numberValue));
  }
});

// Today expenses
var incrementB = $('#expenses_a').text();

$({numberValue: incrementB}).animate({
  numberValue: 12123
},{
  duration: 3550000,
  easing: 'linear',
  step: function () { 
    $('#expenses_a').text(Math.ceil(this.numberValue)); 
  },
   done: function () {
    $('#expenses_a').text(Math.ceil(this.numberValue));
  }
});