new Chartist.Bar('.stacked-bar', {
	labels: ['Q1', 'Q2', 'Q3', 'Q4'],
	series: [
		[2000000, 1200000, 800000, 1600000],
		[140000, 900000, 500000, 300000],
		[100000, 400000, 400000, 1200000]
	]
}, {
	stackBars: true,
	seriesBarDistance: 6,
	height: "212px",
	chartPadding: {
		left: 0,
		top: 0,
		bottom: 0,
	},
	axisX: {
		offset: 30
	}, 
	axisY: {
		showLabel: false,
		showGrid: false,
		offset: 20,
	},
	plugins: [
		Chartist.plugins.tooltip()
	], 
}).on('draw', function(data) {
	if(data.type === 'bar') {
		data.element.attr({
			style: 'stroke-width: 50px'
		});
	}
});
