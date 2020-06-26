new Chartist.Pie('.booking-source-donut', {
	labels: ['Boys', 'Girls'],
  series: [580, 790]
}, {
	donut: true,
	donutWidth: 20,
	donutSolid: true,
	startAngle: 0,
	showLabel: false,
	height: "210px",
	plugins: [
		Chartist.plugins.tooltip()
	],
	low: 0
});


