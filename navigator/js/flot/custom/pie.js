var $border_color = "#ccc";
var $grid_color = "#ccc";
var $default_black = "#666";

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
		{ label: "HTML", data: Math.floor (Math.random() * 100 + 190) }, 
		{ label: "CSS", data: Math.floor (Math.random() * 100 + 220) }, 
		{ label: "PHP", data: Math.floor (Math.random() * 100 + 370) }, 
		{ label: "jQuery", data: Math.floor (Math.random() * 100 + 120) },
		{ label: "RUBY", data: Math.floor (Math.random() * 100 + 430) }
	];

	chartOptions = {		
		series: {
			pie: {
				show: true,  
				innerRadius: 0, 
				stroke: {
					width: 1
				}
			}
		},
		grid:{
      hoverable: true,
      clickable: false,
      borderWidth: 1,
			tickColor: $border_color,
      borderColor: $grid_color,
    },
		legend: {
			position: 'nw'
		},
		shadowSize: 0,
		tooltip: true,
		
		tooltipOpts: {
			content: '%s: %y'
		},
		colors: [$cool_ten, $cool_four, $cool_one, $cool_seven, $cool_two, $cool_eight],
	};

  var holder = $('#pie-chart');

  if (holder.length) {
      $.plot(holder, data, chartOptions );
  }
			
});