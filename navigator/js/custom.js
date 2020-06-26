var $border_color = "#efefef";
var $grid_color = "#ddd";
var $default_black = "#666";
var $red = "#FF6464";
var $blue = "#53ACDF";
var $green = "#abd14f";
var $yellow = "#ffaa3a";
var $yellow_one = "#FFF844";
var $grey = "#999999";
var $blue_one = "#74b1d4";
var $blue_two = "#84bad9";
var $blue_three = "#9bc7e0";
var $blue_four = "#afd2e6";
var $blue_five = "#badff2";


// Cool colors
var $cool_one = "#7764a2";
var $cool_two = "#145b9b";
var $cool_three = "#00a4be";
var $cool_four = "#45a989";
var $cool_five = "#588ba4";

var $cool_six = "#b2a7d0";
var $cool_seven = "#67aadf";
var $cool_eight = "#7bc1d8";
var $cool_nine = "#89c1a2";
var $cool_ten = "#8bb9d6";


// Dropdown Menu
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

// Sidebar
// $(function() {
// 	var s = 0;
// 	$('.menu-toggle').click(function() {
// 		if (s == 0) {
// 			s = 1;
// 			$( "#sidebar" ).animate({left: "-230px" }, 100 );
// 			$('.dashboard-wrapper').animate({'margin-left': "0px" }, 100);
// 		} else {
// 			s = 0;
// 			$('#sidebar').animate({left: "0px" }, 100);
// 			$('.dashboard-wrapper').animate({'margin-left': "230px" }, 100);
// 		}
// 	});
// });

// Today income
var incrementJ = $('#today_income').text();

$({numberValue: incrementJ}).animate({
	numberValue: 7845
},{
	duration: 7000,
	easing: 'linear',
	step: function () { 
		$('#today_income').text(Math.ceil(this.numberValue)); 
	},
	 done: function () {
		$('#today_income').text(Math.ceil(this.numberValue));
	}
});

// Today expenses
var incrementK = $('#today_expenses').text();

$({numberValue: incrementK}).animate({
	numberValue: 3121
},{
	duration: 9000,
	easing: 'linear',
	step: function () { 
		$('#today_expenses').text(Math.ceil(this.numberValue)); 
	},
	 done: function () {
		$('#today_expenses').text(Math.ceil(this.numberValue));
	}
});

//Header Bar
$( document ).ready(function() {
	$('#show-header-bar').on('click', function(){
		if($('#show-header-bar').hasClass('open')){
			$('.header-bar').attr('style','top: -200px');
			$('#show-header-bar').removeClass('open')
		} else {
			$('.header-bar').attr('style','top: 52px');
			$('#show-header-bar').addClass('open')
		}
	});
});

// Mobile Nav
$('#mob-nav').click(function(){
	if($('aside.open').length > 0){
		$( "aside" ).animate({left: "-320px" }, 500 ).removeClass('open');
	} else {
		$( "aside" ).animate({left: "0px" }, 500 ).addClass('open');
	}
});

// Tooltips
$('a').tooltip('hide');

// Flot Charts
$(function(){
	// Donut 1
	$(function () {
		var data, chartOptions;
		data = [
			{ label: "", data: Math.floor (Math.random() * 100 + 130) }, 
			{ label: "", data: Math.floor (Math.random() * 100 + 50) }, 
		];
		chartOptions = {
			series: {
				pie: {
					show: true,  
					innerRadius: .7,
					stroke: {
						width: 1,
					}
				}
			}, 
			shadowSize: 0,
			legend: {
				position: 'sw'
			},
			tooltip: true,
			tooltipOpts: {
				content: '%s: %y'
			},
			grid:{
				hoverable: true,
				clickable: false,
				borderWidth: 0,
			},
			shadowSize: 0,
			colors: [$red, $blue],
		};
		var holder = $('#donut-chart-1');
		if (holder.length) {
			$.plot(holder, data, chartOptions );
		} 
	});

	//Donut 2
	$(function () {
		var data, chartOptions;
		data = [
			{ label: "", data: Math.floor (Math.random() * 100 + 30) }, 
			{ label: "", data: Math.floor (Math.random() * 100 + 320) }, 
		];
		chartOptions = {        
			series: {
				pie: {
					show: true,  
					innerRadius: .7,
					stroke: {
						width: 1,
					}
				}
			}, 
			shadowSize: 0,
			legend: {
				position: 'sw'
			},
			tooltip: true,
			tooltipOpts: {
				content: '%s: %y'
			},
			grid:{
				hoverable: true,
				clickable: false,
				borderWidth: 0,
			},
			shadowSize: 0,
			colors: [$blue, $yellow],
		};
		var holder = $('#donut-chart-2');
		if (holder.length) {
			$.plot(holder, data, chartOptions );
		} 
	});

	// Donut 3
	$(function () {
		var data, chartOptions;
		data = [
			{ label: "", data: Math.floor (Math.random() * 100 + 80) }, 
			{ label: "", data: Math.floor (Math.random() * 100 + 60) }, 
		];
		chartOptions = {
			series: {
				pie: {
					show: true,  
					innerRadius: .7,
					stroke: {
						width: 1,
					}
				}
			}, 
			shadowSize: 0,
			legend: {
				position: 'sw'
			},
			tooltip: true,
			tooltipOpts: {
				content: '%s: %y'
			},
			grid:{
				hoverable: true,
				clickable: false,
				borderWidth: 0,
			},
			shadowSize: 0,
			colors: [$cool_ten, $cool_nine],
		};
		var holder = $('#donut-chart-3');
		if (holder.length) {
			$.plot(holder, data, chartOptions );
		} 
	});

	//Donut 4
	$(function () {
		var data, chartOptions;
		data = [
			{ label: "", data: Math.floor (Math.random() * 100 + 230) }, 
			{ label: "", data: Math.floor (Math.random() * 100 + 100) }, 
		];
		chartOptions = {        
			series: {
				pie: {
					show: true,  
					innerRadius: .7,
					stroke: {
						width: 1,
					}
				}
			}, 
			shadowSize: 0,
			legend: {
				position: 'sw'
			},
			tooltip: true,
			tooltipOpts: {
				content: '%s: %y'
			},
			grid:{
				hoverable: true,
				clickable: false,
				borderWidth: 0,
			},
			shadowSize: 0,
			colors: [$cool_eight, $cool_seven],
		};
		var holder = $('#donut-chart-4');
		if (holder.length) {
			$.plot(holder, data, chartOptions );
		} 
	});
});


// Live Chat
$('.chat').slideToggle(2000, 'swing');
$('.chat-message-counter').fadeToggle(1000, 'swing');
(function() {
	$('#live-chat header').on('click', function() {
		$('.chat').slideToggle(1000, 'swing');
		$('.chat-message-counter').fadeToggle(1000, 'swing');
	});
	$('.chat-close').on('click', function(e) {
		e.preventDefault();
		$('#live-chat').fadeOut(1000);
	});
})();