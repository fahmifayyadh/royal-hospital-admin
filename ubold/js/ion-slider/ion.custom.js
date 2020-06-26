// Range Option 1
$(function () {
	$("#range-1").ionRangeSlider({
		hide_min_max: true,
		keyboard: true,
		min: 10,
		max: 500,
		from: 50,
		to: 440,
		type: 'double',
		step: 1,
		prefix: "$",
		grid: true
	});
});


// Range Option 2
$("#range-2").ionRangeSlider({
	grid: true,
	from: 4,
	values: [
		"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
	]
});


// Range Option 4
$("#range-3").ionRangeSlider({
	type: "double",
	min: 100,
	max: 200,
	from: 145,
	to: 155,
	prefix: "Weight: ",
	postfix: " million pounds",
	decorate_both: true
});
