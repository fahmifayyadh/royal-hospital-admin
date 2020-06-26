var $border_color = "#efefef";
var $grid_color = "#dddddd";
var $default_black = "#444444";
var $primary = "#6a55c2";
var $primary_light = "#adb3f6";
var $danger = "#eb4343";
var $info = "#47759e";
var $success = "#1e825e";
var $yellow = "#b5799e";

//Dropdown Menu
$( document ).ready(function() {
	$('#menu > ul > li > a').click(function() {
		$('#menu li').removeClass('active');
		$(this).closest('li').addClass('active'); 
		var checkElement = $(this).next();
		if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
			$(this).closest('li').removeClass('active');
			checkElement.slideUp('normal');
		}
		if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
			$('#menu ul ul:visible').slideUp('normal');
			checkElement.slideDown('normal');
		}
		if($(this).closest('li').find('ul').children().length == 0) {
			return true;
		} else {
			return false; 
		}   
	});
});

//Sidebar
$(function() {
	var s = 0;
	$('.menu-toggle').click(function() {
		if (s == 0) {
			s = 1;
			$( "#sidebar" ).animate({left: "-230px" }, 100 );
			$('.dashboard-wrapper').animate({'margin-left': "0px" }, 100);
		} else {
			s = 0;
			$('#sidebar').animate({left: "0px" }, 100);
			$('.dashboard-wrapper').animate({'margin-left': "230px" }, 100);
		}
	});
});


// Today income
var incrementJ = $('#downloads').text();

$({numberValue: incrementJ}).animate({
	numberValue: 547
},{
	duration: 3000,
	easing: 'linear',
	step: function () { 
		$('#downloads').text(Math.ceil(this.numberValue)); 
	},
	 done: function () {
		$('#downloads').text(Math.ceil(this.numberValue));
	}
});

// Today expenses
var incrementK = $('#users_online').text();

$({numberValue: incrementK}).animate({
	numberValue: 379
},{
	duration: 5000,
	easing: 'linear',
	step: function () { 
		$('#users_online').text(Math.ceil(this.numberValue)); 
	},
	 done: function () {
		$('#users_online').text(Math.ceil(this.numberValue));
	}
});

// SparkLine Bar
$(function () {

	$('#downloads_graph').sparkline([3,4,5,6,3,4,3,4,5,3,3,2,1,1,1,1,1,1], {
		height: '24',
		type: 'bar',
		barSpacing: 3,
		barWidth: 6,
		barColor: $danger,
		tooltipPrefix: 'Users: '
	});
	$('#downloads_graph').sparkline([3,3,4,5,5,5,4,4,4,3,2,1,1,1,1,1,1,2,1], {
		composite: true,
		height: '30',
		fillColor:false,
		lineColor: $default_black,
		tooltipPrefix: 'Downloads: '
	});

	$('#users_online_graph').sparkline([2,3,4,5,7,5,4,3,3,2,1,1,2,3,1,1,1], {
		height: '24',
		type: 'bar',
		barSpacing: 3,
		barWidth: 6,
		barColor: $default_black,
		tooltipPrefix: 'time: '
	});
	$('#users_online_graph').sparkline([1,1,2,3,4,9,9,11,11,13,13,13,10,7,3,3,1], {
		composite: true,
		height: '30',
		fillColor:false,
		lineColor: $danger,
		tooltipPrefix: 'Users Online: '
	});
});

// scrollUp full options
$(function () {
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		scrollDistance: 300, // Distance from top/bottom before showing element (px)
		scrollFrom: 'top', // 'top' or 'bottom'
		scrollSpeed: 300, // Speed back to top (ms)
		easingType: 'linear', // Scroll to top easing (see http://easings.net/)
		animation: 'fade', // Fade, slide, none
		animationSpeed: 200, // Animation in speed (ms)
		scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
		//scrollTarget: false, // Set a custom target element for scrolling to the top
		scrollText: '<i class="ion-chevron-up"></i>', // Text for element, can contain HTML
		scrollTitle: false, // Set a custom <a> title if required.
		scrollImg: false, // Set true to use image
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
		zIndex: 2147483647 // Z-Index for the overlay
	});
});

// Mobile Nav
$('#mob-nav').click(function(){
	if($('aside.open').length > 0){

		$( "aside" ).animate({left: "-250px" }, 500 ).removeClass('open');
	} else {
		$( "aside" ).animate({left: "0px" }, 500 ).addClass('open');
	}
});

// Tooltips
$('a').tooltip('hide');

// $(function(){
// 	$('#sidebar').css({'height':($(document).height())+'px'});
// 	$('.dashboard-wrapper').css({'height':($(document).height())+'px'});
// 	$(window).resize(function(){
// 		$('#sidebar').css({'height':($(document).height())+'px'});
// 		$('.dashboard-wrapper').css({'height':($(document).height())+'px'});
// 	});
// });