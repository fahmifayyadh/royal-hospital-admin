$(function () {

	var d1, data, chartOptions;

	d1 = [[1700, 1],[3400, 2],[2300, 3],[4500, 4],[6300, 5]];

	data = [{
		label: 'Received',
		data: d1
	}];

	chartOptions = {
		xaxis: {
				
		},
		legend: {
			position: 'se'
		},
		grid:{
			hoverable: true,
			clickable: false,
			borderWidth: 1,
			tickColor: '#E2E6EA',
			borderColor: '#E2E6EA',
		},
		shadowSize: 0,
		bars: {
			horizontal: true,
			show: true,
			barWidth: 8*24*60*60*300,
			barWidth: .7,
			fill: true,
			lineWidth: 1,
			order: true,
			lineWidth: 0,
			fillColor: { colors: [ { opacity: 1 }, { opacity: 1 } ] }
		},
	
	tooltip: true,

	tooltipOpts: {
		content: '%s: %x'
	},
	colors: ['#1884e2', '#2a8ea6', '#18a5af', '#67b3b4', '#94bfb6', '#bad0b7', '#f06d72', '#444f7c', '#6bc298'],
	}

	var holder = $('#horizontal-chart');

	if (holder.length) {
			$.plot(holder, data, chartOptions );
	}

});