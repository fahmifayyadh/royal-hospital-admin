// Morris Days
var day_data = [
	{"period": "2016-10-01", "licensed": 3213, "Apex": 887},
	{"period": "2016-09-30", "licensed": 3321, "Apex": 776},
	{"period": "2016-09-29", "licensed": 3671, "Apex": 884},
	{"period": "2016-09-20", "licensed": 3176, "Apex": 448},
	{"period": "2016-09-19", "licensed": 3376, "Apex": 565},
	{"period": "2016-09-18", "licensed": 3976, "Apex": 627},
	{"period": "2016-09-17", "licensed": 2239, "Apex": 660},
	{"period": "2016-09-16", "licensed": 3871, "Apex": 676},
	{"period": "2016-09-15", "licensed": 3659, "Apex": 656},
	{"period": "2016-09-10", "licensed": 3380, "Apex": 663}
];
Morris.Line({
	element: 'dayData',
	data: day_data,
	xkey: 'period',
	ykeys: ['licensed', 'Apex'],
	labels: ['Licensed', 'Apex'],
	resize: true,
	hideHover: "auto",
	gridLineColor: "#e4e6f2",
	pointFillColors:['#ffffff'],
	pointStrokeColors: ['#ff5661'],
	lineColors:['#4266b2', '#e5e8f2', '#ff5661'],
});