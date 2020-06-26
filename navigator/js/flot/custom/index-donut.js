var $border_color = "#ccc";
var $grid_color = "#ccc";
var $default_black = "#666";

var $primary = "#6a55c2";
var $info = "#53ACDF";
var $danger = "#e94b3b";
var $warning = "#ffb61c";
var $success = "#76bf46";
var $yellow = "#ffee00";
var $facebook = "#3b5999";
var $twitter = "#00acee";
var $linkedin = "#1a85bd";
var $gplus = "#dc4937";

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

$(function () {

	var data, chartOptions;
	
	data = [
		{ label: "", data: Math.floor (Math.random() * 100 + 140) }, 
		{ label: "", data: Math.floor (Math.random() * 100 + 30) },
		{ label: "", data: Math.floor (Math.random() * 100 + 60) }, 
		{ label: "", data: Math.floor (Math.random() * 100 + 90) }, 
		{ label: "", data: Math.floor (Math.random() * 100 + 120) }, 
	];

	chartOptions = {        
		series: {
			pie: {
				show: true,  
				innerRadius: .6, 
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
			hoverable: false,
			clickable: false,
			borderWidth: 0,
		},
		shadowSize: 0,
		colors: [$cool_six, $cool_one, $cool_three, $cool_five, $cool_seven, $cool_eight],
	};

	var holder = $('#donut-chart');

	if (holder.length) {
		$.plot(holder, data, chartOptions );
	}		
		
});