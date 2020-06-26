Morris.Donut({
	element: 'donutFormatter',
	data: [
			{value: 155, label: 'voo', formatted: 'at least 70%' },
			{value: 12, label: 'bar', formatted: 'approx. 15%' },
			{value: 10, label: 'baz', formatted: 'approx. 10%' },
			{value: 5, label: 'A really really long label', formatted: 'at most 5%' }
	],
	resize: true,
	hideHover: "auto",
	formatter: function (x, data) { return data.formatted; },
	colors: ['#3e7ba8', '#2a8ea6', '#19a6b0', '#68b4b4', '#95c0b7', '#bad0b7'],
});