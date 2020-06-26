$(function(){
  $('.icon-plus2').click(function(){
  	$(this).closest('.chatbox-container').toggleClass('chatbox-minimize');
  	$(this).toggleClass('icon-minus2 icon-plus2');
  });
  $('.icon-times').click(function(){
    $(this).closest('.chatbox').hide();
  });
});