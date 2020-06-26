
function updateTheme(color) {
	var hexColor = "transparent";
	if(color) {
		hexColor = color.toHexString();
	}
	$(".bg-danger").css('background-color', hexColor);
	$(".text-danger").css('color', hexColor);
	$(".ul#left-nav li .info-label").css('background', hexColor);
	$(".top-bar ul.stats li h4").css('color', hexColor);
	$("aside#sidebar #menu > ul > li.highlight a").css('color', hexColor);
	$(".fc-event").css('background', hexColor);
	$("aside#sidebar #menu > ul > li.highlight i").css('color', hexColor);
	$('#downloads_graph').sparkline([3,4,5,6,3,4,3,4,5,3,3,2,1,1,1,1,1,1], {
    height: '24',
    type: 'bar',
    barSpacing: 3,
    barWidth: 6,
    barColor: hexColor,
    tooltipPrefix: 'Users: '
  });
  $(function(){
		// Donut 1
		$(function () {
			var data, chartOptions;
			data = [
				{ label: "", data: Math.floor (Math.random() * 100 + 130) }, 
				{ label: "", data: Math.floor (Math.random() * 100 + 50) }, 
			];
			chartOptions = {
				series: {
					pie: {
						show: true,  
						innerRadius: .75,
						stroke: {
							width: 0,
						}
					}
				}, 
				shadowSize: 0,
				legend: {
					position: 'sw'
				},
				tooltip: true,
				tooltipOpts: {
					content: '%y'
				},
				grid:{
					hoverable: true,
					clickable: false,
					borderWidth: 0,
				},
				shadowSize: 0,
				colors: [hexColor, $black],
			};
			var holder = $('#donut-chart-1');
			if (holder.length) {
				$.plot(holder, data, chartOptions );
			} 
		});

		//Donut 2
		$(function () {
			var data, chartOptions;
			data = [
				{ label: "", data: Math.floor (Math.random() * 100 + 30) }, 
				{ label: "", data: Math.floor (Math.random() * 100 + 320) }, 
			];
			chartOptions = {        
				series: {
					pie: {
						show: true,  
						innerRadius: .75,
						stroke: {
							width: 0,
						}
					}
				}, 
				shadowSize: 0,
				legend: {
					position: 'sw'
				},
				tooltip: true,
				tooltipOpts: {
					content: '%y'
				},
				grid:{
					hoverable: true,
					clickable: false,
					borderWidth: 0,
				},
				shadowSize: 0,
				colors: [hexColor, $black],
			};
			var holder = $('#donut-chart-2');
			if (holder.length) {
				$.plot(holder, data, chartOptions );
			} 
		});

		// Donut 3
		$(function () {
			var data, chartOptions;
			data = [
				{ label: "", data: Math.floor (Math.random() * 100 + 80) }, 
				{ label: "", data: Math.floor (Math.random() * 100 + 60) }, 
			];
			chartOptions = {
				series: {
					pie: {
						show: true,  
						innerRadius: .75,
						stroke: {
							width: 0,
						}
					}
				}, 
				shadowSize: 0,
				legend: {
					position: 'sw'
				},
				tooltip: true,
				tooltipOpts: {
					content: '%y'
				},
				grid:{
					hoverable: true,
					clickable: false,
					borderWidth: 0,
				},
				shadowSize: 0,
				colors: [hexColor, $black],
			};
			var holder = $('#donut-chart-3');
			if (holder.length) {
				$.plot(holder, data, chartOptions );
			} 
		});

		//Donut 4
		$(function () {
			var data, chartOptions;
			data = [
				{ label: "", data: Math.floor (Math.random() * 100 + 230) }, 
				{ label: "", data: Math.floor (Math.random() * 100 + 100) }, 
			];
			chartOptions = {        
				series: {
					pie: {
						show: true,  
						innerRadius: .75,
						stroke: {
							width: 0,
						}
					}
				}, 
				shadowSize: 0,
				legend: {
					position: 'sw'
				},
				tooltip: true,
				tooltipOpts: {
					content: '%y'
				},
				grid:{
					hoverable: true,
					clickable: false,
					borderWidth: 0,
				},
				shadowSize: 0,
				colors: [hexColor, $black],
			};
			var holder = $('#donut-chart-4');
			if (holder.length) {
				$.plot(holder, data, chartOptions );
			} 
		});

		// Donut Large
		$(function () {
			var data, chartOptions;
			data = [
				{ label: "", data: Math.floor (Math.random() * 100 + 340) }, 
				{ label: "", data: Math.floor (Math.random() * 100 + 160) }, 
			];
			chartOptions = {        
				series: {
					pie: {
						show: true,  
						innerRadius: .6, 
						stroke: {
							width: 0,
						}
					}
				}, 
				shadowSize: 0,
				legend: {
					position: 'sw'
				},
				tooltip: true,
				tooltipOpts: {
					content: '%s: %y'
				},
				grid:{
		      hoverable: false,
		      clickable: false,
		      borderWidth: 0,
		    },
		    shadowSize: 0,
				colors: [hexColor, $default_black],
			};
			var holder = $('#donut-chart');
			if (holder.length) {
				$.plot(holder, data, chartOptions );
			}
		});
	});
	$(".side-comment .marker").css('background', hexColor);
	$(".side-comment .marker:after").css('border-color', hexColor);
	$(function () {
		var d1, d2, data, chartOptions;
		var d1 = [[1262304000000, 5], [1264982400000, 200], [1267401600000, 1605], [1270080000000, 6129], [1272672000000, 11643], [1275350400000, 19055], [1277942400000, 30062], [1280620800000, 39197], [1283299200000, 37000], [1285891200000, 27000], [1288569600000, 21000], [1291161600000, 17000]];
		var d2 = [[1262304000000, 2], [1264982400000, 120], [1267401600000, 605], [1270080000000, 3129], [1272672000000, 4643], [1275350400000, 7055], [1277942400000, 10062], [1280620800000, 12197], [1283299200000, 9000], [1285891200000, 6000], [1288569600000, 4300], [1291161600000, 1000]];
		data = [{ 
			label: "Facebook", 
			data: d1
		}, {
			label: "LinkedIn",
			data: d2
		}];
		chartOptions = {
			xaxis: {
				min: (new Date(2009, 11)).getTime(),
				max: (new Date(2010, 11)).getTime(),
				mode: "time",
				tickSize: [1, "month"],
				monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				tickLength: 0
			},
			series: {
				lines: {
					show: true, 
					fill: false,
					lineWidth: 1,
				},
				points: {
					show: true,
					radius: 4,
					fill: true,
					fillColor: "#ffffff",
					lineWidth: 2
				}
			},
			 grid:{
        hoverable: true,
        clickable: true,
        borderWidth: 1,
        tickColor: $border_color,
      	borderColor: $grid_color,
      },
      shadowSize: 0,
			legend: {
				show: true,
				position: 'nw'
			},
			tooltip: true,
			tooltipOpts: {
				content: '%s: %y'
			},
			colors: [hexColor, $default_black, $info, $success, $warning],
		};
		var holder = $('#line-chart');
		if (holder.length) {
			$.plot(holder, data, chartOptions );
		}
	});
	$(".callout-danger h4").css('color', hexColor);
	$(".callout-danger").css('border-color', hexColor);
	$(".todo .todo-list-cb:checked ~ .todo-list-mark").css('border-color', hexColor);
	$("#scrollbar .thumb, #scrollbar-one .thumb").css('background-color', hexColor);
	$(".top-bar ul.stats li h4 i.down").css('color', hexColor);
	$(".btn-danger").css('background-color', 'hexColor');
}

$(function() {

$("#colPic").spectrum({
	allowEmpty:true,
	color: "#eb4343",
	showInput: true,
	containerClassName: "full-spectrum",
	showInitial: true,
	showPalette: true,
	showSelectionPalette: true,
	showAlpha: true,
	maxPaletteSize: 10,
	preferredFormat: "hex",
	localStorageKey: "spectrum.demo",
	move: function (color) {
		updateTheme(color);
	},
	show: function () {

	},
	beforeShow: function () {

	},
	hide: function (color) {
		updateTheme(color);
	},

	palette: [
		["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)", "rgb(153, 153, 153)","rgb(183, 183, 183)"],
		["rgb(11, 83, 148)","rgb(106, 168, 79)","rgb(235, 67, 67)","rgb(147, 196, 125)","rgb(142, 124, 195)","rgb(74, 134, 232)","rgb(255, 153, 0)","rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(182, 215, 168)", "rgb(230, 184, 175)", "rgb(162, 196, 201)", "rgb(180, 167, 214)","rgb(159, 197, 232)", "rgb(213, 166, 189)",
		"rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(194, 123, 160)",
		"rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)",
		"rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
		"rgb(133, 32, 12)", "rgb(153, 0, 0)", "rgb(180, 95, 6)", "rgb(191, 144, 0)", "rgb(56, 118, 29)",
		"rgb(19, 79, 92)", "rgb(17, 85, 204)", "rgb(53, 28, 117)", "rgb(116, 27, 71)",
		"rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)",
		"rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)"]
	]
});

// $("#hideButtons").spectrum({
// 	showButtons: false,
// 	change: updateBorders
// });


// var isDisabled = true;
// $("#toggle-disabled").click(function() {
// 		if (isDisabled) {
// 				$("#disabled").spectrum("enable");
// 		}
// 		else {
// 				$("#disabled").spectrum("disable");
// 		}
// 		isDisabled = !isDisabled;
// 		return false;
// });

// $("input:disabled").spectrum({

// });
// $("#disabled").spectrum({
// 		disabled: true
// });

// $("#pick1").spectrum({
// 		flat: true,
// 		change: function(color) {
// 				var hsv = color.toHsv();
// 				var rgb = color.toRgbString();
// 				var hex = color.toHexString();
// 				//console.log("callback",color.toHslString(), color.toHsl().h, color.toHsl().s, color.toHsl().l)
// 				$("#docs-content").css({
// 						'background-color': color.toRgbString()
// 				}).toggleClass("dark", hsv.v < .5);
// 				$("#switch-current-rgb").text(rgb);
// 				$("#switch-current-hex").text(hex);
// 		},
// 		show: function() {

// 		},
// 		hide: function() {

// 		},
// 		showInput: true,
// 		showPalette: true,
// 		palette: ['white', '#306', '#c5c88d', '#ac5c5c', '#344660']
// });

// $("#collapsed").spectrum({
// 		color: "#dd3333",
// 		change: updateBorders,
// 		show: function() {

// 		},
// 		hide: function() {

// 		}
// });

// $("#flat").spectrum({
// 		flat: true,
// 		showInput: true,
// 		move: updateBorders
// });

// $("#flatClearable").spectrum({
// 		flat: true,
// 		move: updateBorders,
// 		change: updateBorders,
// 		allowEmpty:true,
// 		showInput: true
// });

// $("#showInput").spectrum({
// 		color: "#dd33dd",
// 		showInput: true,
// 		change: updateBorders,
// 		show: function() {

// 		},
// 		hide: function() {

// 		}
// });

// $("#showAlpha").spectrum({
// 		color: "rgba(255, 128, 0, .5)",
// 		showAlpha: true,
// 		change: updateBorders
// });

// $("#showAlphaWithInput").spectrum({
// 		color: "rgba(255, 128, 0, .5)",
// 		showAlpha: true,
// 		showInput: true,
// 		showPalette: true,
// 		palette: [
// 				["rgba(255, 128, 0, .9)", "rgba(255, 128, 0, .5)"],
// 				["red", "green", "blue"],
// 				["hsla(25, 50, 75, .5)", "rgba(100, .5, .5, .8)"]
// 		],
// 		change: updateBorders
// });

// $("#showAlphaWithInputAndEmpty").spectrum({
// 		color: "rgba(255, 128, 0, .5)",
// 		allowEmpty:true,
// 		showAlpha: true,
// 		showInput: true,
// 		showPalette: true,
// 		palette: [
// 				["rgba(255, 128, 0, .9)", "rgba(255, 128, 0, .5)"],
// 				["red", "green", "blue"],
// 				["hsla(25, 50, 75, .5)", "rgba(100, .5, .5, .8)"]
// 		],
// 		change: updateBorders
// });

// $("#showInputWithClear").spectrum({
// 		allowEmpty:true,
// 		color: "",
// 		showInput: true,
// 		change: updateBorders,
// 		show: function() {

// 		},
// 		hide: function() {

// 		}
// });

// $("#openWithLink").spectrum({
// 		color: "#dd3333",
// 		change: updateBorders,
// 		show: function() {

// 		},
// 		hide: function() {

// 		}
// });

// $("#className").spectrum({
// 		className: 'awesome'
// });

// $("#replacerClassName").spectrum({
// 		replacerClassName: 'awesome'
// });

// $("#containerClassName").spectrum({
// 		containerClassName: 'awesome'
// });

// $("#showPalette").spectrum({
// 		showPalette: true,
// 		palette: [
// 				['black', 'white', 'blanchedalmond'],
// 				['rgb(255, 128, 0);', 'hsv 100 70 50', 'lightyellow']
// 		],
// 		change: updateBorders
// });

// var textPalette = ["rgb(255, 255, 255)", "rgb(204, 204, 204)", "rgb(192, 192, 192)", "rgb(153, 153, 153)", "rgb(102, 102, 102)", "rgb(51, 51, 51)", "rgb(0, 0, 0)", "rgb(255, 204, 204)", "rgb(255, 102, 102)", "rgb(255, 0, 0)", "rgb(204, 0, 0)", "rgb(153, 0, 0)", "rgb(102, 0, 0)", "rgb(51, 0, 0)", "rgb(255, 204, 153)", "rgb(255, 153, 102)", "rgb(255, 153, 0)", "rgb(255, 102, 0)", "rgb(204, 102, 0)", "rgb(153, 51, 0)", "rgb(102, 51, 0)", "rgb(255, 255, 153)", "rgb(255, 255, 102)", "rgb(255, 204, 102)", "rgb(255, 204, 51)", "rgb(204, 153, 51)", "rgb(153, 102, 51)", "rgb(102, 51, 51)", "rgb(255, 255, 204)", "rgb(255, 255, 51)", "rgb(255, 255, 0)", "rgb(255, 204, 0)", "rgb(153, 153, 0)", "rgb(102, 102, 0)", "rgb(51, 51, 0)", "rgb(153, 255, 153)", "rgb(102, 255, 153)", "rgb(51, 255, 51)", "rgb(51, 204, 0)", "rgb(0, 153, 0)", "rgb(0, 102, 0)", "rgb(0, 51, 0)", "rgb(153, 255, 255)", "rgb(51, 255, 255)", "rgb(102, 204, 204)", "rgb(0, 204, 204)", "rgb(51, 153, 153)", "rgb(51, 102, 102)", "rgb(0, 51, 51)", "rgb(204, 255, 255)", "rgb(102, 255, 255)", "rgb(51, 204, 255)", "rgb(51, 102, 255)", "rgb(51, 51, 255)", "rgb(0, 0, 153)", "rgb(0, 0, 102)", "rgb(204, 204, 255)", "rgb(153, 153, 255)", "rgb(102, 102, 204)", "rgb(102, 51, 255)", "rgb(102, 0, 204)", "rgb(51, 51, 153)", "rgb(51, 0, 153)", "rgb(255, 204, 255)", "rgb(255, 153, 255)", "rgb(204, 102, 204)", "rgb(204, 51, 204)", "rgb(153, 51, 153)", "rgb(102, 51, 102)", "rgb(51, 0, 51)"];

// $("#showPaletteOnly").spectrum({
// 		color: 'blanchedalmond',
// 		showPaletteOnly: true,
// 		showPalette:true,
// 		palette: [
// 				['black', 'white', 'blanchedalmond',
// 				'rgb(255, 128, 0);', 'hsv 100 70 50'],
// 				['red', 'yellow', 'green', 'blue', 'violet']
// 		]
// });

// $("#hideAfterPaletteSelect").spectrum({
// 		showPaletteOnly: true,
// 		showPalette:true,
// 		hideAfterPaletteSelect:true,
// 		color: 'blanchedalmond',
// 		palette: [
// 				['black', 'white', 'blanchedalmond',
// 				'rgb(255, 128, 0);', 'hsv 100 70 50'],
// 				['red', 'yellow', 'green', 'blue', 'violet']
// 		]
// });

// $("#togglePaletteOnly").spectrum({
// 		color: 'blanchedalmond',
// 		showPaletteOnly: true,
// 		togglePaletteOnly: true,
// 		showPalette:true,
// 		palette: [
// 				["#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff"],
// 				["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f"],
// 				["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc"],
// 				["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd"],
// 				["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0"],
// 				["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79"],
// 				["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47"],
// 				["#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"]
// 		]
// });

// $("#clickoutFiresChange").spectrum({
// 		clickoutFiresChange: true,
// 		change: updateBorders
// });

// $("#clickoutDoesntFireChange").spectrum({
// 		change: updateBorders
// });

// $("#showInitial").spectrum({
// 		showInitial: true
// });

// $("#showInputAndInitial").spectrum({
// 		showInitial: true,
// 		showInput: true
// });

// $("#showInputInitialClear").spectrum({
// 		allowEmpty:true,
// 		showInitial: true,
// 		showInput: true
// });

// $("#changeOnMove").spectrum({
// 		move: function(c) {
// 				var label = $("#changeOnMoveLabel");
// 				label.text("Move called: " + c.toHexString());
// 		}
// });
// $("#changeOnMoveNo").spectrum({
// 		showInput: true,
// 		change: function(c) {
// 				var label = $("#changeOnMoveNoLabel");
// 				label.text("Change called: " + c.toHexString());
// 		}
// });

// function prettyTime() {
// 		var date = new Date();

// 		return date.toLocaleTimeString();
// }

// $("#eventshow").spectrum({
// 		show: function(c) {
// 				var label = $("#eventshowLabel");
// 				label.text("show called at " + prettyTime() + " (color is " + c.toHexString() + ")");
// 		}
// });

// $("#eventhide").spectrum({
// 		hide: function(c) {
// 				var label = $("#eventhideLabel");
// 				label.text("hide called at " + prettyTime() + " (color is " + c.toHexString() + ")");
// 		}
// });

// $("#eventdragstart").spectrum({
// 		showAlpha: true
// }).on("dragstart.spectrum", function(e, c) {
// 		var label = $("#eventdragstartLabel");
// 		label.text("dragstart called at " + prettyTime() + " (color is " + c.toHexString() + ")");
// });

// $("#eventdragstop").spectrum({
// 		showAlpha: true
// }).on("dragstop.spectrum", function(e, c) {
// 		var label = $("#eventdragstopLabel");
// 		label.text("dragstop called at " + prettyTime() + " (color is " + c.toHexString() + ")");
// });


// $(".basic").spectrum({ change: updateBorders });
// $(".override").spectrum({
// 		color: "yellow",
// 		change: updateBorders
// });

// $(".startEmpty").spectrum({
// 		allowEmpty:true,
// 		change: updateBorders});

// $("#beforeShow").spectrum({
// 		beforeShow: function() {
// 				return false;
// 		}
// });


// $("#custom").spectrum({
// 		color: "#f00"
// });

// $("#buttonText").spectrum({
// 		allowEmpty:true,
// 		chooseText: "Alright",
// 		cancelText: "No way"
// });


// $("#showSelectionPalette").spectrum({
// 		showPalette: true,
// 		showSelectionPalette: true, // true by default
// 		palette: [ ]
// });
// $("#showSelectionPaletteStorage").spectrum({
// 		showPalette: true,
// 		localStorageKey: "spectrum.homepage", // Any picker with the same string will share selection
// 		showSelectionPalette: true,
// 		palette: [ ]
// });
// $("#showSelectionPaletteStorage2").spectrum({
// 		showPalette: true,
// 		localStorageKey: "spectrum.homepage", // Any picker with the same string will share selection
// 		showSelectionPalette: true,
// 		palette: [ ]
// });


// $("#preferredHex").spectrum({
// 		preferredFormat: "hex",
// 		showInput: true,
// 		showPalette: true,
// 		palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]]
// });
// $("#preferredHex3").spectrum({
// 		preferredFormat: "hex3",
// 		showInput: true,
// 		showPalette: true,
// 		palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]]
// });
// $("#preferredHsl").spectrum({
// 		preferredFormat: "hsl",
// 		showInput: true,
// 		showPalette: true,
// 		palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]]
// });
// $("#preferredRgb").spectrum({
// 		preferredFormat: "rgb",
// 		showInput: true,
// 		showPalette: true,
// 		palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]]
// });
// $("#preferredName").spectrum({
// 		preferredFormat: "name",
// 		showInput: true,
// 		showPalette: true,
// 		palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]]
// });
// $("#preferredNone").spectrum({
// 		showInput: true,
// 		showPalette: true,
// 		palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]]
// });

// $("#triggerSet").spectrum({
// 		change: updateBorders
// });

// Show the original input to demonstrate the value changing when calling `set`
// $("#triggerSet").show();

// $("#btnEnterAColor").click(function() {
// 		$("#triggerSet").spectrum("set", $("#enterAColor").val());
// });

// $("#toggle").spectrum();
// $("#btn-toggle").click(function() {
// 		$("#toggle").spectrum("toggle");
// 		return false;
// });


// $('#toc').toc({
// 		'selectors': 'h2,h3', //elements to use as headings
// 		'container': '#docs', //element to find all selectors in
// 		'smoothScrolling': true, //enable or disable smooth scrolling on click
// 		'prefix': 'toc', //prefix for anchor tags and class names
// 		'highlightOnScroll': true, //add class to heading that is currently in focus
// 		'highlightOffset': 100, //offset to trigger the next headline
// 		'anchorName': function(i, heading, prefix) { //custom function for anchor name
// 				return heading.id || prefix+i;
// 		}
// });

// prettyPrint();


});
