// Morris Bar Chart
Morris.Bar({
	element: 'morrisBarChart',
	data: [
		{x: '2016 Q1', y: 2, z: 4, a: 2},
		{x: '2016 Q2', y: 5, z: 3, a: 1},
		{x: '2016 Q3', y: 2, z: 7, a: 4},
		{x: '2016 Q4', y: 5, z: 6, a: 3}
	],
	xkey: 'x',
	ykeys: ['y', 'z', 'a'],
	labels: ['Y', 'Z', 'A'],
	resize: true,
	hideHover: "auto",
	barColors:['#3e7ba8', '#2a8ea6', '#19a6b0', '#68b4b4', '#95c0b7', '#bad0b7'],
});