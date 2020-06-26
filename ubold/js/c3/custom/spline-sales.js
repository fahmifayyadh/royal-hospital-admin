var chart2 = c3.generate({
	bindto: '#splineSales',
	padding: {
		top: -20,
		left: 0,
		right: 0,
		bottom: 0
	},
	data: {
		columns: [
			['data1', 20, 350, 20, 150, 20, 300, 20, 150, 20, 350, 20],
			['data2', 10, 150, 10, 250, 10, 150, 10, 250, 10, 150, 10],
		],
		types: {
			data1: 'area-spline',
			data2: 'area-spline'
		},
		names: {
			data1: 'Projects',
			data2: 'Projects',
		},
		colors: {
			data1: '#fa5555',
			data2: '#25a0e2',
		},
	},
	legend: {
		show: false,
	},
	axis: {
		x: {
			show: false,
		},
		y: {
			show: false,
		}
	}
});