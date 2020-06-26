$(document).ready(function(){
	$('#scroll-tabs').scrollTabs();
});

$(document).ready(function(){	
	$('.scrolltabs .tab-link').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.scrolltabs .tab-link').removeClass('tab_selected');
		$('.scroll-tab-content').removeClass('tab_selected');

		$(this).addClass('tab_selected');
		$("#"+tab_id).addClass('tab_selected');
	})
})