new Chartist.Pie('.booking-source-donut', {
  series: [985, 670, 540, 435]
}, {
	donut: true,
	donutWidth: 20,
	donutSolid: true,
	startAngle: 270,
	showLabel: false,
	height: "210px",
	plugins: [
		Chartist.plugins.tooltip()
	],
	low: 0
});