// Morris Bar Colors
Morris.Bar({
	element: 'barColors',
	data: [
		{x: '2015 Q1', y: 0},
		{x: '2015 Q2', y: 1},
		{x: '2015 Q3', y: 2},
		{x: '2015 Q4', y: 3},
		{x: '2016 Q1', y: 4},
		{x: '2016 Q2', y: 5},
		{x: '2016 Q3', y: 6},
		{x: '2016 Q4', y: 7},
		{x: '2017 Q1', y: 8}
	],
	xkey: 'x',
	ykeys: ['y'],
	labels: ['Y'],
	resize: true,
	hideHover: "auto",
	barColors:['#3e7ba8', '#2a8ea6', '#19a6b0', '#68b4b4', '#95c0b7', '#bad0b7'],
});