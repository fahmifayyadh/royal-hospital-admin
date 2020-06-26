// Morris Bar No Axis
Morris.Bar({
	element: 'barNoAxis',
	axes: false,
	data: [
		{x: '2016 Q1', y: 3, z: 2, a: 3},
		{x: '2016 Q2', y: 2, z: 1, a: 1},
		{x: '2016 Q3', y: 0, z: 2, a: 4},
		{x: '2016 Q4', y: 2, z: 4, a: 3}
	],
	xkey: 'x',
	ykeys: ['y', 'z', 'a'],
	labels: ['Y', 'Z', 'A'],
	resize: true,
	hideHover: "auto",
	barColors: ['#2a8ea6', '#19a6b0', '#68b4b4', '#95c0b7', '#bad0b7'],
});