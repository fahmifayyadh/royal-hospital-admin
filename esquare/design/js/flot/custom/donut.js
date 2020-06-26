var $border_color = "#ccc";
var $grid_color = "#ccc";
var $default_black = "#666";

var $info = "#47759e";
var $danger = "#eb4343";
var $warning = "#b5799e";
var $success = "#1e825e";
	
$(function () {

	var data, chartOptions;
	
	data = [
		{ label: "Product A", data: Math.floor (Math.random() * 100 + 150) }, 
		{ label: "Product B", data: Math.floor (Math.random() * 100 + 390) }, 
		{ label: "Product C", data: Math.floor (Math.random() * 100 + 530) }, 
		{ label: "Product D", data: Math.floor (Math.random() * 100 + 90) },
		{ label: "Product E", data: Math.floor (Math.random() * 100 + 320) }
	];

	chartOptions = {        
		series: {
			pie: {
				show: true,  
				innerRadius: .5, 
				stroke: {
					width: 0,
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
      borderWidth: 1,
			tickColor: $border_color,
      borderColor: $grid_color,
    },
    shadowSize: 0,
		colors: [$danger, $info, $default_black, $success, $warning],
	};

	var holder = $('#donut-chart');

	if (holder.length) {
		$.plot(holder, data, chartOptions );
	}		
		
});