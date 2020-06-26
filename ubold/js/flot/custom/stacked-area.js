$(function () {
		
	var d1, d2, d3, data, chartOptions;

	var d1 = [[1260100000000, 776], [1264982400000, 1298], [1267401600000, 434], [1270080000000, 982], [1272672000000, 602], [1275350400000, 826], [1277942400000, 302], [1280620800000, 837], [1283299200000, 1104], [1285891200000, 1144], [1288569600000, 1577], [1289999989000, 1577]];
	var d2 = [[1260100000000, 412], [1264982400000, 600], [1267401600000, 905], [1270080000000, 729], [1272672000000, 343], [1275350400000, 555], [1277942400000, 262], [1280620800000, 1197], [1283299200000, 2200], [1285891200000, 1300], [1288569600000, 1200], [1289999989000, 1200]];
	var d3 = [[1260100000000, 100], [1264982400000, 290], [1267401600000, 1405], [1270080000000, 429], [1272672000000, 643], [1275350400000, 255], [1277942400000, 762], [1280620800000, 297], [1283299200000, 1700], [1285891200000, 4000], [1288569600000, 1300], [1289999989000, 1700]];

	data = [{ 
		label: "Likes", 
		data: d1
	}, {
		label: "Tweets",
		data: d2
	}, {
		label: "Shares",
		data: d3
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
			stack: true,
			lines: {
				show: true, 
				fill: 0.1,
				lineWidth: 3
			},
			points: {
				show: true,
				radius: 4,
				fill: true,
				fillColor: "#ffffff",
				lineWidth: 3
			}
		},
		grid:{
			hoverable: true,
			clickable: false,
			borderWidth: 1,
			tickColor: '#E2E6EA',
			borderColor: '#E2E6EA',
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
		colors: ['#bad0b7', '#f06d72', '#18a5af', '#67b3b4', '#3e7ba8', '#2a8ea6', '#94bfb6', '#444f7c', '#6bc298'],
	};

	var holder = $('#stacked-area-chart');

	if (holder.length) {
		$.plot(holder, data, chartOptions );
	}
});