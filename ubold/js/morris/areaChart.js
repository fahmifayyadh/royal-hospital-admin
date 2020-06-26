// Morris Area Chart
Morris.Area({
	element: 'areaChart',
	behaveLikeLine: false,
	data: [
		{x: '2015 Q1', a: 0, b: 0, c: 0},
		{x: '2015 Q2', a: 190, b: 0, c: 0},
		{x: '2015 Q3', a: 0, b: 0, c: 0},
		{x: '2015 Q4', a: 0, b: 250, c: 0},
		{x: '2016 Q1', a: 0, b: 35, c: 120},
		{x: '2016 Q2', a: 0, b: 216, c: 0},
		{x: '2016 Q3', a: 0, b: 0, c: 0},
		{x: '2016 Q4', a: 99, b: 0, c: 0},
		{x: '2017 Q1', a: 0, b: 0, c: 0},
		{x: '2017 Q2', a: 0, b: 0, c: 178},
		{x: '2017 Q3', a: 300, b: 200, c: 0},
		{x: '2017 Q4', a: 0, b: 0, c: 0},
	],
	xkey: 'x',
	ykeys: ['a', 'b', 'c'],
	labels: ['Sales', 'Expenses', 'Visits'],
	behaveLikeLine: !0,
	pointSize: 0,
	pointStrokeColors: ['#1dc1d6', '#1884e2', '#fa5561', '#68b4b4', '#95c0b7', '#bad0b7'],
	gridLineColor: "#ccd6e0",
	numLines: 7,
	gridtextSize: 10,
	fillOpacity: 1,
	lineWidth: 0,
	hideHover: "auto",
	resize: true,
	redraw: true,
	lineColors:['#1dc1d6', '#1884e2', '#fa5561', '#68b4b4', '#95c0b7', '#bad0b7'],
});