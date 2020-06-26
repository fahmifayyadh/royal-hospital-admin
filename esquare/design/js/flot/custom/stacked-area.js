var $border_color = "#ccc";
var $grid_color = "#ccc";
var $default_black = "#666";

var $info = "#47759e";
var $danger = "#eb4343";
var $warning = "#b5799e";
var $success = "#1e825e";

$(function () {
		
	var d2, d3, data, chartOptions;

	var d2 = [[1262304000000, 789], [1264982400000, 1200], [1267401600000, 2605], [1270080000000, 6129], [1272672000000, 11643], [1275350400000, 19055], [1277942400000, 30062], [1280620800000, 39000], [1283299200000, 37000], [1285891200000, 31000], [1288569600000, 25000], [1291161600000, 19000]];
	var d3 = [[1262304000000, 489], [1264982400000, 800], [1267401600000, 2205], [1270080000000, 5429], [1272672000000, 11643], [1275350400000, 19055], [1277942400000, 30062], [1280620800000, 39000], [1283299200000, 37000], [1285891200000, 31000], [1288569600000, 25000], [1291161600000, 17000]];

	data = [{
		label: "Income",
		data: d2
	}, {
		label: "Expenses",
		data: d3
	}];
 
	chartOptions = {
		xaxis: {
			min: (new Date(2009, 12, 1)).getTime(),
			max: (new Date(2010, 11, 2)).getTime(),
			mode: "time",
			tickSize: [1, "month"],
			monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			tickLength: 0
		},
		yaxis: {

		},
		series: {
			stack: true,
			lines: {
				show: true, 
				fill: 0.3,
				lineWidth: 1
			},
			points: {
				show: true,
				radius: 4,
				fill: true,
				fillColor: "#ffffff",
				lineWidth: 1.5
			}
		},
		grid:{
      hoverable: true,
      clickable: false,
      borderWidth: 1,
      tickColor: "#fff",
      borderColor: "#fff",
    },
		legend: {
			show: true,
			position: 'nw'
		},
		shadowSize: 0,
		tooltip: true,
		tooltipOpts: {
		content: '%s: %y'
		},
		colors: [$danger, $default_black, $info, $success, $warning],
	};

	var holder = $('#stacked-area-chart');

	if (holder.length) {
		$.plot(holder, data, chartOptions );
	}
});