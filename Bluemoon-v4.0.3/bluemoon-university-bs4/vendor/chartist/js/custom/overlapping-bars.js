new Chartist.Bar('.barOverlapping', {
	labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	series: [
		[
			{meta: 'Teachers', value: 5},
			{meta: 'Teachers', value: 4},
			{meta: 'Teachers', value: 3},
			{meta: 'Teachers', value: 7},
			{meta: 'Teachers', value: 5},
			{meta: 'Teachers', value: 8},
			{meta: 'Teachers', value: 3},
			{meta: 'Teachers', value: 4},
			{meta: 'Teachers', value: 8},
			{meta: 'Teachers', value: 3},
			{meta: 'Teachers', value: 6},
			{meta: 'Teachers', value: 7},
		],
		[
			{meta: 'Studients', value: 3},
			{meta: 'Studients', value: 2},
			{meta: 'Studients', value: 9},
			{meta: 'Studients', value: 5},
			{meta: 'Studients', value: 6},
			{meta: 'Studients', value: 4},
			{meta: 'Studients', value: 5},
			{meta: 'Studients', value: 7},
			{meta: 'Studients', value: 4},
			{meta: 'Studients', value: 5},
			{meta: 'Studients', value: 2},
			{meta: 'Studients', value: 4},
		],
	],
}, {
	seriesBarDistance: 10,
	height: "230px",
	chartPadding: {
		right: 0,
		left: 10,
		top: 0,
		bottom: 0,
	},
	axisY: {
		offset: 30
	},
	plugins: [
		Chartist.plugins.tooltip()
	],
});