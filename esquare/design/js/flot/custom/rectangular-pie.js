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
		{ label: "Apples", data: Math.floor (Math.random() * 100 + 150) }, 
		{ label: "Oranges", data: Math.floor (Math.random() * 100 + 390) }, 
		{ label: "Pinaples", data: Math.floor (Math.random() * 100 + 530) }, 
		{ label: "Grapes", data: Math.floor (Math.random() * 100 + 90) },
		{ label: "Bananas", data: Math.floor (Math.random() * 100 + 320) }
	];

	chartOptions = {        
		series: {
			pie: {
				show: true,  
				radius: 500,
				stroke: {
					width: 0,
				}
			}
		}, 
		shadowSize: 0,
		legend: {
			show: false,
			position: 'se'
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
		colors: [$danger, $info, $success, $warning, $default_black],
	};

	var holder = $('#rectangular-pie');

	if (holder.length) {
		$.plot(holder, data, chartOptions );
	}		
		
});