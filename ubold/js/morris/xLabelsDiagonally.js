// Displaying X Labels Diagonally (Bar Chart)
var day_data = [
	{"period": "2016-10-01", "licensed": 4, "Ubold": 2},
	{"period": "2016-09-30", "licensed": 5, "Ubold": 1},
	{"period": "2016-09-29", "licensed": 8, "Ubold": 4},
	{"period": "2016-09-20", "licensed": 2, "Ubold": 2},
	{"period": "2016-09-19", "licensed": 7, "Ubold": 6},
	{"period": "2016-09-18", "licensed": 4, "Ubold": 3},
	{"period": "2016-09-17", "licensed": 7, "Ubold": 7},
	{"period": "2016-09-16", "licensed": 8, "Ubold": 2},
	{"period": "2016-09-15", "licensed": 9, "Ubold": 3},
	{"period": "2016-09-10", "licensed": 2, "Ubold": 9}
];
Morris.Bar({
	element: 'xLabelsDiagonally',
	data: day_data,
	xkey: 'period',
	ykeys: ['licensed', 'Ubold'],
	labels: ['Licensed', 'Ubold'],
	xLabelAngle: 60,
	resize: true,
	hideHover: "auto",
	barColors:['#19a6b0', '#68b4b4', '#95c0b7', '#bad0b7'],
});