// Morris Area Chart

Morris.Area({
	element: 'areaChart',
	data: [
		{ y: '2006', a: 100, b: 30 },
		{ y: '2007', a: 75,  b: 40 },
		{ y: '2008', a: 50,  b: 10 },
		{ y: '2009', a: 75,  b: 25 },
		{ y: '2010', a: 50,  b: 20 },
		{ y: '2011', a: 75,  b: 30 },
		{ y: '2012', a: 100, b: 50 }
	],
	xkey: 'y',
	ykeys: ['a', 'b'],
	behaveLikeLine: !0,
	pointSize: 0,
	labels: ['Sales', 'Expenses'],
	pointStrokeColors: ['#5c36b1', '#ff4081', '#2acc98', '#bda6f3'],
	gridLineColor: "#e4e6f2",
	lineColors: ['#5c36b1', '#ff4081', '#2acc98', '#bda6f3'],
	gridtextSize: 10,
	fillOpacity: 1,
	lineWidth: 0,
	hideHover: "auto",
	resize: true,
	redraw: true,
});

