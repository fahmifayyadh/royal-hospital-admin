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
		
		var d1, d2, data, chartOptions;

		var d1 = [[1262304000000, 5], [1264982400000, 200], [1267401600000, 1605], [1270080000000, 6129], [1272672000000, 11643], [1275350400000, 19055], [1277942400000, 30062], [1280620800000, 39197], [1283299200000, 37000], [1285891200000, 27000], [1288569600000, 21000], [1291161600000, 17000]];
		var d2 = [[1262304000000, 2], [1264982400000, 120], [1267401600000, 605], [1270080000000, 3129], [1272672000000, 4643], [1275350400000, 7055], [1277942400000, 4062], [1280620800000, 12197], [1283299200000, 7000], [1285891200000, 6000], [1288569600000, 4300], [1291161600000, 1000]];

		data = [{ 
			label: "Facebook", 
			data: d1
		}, {
			label: "Google Plus",
			data: d2
		}];
 
		chartOptions = {
			xaxis: {
				min: (new Date(2009, 11)).getTime(),
				max: (new Date(2010, 11)).getTime(),
				mode: "time",
				tickSize: [1, "month"],
				monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				tickLength: 0
			},
				yaxis: {

				},
				series: {
					lines: {
						show: true, 
						fill: false,
						lineWidth: 1,
					},
					points: {
						show: true,
						radius: 4,
						fill: true,
						fillColor: "#ffffff",
						lineWidth: 2
					}
				},
				 grid:{
	        hoverable: true,
	        clickable: true,
	        borderWidth: 1,
	        tickColor: $border_color,
        	borderColor: $grid_color,
	      },
	      shadowSize: 0,
				legend: {
					show: true,
					position: 'nw'
				},
				
				tooltip: true,
				tooltipOpts: {
					content: '%s: %y'
				},
				colors: [$cool_ten, $cool_four, $cool_one, $cool_seven, $cool_two, $cool_eight],
		};

		var holder = $('#line-chart');

		if (holder.length) {
			$.plot(holder, data, chartOptions );
		}


});