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
					width: 0
				}
			}
		},
		shadowSize: 0,
		legend: {
			position: 'se'
		},
		
		tooltip: true,

		tooltipOpts: {
			content: '%s: %y'
		},
		
		grid:{
			hoverable: true,
			clickable: false,
			borderWidth: 3,
			tickColor: '#f5f6fa',
			borderColor: '#f5f6fa',
		},
		shadowSize: 0,
		colors: ['#a98753', '#cbac7b', '#bd9c67', '#dabe91', '#e6cea8', '#ff5661'],
	};

	var holder = $('#rectangular-pie');

	if (holder.length) {
		$.plot(holder, data, chartOptions );
	}
		
});