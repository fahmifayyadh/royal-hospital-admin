var $border_color = "#efefef";
var $grid_color = "#ddd";
var $default_black = "#4d4d4d";
var $black = "#666666";

var $primary = "#6a55c2";
var $info = "#53ACDF";
var $danger = "#eb4343";
var $warning = "#ffb61c";
var $success = "#1e825e";
var $brown = "#926546";


// Random Chart
(function(){
	// Colour variables
	var red = "#bf616a",
		blue = "#5B90BF",
		orange = "#d08770",
		yellow = "#ebcb8b",
		green = "#a3be8c",
		teal = "#96b5b4",
		pale_blue = "#8fa1b3",
		purple = "#b48ead",
		brown = "#ab7967";

	var baseDataset = {
		fill: 'rgba(222,225,232,0.4)',
		stroke: 'rgba(222,225,232,1)',
		highlight: 'rgba(222,225,232,0.8)',
		highlightStroke: 'rgba(222,225,232,1)'
	},

	overlayDataset = {
		fill: 'rgba(91,124,191,0.4)',
		stroke: 'rgba(91,124,191,1)',
		highlight: 'rgba(91,124,191,0.8)',
		highlightStroke: 'rgba(91,124,191,1)'
	};

	var data = [],
	barsCount = 54,
	labels = new Array(barsCount),
	updateDelayMax = 3000,
	$id = function(id){
		return document.getElementById(id);
	},
	random = function(max){
		return Math.round(Math.random() * 100)
	},
	helpers = Chart.helpers;

	Chart.defaults.global.responsive = true;

	for (var i = barsCount - 1; i >= 0; i--) {
		data.push(Math.round(Math.random() * 100));
	};
	new Chart($id('animated-bar').getContext('2d')).Bar({
		labels : labels,
		datasets : [{
			fillColor : '#bbb',
			data : data
		}]
	},{
		showScale : false,
		barShowStroke : false,
		barValueSpacing: 1,
		showTooltips : false,
		onAnimationComplete : function(){
			// Get scope of the hero chart during updates
			var heroChart = this,
			timeout;
			// Stop this running every time the update is fired
			this.options.onAnimationComplete = randomUpdate;

			this.options.animationEasing = 'easeInOutExpo';

			randomUpdate();

			function randomUpdate(){
				heroChart.stop();
				clearTimeout(timeout);
				// Get a random bar
				timeout = setTimeout(function(){
					var randomNumberOfBars = Math.floor(Math.random() * barsCount),
						i;
					for (i = randomNumberOfBars - 1; i >= 0; i--) {
						heroChart.datasets[0].bars[Math.floor(Math.random() * barsCount)].value = Math.round(Math.random() * 100);
					};
					heroChart.update();
				},Math.random() * updateDelayMax);
			};
		}
	});
})();


// Comments
$(document).ready(function(){
	var SideComments = require('side-comments');
	window.sideComments = new SideComments('#commentable-container', currentUser, existingComments);
	window.sideComments.on('commentPosted', function( comment ) {
		comment.id = parseInt(Math.random() * (100000 - 1) + 1);
		sideComments.insertComment(comment);
	});
	window.sideComments.on('commentDeleted', function( comment ) {
		sideComments.removeComment(comment.sectionId, comment.id);
	});
});


// Flot Charts
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
			colors: [$danger, $black],
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
			colors: [$danger, $black],
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
			colors: [$danger, $black],
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
			colors: [$danger, $black],
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
			colors: [$danger, $default_black],
		};
		var holder = $('#donut-chart');
		if (holder.length) {
			$.plot(holder, data, chartOptions );
		}
	});

});

//Datepicker
$(function() {
	$("#datepicker" ).datepicker();
});

//Scrollbar
$('#scrollbar').tinyscrollbar();

// Live chat anchor tag animation
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});