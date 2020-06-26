// Morris Days
var day_data = [
		{"period": "2016-10-01", "licensed": 3213, "Ubold": 887},
		{"period": "2016-09-30", "licensed": 3321, "Ubold": 776},
		{"period": "2016-09-29", "licensed": 3671, "Ubold": 884},
		{"period": "2016-09-20", "licensed": 3176, "Ubold": 448},
		{"period": "2016-09-19", "licensed": 3376, "Ubold": 565},
		{"period": "2016-09-18", "licensed": 3976, "Ubold": 627},
		{"period": "2016-09-17", "licensed": 2239, "Ubold": 660},
		{"period": "2016-09-16", "licensed": 3871, "Ubold": 676},
		{"period": "2016-09-15", "licensed": 3659, "Ubold": 656},
		{"period": "2016-09-10", "licensed": 3380, "Ubold": 663}
];
Morris.Line({
		element: 'dayData',
		data: day_data,
		xkey: 'period',
		ykeys: ['licensed', 'Ubold'],
		labels: ['Licensed', 'Ubold'],
		resize: true,
		hideHover: "auto",
		pointFillColors:['#ffffff'],
		pointStrokeColors: ['black'],
		lineColors:['#3e7ba8', '#2a8ea6', '#19a6b0', '#68b4b4', '#95c0b7', '#bad0b7'],
});