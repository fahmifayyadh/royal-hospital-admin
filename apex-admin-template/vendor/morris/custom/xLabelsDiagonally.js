// Displaying X Labels Diagonally (Bar Chart)
var day_data = [
	{"period": "2016-10-01", "licensed": 4, "Apex": 2},
	{"period": "2016-09-30", "licensed": 5, "Apex": 1},
	{"period": "2016-09-29", "licensed": 8, "Apex": 4},
	{"period": "2016-09-20", "licensed": 2, "Apex": 2},
	{"period": "2016-09-19", "licensed": 7, "Apex": 6},
	{"period": "2016-09-18", "licensed": 4, "Apex": 3},
	{"period": "2016-09-17", "licensed": 7, "Apex": 7},
	{"period": "2016-09-16", "licensed": 8, "Apex": 2},
	{"period": "2016-09-15", "licensed": 9, "Apex": 3},
	{"period": "2016-09-10", "licensed": 2, "Apex": 9}
];
Morris.Bar({
	element: 'xLabelsDiagonally',
	data: day_data,
	xkey: 'period',
	ykeys: ['licensed', 'Apex'],
	labels: ['Licensed', 'Apex'],
	xLabelAngle: 60,
	gridLineColor: "#e4e6f2",
	resize: true,
	hideHover: "auto",
	barColors:['#4266b2', '#e5e8f2', '#ff5661'],
});