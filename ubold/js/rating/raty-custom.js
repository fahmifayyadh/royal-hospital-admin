// Rating
$(function() {
  $.fn.raty.defaults.path = 'img';
  $('#rate1').raty({ score: 5 });
  $('#rate2').raty({ score: 3 });
  $('#rate3').raty({ score: 4 });
});