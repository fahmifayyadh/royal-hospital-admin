$(function () {

	var ds=[], data, chartOptions;

	ds.push ([[2100, 1],[3300, 2],[3900, 3],[4500, 4], [5200, 5], [3100, 6]]);
	ds.push ([[1500, 1],[2200, 2],[2900, 3],[2300, 4], [3800, 5], [1600, 6]]);
	ds.push ([[600, 1],[1300, 2],[1900, 3],[3500, 4], [2700, 5], [3200, 6]]);

	data = [ {
		label: 'News',
		data: ds[1]
	}, {
		label: 'Sports',
		data: ds[0]
	}, {
		label: 'Movies',
		data: ds[2]
	}];

	chartOptions = {
		xaxis: {
				
		},
		grid:{
			hoverable: true,
			clickable: false,
			borderWidth: 1,
			tickColor: '#d2dbdd',
			borderColor: '#d2dbdd',
		},
		series: {
			stack: true
		},
		legend: {
			position: 'se'
		},
		bars: {
			horizontal: true,
			show: true,
			barWidth: .50,
			fill: true,
			lineWidth: 0,
			fillColor: { colors: [ { opacity: 1 }, { opacity: 1 } ] }
		},
		shadowSize: 0,
		tooltip: true,

		tooltipOpts: {
			content: '%s: %x'
		},
		colors: ['#3e7ba8', '#2a8ea6', '#18a5af', '#67b3b4', '#94bfb6', '#bad0b7', '#f06d72', '#444f7c', '#6bc298'],
	}

	var holder = $('#stacked-horizontal-chart');
	if (holder.length) {
		$.plot(holder, data, chartOptions );
	}

});