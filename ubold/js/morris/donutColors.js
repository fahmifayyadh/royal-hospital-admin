// Morris Donut
Morris.Donut({
	element: 'donutColors',
	data: [
		{value: 70, label: 'foo'},
		{value: 15, label: 'bar'},
		{value: 10, label: 'baz'},
		{value: 5, label: 'A really really long label'}
	],
	backgroundColor: '#ffffff',
	labelColor: '#666666',
	colors: ['#2a8ea6', '#19a6b0', '#3e7ba8', '#68b4b4', '#95c0b7', '#bad0b7'],
	resize: true,
	hideHover: "auto",
	formatter: function (x) { return x + "%"}
});