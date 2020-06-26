// Pie Chart
$(function(){
	$('.pieOne').peity('pie', {
		fill: ["#3e7ba8", "#fa5555", "#19a6b0"],
		height: 30,
		radius: 10,
		radius: 8,
		width: 30
	});
	$('.pieTwo').peity('pie', {
		fill: ["#ab7967", "#ffc107", "#25a0e2"],
		height: 30,
		radius: 10,
		radius: 8,
		width: 30
	});
	$('.pieThree').peity('pie', {
		fill: ["#ecc45f", "#f5656c", "#5a66b5"],
		height: 30,
		radius: 10,
		radius: 8,
		width: 30
	});
});

// Donut Chart
$(function(){
	$('.donutOne').peity('donut', {
		fill: ["#3e7ba8", "#fa5555", "#19a6b0"],
		height: 30,
		innerRadius: 7,
		radius: 8,
		width: 30
	});
	$('.donutTwo').peity('donut', {
		fill: ["#ab7967", "#ffc107", "#25a0e2"],
		height: 30,
		innerRadius: 7,
		radius: 8,
		width: 30
	});
	$('.donutThree').peity('donut', {
		fill: ["#ecc45f", "#f5656c", "#5a66b5"],
		height: 30,
		innerRadius: 7,
		radius: 8,
		width: 30
	});
});

// Line Graph
$(function(){
	$(".lineOne").peity("line", {
		width: 120,
		height: 30,
		stroke: "#3e7ba8",
		strokeWidth: 2,
		fill: "#cde8fb",
	});
	$(".lineTwo").peity("line", {
		width: 120,
		height: 30,
		stroke: "#68b4b4",
		strokeWidth: 2,		
		fill: "#c3e0e0",
	});
	$(".lineThree").peity("line", {
		width: 120,
		height: 30,
		stroke: "#F782AA",
		strokeWidth: 2,
		fill: "#fdc5d6",
	});
})

// Bar Graph
$(function(){
	$(".barOne").peity("bar", {
		width: 120,
		height: 30,
		fill: ["#3e7ba8", "#2a8ea6", "#19a6b0"]
	});
	$(".barTwo").peity("bar", {
		width: 120,
		height: 30,
		fill: ["#68b4b4", "#ecc45f", "#47BCC7"]
	});
	$(".barThree").peity("bar", {
		width: 120,
		height: 30,
		fill: ["#F782AA", "#c76d8c", "#444f7c"]
	});
})

// Updating Charts
$(function(){
	var updatingChart = $(".updating-chart").peity("line", {
		width: 280,
		height: 55,
		stroke: "#fa5555",
		fill: false,
		strokeWidth: 5,
	})
	setInterval(function() {
		var random = Math.round(Math.random() * 5)
		var values = updatingChart.text().split(",")
		values.shift()
		values.push(random)
		updatingChart
		.text(values.join(","))
		.change()
	}, 500);
})
$(function() {
	var updatingChart = $(".updating-chart-two").peity("line", {
		width: 120,
		height: 30,
		stroke: "#3e7ba8",
		fill: false,
		strokeWidth: 3,
	});
	setInterval(function() {
		var random = Math.round(Math.random() * 10)
		var values = updatingChart.text().split(",")
		values.shift()
		values.push(random)

		updatingChart
		.text(values.join(","))
		.change()
	}, 1000)
})
$(function() {
	var updatingChart = $(".updating-chart-three").peity("line", {
		width: 120,
		height: 30,
		stroke: "#68b4b4",
		fill: false,
		strokeWidth: 3,
	});
	setInterval(function() {
		var random = Math.round(Math.random() * 10)
		var values = updatingChart.text().split(",")
		values.shift()
		values.push(random)

		updatingChart
		.text(values.join(","))
		.change()
	}, 1000)
})
$(function() {
	var updatingChart = $(".updating-chart-four").peity("line", {
		width: 120,
		height: 30,
		stroke: "#F782AA",
		fill: false,
		strokeWidth: 3,
	});
	setInterval(function() {
		var random = Math.round(Math.random() * 10)
		var values = updatingChart.text().split(",")
		values.shift()
		values.push(random)

		updatingChart
		.text(values.join(","))
		.change()
	}, 1000)
})
$(function() {
	var updatingChart = $(".updating-chart-five").peity("line", {
		width: 90,
		height: 24,
		stroke: "#c76d8c",
		fill: false,
		strokeWidth: 2,
	});
	setInterval(function() {
		var random = Math.round(Math.random() * 10)
		var values = updatingChart.text().split(",")
		values.shift()
		values.push(random)

		updatingChart
		.text(values.join(","))
		.change()
	}, 1000)
})
$(function() {
	var updatingChart = $(".updating-chart-six").peity("line", {
		width: 90,
		height: 24,
		stroke: "#55ACEE",
		fill: false,
		strokeWidth: 2,
	});
	setInterval(function() {
		var random = Math.round(Math.random() * 10)
		var values = updatingChart.text().split(",")
		values.shift()
		values.push(random)

		updatingChart
		.text(values.join(","))
		.change()
	}, 1000)
})
$(function() {
	var updatingChart = $(".updating-chart-seven").peity("line", {
		width: 90,
		height: 24,
		stroke: "#ffc107",
		fill: false,
		strokeWidth: 2,
	});
	setInterval(function() {
		var random = Math.round(Math.random() * 10)
		var values = updatingChart.text().split(",")
		values.shift()
		values.push(random)

		updatingChart
		.text(values.join(","))
		.change()
	}, 1000)
})
$(function() {
	var updatingChart = $(".updating-chart-eight").peity("line", {
		width: 150,
		height: 30,
		stroke: "#fa5858",
		fill: false,
		strokeWidth: 10,
	});
	setInterval(function() {
		var random = Math.round(Math.random() * 10)
		var values = updatingChart.text().split(",")
		values.shift()
		values.push(random)

		updatingChart
		.text(values.join(","))
		.change()
	}, 1000)
})
$(function() {
	var updatingChart = $(".updating-chart-nine").peity("line", {
		width: 150,
		height: 30,
		stroke: "#55ACEE",
		fill: false,
		strokeWidth: 10,
	});
	setInterval(function() {
		var random = Math.round(Math.random() * 10)
		var values = updatingChart.text().split(",")
		values.shift()
		values.push(random)

		updatingChart
		.text(values.join(","))
		.change()
	}, 1000)
})
$(function() {
	var updatingChart = $(".updating-chart-ten").peity("line", {
		width: 150,
		height: 30,
		stroke: "#ffc107",
		fill: false,
		strokeWidth: 10,
	});
	setInterval(function() {
		var random = Math.round(Math.random() * 10)
		var values = updatingChart.text().split(",")
		values.shift()
		values.push(random)

		updatingChart
		.text(values.join(","))
		.change()
	}, 1000)
})



// Gradient Bar Chart
$(function(){
	$(".gradientBarOne").peity("bar", {
		width: 120,
		height: 30,
		fill: function(_, i, all) {
			var g = parseInt((i / all.length) * 255)
			return "rgb(234, " + g + ", 100)"
		}
	})
	$(".gradientBarTwo").peity("bar", {
		width: 120,
		height: 30,
		fill: function(_, i, all) {
			var g = parseInt((i / all.length) * 255)
			return "rgb(99, " + g + ", 65)"
		}
	})
	$(".gradientBarThree").peity("bar", {
		width: 120,
		height: 30,
		fill: function(_, i, all) {
			var g = parseInt((i / all.length) * 255)
			return "rgb(185, " + g + ", 222)"
		}
	})
});

