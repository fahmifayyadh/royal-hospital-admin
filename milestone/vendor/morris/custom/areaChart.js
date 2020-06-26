// Morris Area Chart
Morris.Area({
	element: 'areaChart',
	behaveLikeLine: false,
	data: [
		{x: '2007', a: 0, b: 0, c: 0},
		{x: '2008', a: 190, b: 0, c: 0},
		{x: '2009', a: 0, b: 0, c: 0},
		{x: '2010', a: 0, b: 250, c: 0},
		{x: '2011', a: 0, b: 35, c: 120},
		{x: '2012', a: 0, b: 216, c: 0},
		{x: '2013', a: 0, b: 0, c: 0},
		{x: '2014', a: 99, b: 0, c: 0},
		{x: '2015', a: 0, b: 0, c: 0},
		{x: '2016', a: 0, b: 0, c: 178},
		{x: '2017', a: 300, b: 200, c: 0},
		{x: '2018', a: 0, b: 0, c: 0},
	],
	xkey: 'x',
	ykeys: ['a', 'b', 'c'],
	labels: ['Sales', 'Expenses', 'Visits'],
	behaveLikeLine: !0,
	pointSize: 0,
	pointStrokeColors: ['#3888f3', '#79aef5', '#fc6d4c', '#e6ecf3', '#fc6d4c'],
	gridLineColor: "#ccd6e0",
	numLines: 7,
	gridtextSize: 10,
	fillOpacity: 1,
	lineWidth: 0,
	hideHover: "auto",
	resize: true,
	redraw: true,
	lineColors:['#3888f3', '#79aef5', '#fc6d4c', '#e6ecf3', '#fc6d4c'],
});

