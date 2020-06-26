$(function () {

	var d1, data, chartOptions;

	d1 = [
		[1325376000000, 1200], [1328054400000, 700], [1330560000000, 1000], [1333238400000, 600],
		[1335830400000, 350]
	];

	data = [{
		label: 'Received',
		data: d1
	}];

	chartOptions = {
		xaxis: {
			min: (new Date(2011, 11, 15)).getTime(),
			max: (new Date(2012, 04, 18)).getTime(),
			mode: "time",
			tickSize: [2, "month"],
			monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			tickLength: 0
		},
		grid:{
			hoverable: true,
			clickable: false,
			borderWidth: 1,
			tickColor: '#E2E6EA',
			borderColor: '#E2E6EA',
		},
		bars: {
			show: true,
			barWidth: 48*24*60*60*300,
			fill: true,
			lineWidth: 1,
			order: true,
			lineWidth: 0,
			fillColor: { colors: [ { opacity: 1 }, { opacity: 1 } ] }
		},
		shadowSize: 0,
		tooltip: true,
		tooltipOpts: {
			content: '%s: %y'
		},
		colors: ['#f06d72', '#6bc298', '#3e7ba8', '#2a8ea6', '#18a5af', '#67b3b4', '#94bfb6', '#bad0b7', '#444f7c'],
	}

	var holder = $('#vertical-chart');

	if (holder.length) {
		$.plot(holder, data, chartOptions );
	}

});