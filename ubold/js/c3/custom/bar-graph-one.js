var chart6 = c3.generate({
	bindto: '#barGraphOne',
	padding: {
		top: 0,
		left: 25,
	},
	data: {
		columns: [
			['lead1', 32, 64, 62],
			['lead2', 56, 26, 54],
			['lead3', 24, 32, 88],
			['lead4', 15, 11, 7],
		],
		type: 'bar',
		names: {
			lead1: 'Open',
			lead2: 'Processed',
			lead3: 'Completed',
			lead4: 'Declined'
		},
		colors: {
			lead1: '#f5c732',
			lead2: '#009de4',
			lead3: '#8bc34a',
			lead4: '#ff6a5d'
		},
	},
	grid: {
		x: {
			show: true
		},
		y: {
			show: true
		}
	}
});