$(function(){
	var cityAreaData = [
		230.20,
		750.90,
		440.28,
		180.15,
		69.35,
		280.90,
		510.50,
		99.60,
		135.50
	]
	$('#us-map').vectorMap({
		map: 'us_aea_en',
		scaleColors: ['#47BCC7'],
		normalizeFunction: 'polynomial',
		focusOn:{
			x: 2,
			y: 0,
			scale: 1
		},
		zoomOnScroll: false,
		zoomMin: 1,
		hoverColor: true,
		regionStyle:{
			initial: {
				fill: '#47BCC7',
			},
			hover: {
				fill: '#ffc107',
			},
		},
		markerStyle: {
			initial: {
				fill: '#f0b518',
				stroke: '#FFFFFF',
				r: 6
			}
		},
		backgroundColor: '#ffffff',
		 markers :[
			{latLng: [37.30, -119.30], name: 'California, CA'},
		],
		series: {
			markers: [{
				attribute: 'r',
				scale: [4, 7],
				values: cityAreaData
			}]
		},
	});
});