$(function() {

		// We use an inline data source in the example, usually data would
		// be fetched from a server

		var data = [],
			totalPoints = 300;

		function getRandomData() {

			if (data.length > 0)
				data = data.slice(1);

			// Do a random walk

			while (data.length < totalPoints) {

				var prev = data.length > 0 ? data[data.length - 1] : 50,
					y = prev + Math.random() * 10 - 5;

				if (y < 0) {
					y = 0;
				} else if (y > 100) {
					y = 100;
				}

				data.push(y);
			}

			// Zip the generated y values with the x values

			var res = [];
			for (var i = 0; i < data.length; ++i) {
				res.push([i, data[i]])
			}

			return res;
		}

		// Set up the control widget

		var updateInterval = 30;
		$("#flot-placeholder").val(updateInterval).change(function () {
			var v = $(this).val();
			if (v && !isNaN(+v)) {
				updateInterval = +v;
				if (updateInterval < 1) {
					updateInterval = 1;
				} else if (updateInterval > 2000) {
					updateInterval = 2000;
				}
				$(this).val("" + updateInterval);
			}
		});

		var plot = $.plot("#flot-placeholder", [ getRandomData() ], {
			series: {
			lines: {
				show: true,
				lineWidth: 1,
				fill: true
			},
		},

		tooltip: true,
		tooltipOpts: {
			content: '%s: %y'
		},

		colors: ['#18a5af', '#67b3b4', '#3e7ba8', '#2a8ea6', '#94bfb6', '#bad0b7', '#f06d72', '#444f7c', '#6bc298'],

		grid: {
			hoverable: false,
			clickable: false,
			borderWidth: 0,
			tickColor: '#E2E6EA',
			borderColor: '#E2E6EA',
			verticalLines: true,
			horizontalLines: true,
		},
		shadowSize: 0,
		});

		function update() {

			plot.setData([getRandomData()]);

			// Since the axes don't change, we don't need to call plot.setupGrid()

			plot.draw();
			setTimeout(update, updateInterval);
		}

		update();

		// Add the Flot version string to the footer

		$("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
	});