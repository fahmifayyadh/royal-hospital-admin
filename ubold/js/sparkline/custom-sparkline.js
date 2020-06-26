// Line Graphs
$(function() {
	$("#lineOne").sparkline([8,12,32,17,49,169,119,121,98,155,129,137,140,145,147,155,29,73,32,82,119,121,143,165,190 ], {
		type: 'line',
		lineColor: '#2bb4e8',
		fillColor: '#fcfcfc',
		lineWidth: 5,
		width: 250,
		height: 70,
		spotColor: '#32AB52',
		minSpotColor: '#4286F7',
		spotRadius: 8,
	});
});

$(function() {
	$("#lineTwo").sparkline([8,12,32,17,49,29,73,32,82,129,137,140,145,147,155,119,121,143,165,168,169,119,121,98,198 ], {
		type: 'line',
		lineColor: '#FFFFFF',
		fillColor: '#66C0DC',
		lineWidth: 2,
		width: 180,
		height: 90,
		spotColor: '#32AB52',
		minSpotColor: '#4286F7',
		spotRadius: 4,
	});
});

$(function() {
	$("#lineThree").sparkline([8,12,29,37,54,33,85,66,82,119,121,143,165,168,169,119,121,98,155,129,137,140,145,147,185 ], {
		type: 'line',
		lineColor: '#32AB52',
		fillColor: '#fcfcfc',
		lineWidth: 2,
		width: 80,
		height: 30,
		spotColor: '#32AB52',
		minSpotColor: '#4286F7',
		spotRadius: 4,
	});
});

$(function(){
	$('#lineFour').sparkline([320,250,400,380,280,320,220,385,450], {
		type: 'line',
		lineWidth: 3,
		fillColor: false,
		lineColor: '#ecc45f',
		spotColor: '#50B432',
		minSpotColor: '#f7b53c',
		maxSpotColor: '#F782AA',
		highlightSpotColor: '#',
		height: 20,
		width: 60,
		spotRadius: 2,
	});
});

$(function(){
	$('#lineFive').sparkline([230,210,315,190,250,200,330,280,350], {
		type: 'line',
		lineWidth: 3,
		fillColor: false,
		lineColor: '#6bc298',
		spotColor: '#50B432',
		minSpotColor: '#f7b53c',
		maxSpotColor: '#F782AA',
		highlightSpotColor: '#',
		height: 20,
		width: 60,
		spotRadius: 2,
	});
});

$(function(){
	$('#lineSix').sparkline([120,210,270,350,240,315,160,270,350], {
		type: 'line',
		lineWidth: 3,
		fillColor: false,
		lineColor: '#F782AA',
		spotColor: '#50B432',
		minSpotColor: '#f7b53c',
		maxSpotColor: '#F782AA',
		highlightSpotColor: '#',
		height: 20,
		width: 60,
		spotRadius: 2,
	});
});

$(function(){
	$('#lineSeven').sparkline([210,300,220,385,543,235,331,419,300], {
		type: 'line',
		lineWidth: 3,
		fillColor: false,
		lineColor: '#ecc45f',
		spotColor: '#50B432',
		minSpotColor: '#f7b53c',
		maxSpotColor: '#F782AA',
		highlightSpotColor: '#',
		height: 20,
		width: 60,
		spotRadius: 2,
	});
});

$(function(){
	$('#lineEight').sparkline([215,267,376,207,265,390,271,200,275], {
		type: 'line',
		lineWidth: 3,
		fillColor: false,
		lineColor: '#6bc298',
		spotColor: '#50B432',
		minSpotColor: '#f7b53c',
		maxSpotColor: '#F782AA',
		highlightSpotColor: '#',
		height: 20,
		width: 60,
		spotRadius: 2,
	});
});

$(function(){
	$('#lineNine').sparkline([111,267,376,410,187,365,198,290,290], {
		type: 'line',
		lineWidth: 3,
		fillColor: false,
		lineColor: '#F782AA',
		spotColor: '#50B432',
		minSpotColor: '#f7b53c',
		maxSpotColor: '#F782AA',
		highlightSpotColor: '#',
		height: 20,
		width: 60,
		spotRadius: 2,
	});
});

$(function(){
	$('#lineTen').sparkline([8,18,25,38,65,47,65,98,69,82,65], {
		type: 'line',
		lineWidth: 4,
		fillColor: false,
		lineColor: '#6bc298',
		spotColor: '#ffc107',
		minSpotColor: '#f7b53c',
		maxSpotColor: '#ffc107',
		highlightSpotColor: '#',
		height: 120,
		width: 210,
		spotRadius: 5,
	});
});

$(function(){
	$('#lineEleven').sparkline([8,18,25,56,31,47,89,112,102,126,138], {
		type: 'line',
		lineWidth: 4,
		fillColor: false,
		lineColor: '#ecc45f',
		spotColor: '#ffc107',
		minSpotColor: '#f7b53c',
		maxSpotColor: '#ffc107',
		highlightSpotColor: '#',
		height: 120,
		width: 210,
		spotRadius: 5,
	});
});

$(function(){
	$('#lineTwelve').sparkline([8,18,25,38,31,88,65,72,69,82,96], {
		type: 'line',
		lineWidth: 4,
		fillColor: false,
		lineColor: '#25a0e2',
		spotColor: '#ffc107',
		minSpotColor: '#f7b53c',
		maxSpotColor: '#ffc107',
		highlightSpotColor: '#',
		height: 120,
		width: 210,
		spotRadius: 5,
	});
});


// Bar Graph
$(function() {
	$("#barOne").sparkline([2,5,3,5,7,7,8,5,8,6,12,15,18], {
		type: 'bar',
		barColor: '#0c618e',
		barWidth: 7,
		height: 24,
	});
});

$(function(){
	$('#barTwo').sparkline([3,4,1,2,7,6,5,4,9,12,18,14,19], {
		type: 'bar',
		barColor: '#25a0e2',
		barWidth: 7,
		height: 24,
	});
});

$(function() {
	$("#barThree").sparkline([3,2,4,3,5,4,3,5,4,4,7,9,12], {
		type: 'bar',
		barColor: '#56B76A',
		barWidth: 7,
		height: 24,
	});
});

$(function() {
	$("#barFour").sparkline([9,43,32,28,32,32,27,49,125,67,140,89,32,155,82,165,121,143,48,118,76,98,21 ], {
		type: 'bar',
		barColor: '#66C0DC',
		barWidth: 7,
		width: 210,
		height: 60,
	});
});

// Bar Graph
$(function() {
	$("#barFive").sparkline([5,6,7,8,9,10,13,16,13,12,10,9,10,12,16,18,16,14,12,10,8,5], {
		type: 'bar',
		barColor: '#ff7171',
		barWidth: 6,
		height: 30,
	});
});

$(function(){
	$('#barSix').sparkline([5,6,7,8,9,10,13,16,13,12,10,9,10,12,16,18,16,14,12,10,8,5], {
		type: 'bar',
		barColor: '#2bb4e8',
		barWidth: 6,
		height: 30,
	});
});

$(function() {
	$("#barSeven").sparkline([3,2,4,9,12,15,12,9,4,6], {
		type: 'bar',
		barColor: '#18a4af',
		barWidth: 7,
		width: 210,
		height: 36,
	});
});
$(function() {
	$("#barEight").sparkline([6,4,9,12,15,12,9,5,4,2], {
		type: 'bar',
		barColor: '#fa404b',
		barWidth: 7,
		width: 210,
		height: 36,
	});
});
$(function() {
	$("#barNine").sparkline([1,2,3,5,8,7,5,4,3,2], {
		type: 'bar',
		barColor: '#1d90ce',
		barWidth: 7,
		width: 210,
		height: 36,
	});
});
$(function() {
	$("#barTen").sparkline([2,4,5,6,7,8,5,4,2,1], {
		type: 'bar',
		barColor: '#59477d',
		barWidth: 7,
		width: 210,
		height: 36,
	});
});


// Bar and Line Graph
$(function() {
	$('#invoice').sparkline([2,2,3,4,5,6,7,11,10,6,12,4,8,14,11,3,7], {
		type: 'bar',
		barColor: '#E84234',
		barWidth: 7,
		barSpacing: 2,
		height: 30,
	});
	$('#invoice').sparkline([1,1,2,2,3,3,4,7,5,5,3,4,3,7,8,4,6,9,12,11], {
		composite: true,
		fillColor: false,
		type: 'line',
		lineColor: '#000000',
		lineWidth: 1,
		height: 30,
	});
});


// Bullet Graph
$(function() {
	$("#moneySpend").sparkline([58,68,78,88,58], {
		type: 'bullet',
		height: '16',
		targetColor: '#4286F7',
		performanceColor: '#ffd0c5',
		rangeColors: ['#E84234', '#CC8271','#FF9878'],
	});
});


// Bar Negative Graph
$(function() {
	$("#barNegativeGraph").sparkline([2,-1,3,-5,4,7,-3,4,2,-3,4,-1,4], {
		type: 'bar',
		height: '70',
		barWidth: 7,
		barSpacing: 2,
		barColor: '#4286F7',
		negBarColor: '#F9BB06'
	});
});


// Discrete Graph
$(function(){
	$("#discreteGraph").sparkline([4,6,7,7,4,3,2,1,4,4], {
		type: 'discrete',
		width: '120',
		height: '70',
		lineColor: '#4286F7'
	});
});

// Bullet Graph
$(function(){
	$("#bulletGraph").sparkline([10,12,12,9,7], {
		type: 'bullet',
		height: '20',
		width: '90',
		targetColor: '#E84234',
		performanceColor: '#625750',
		rangeColors: ['#96897f', '#c6bcb6','#e0e2e4']
	});
});

// Pie Graph
$(function(){
	$("#pieGraph").sparkline([1,1,2], {
		type: 'pie',
		width: '70',
		height: '70',
		sliceColors: ['#4286F7','#32AB52','#E84234']
	});
});

$(function(){
	$("#pieGraphTwo").sparkline([1,1,2], {
		type: 'pie',
		width: '36',
		height: '36',
		sliceColors: ['#3e7ba8','#68b4b4','#19a6b0']
	});
});
$(function(){
	$("#pieGraphThree").sparkline([1,1,2], {
		type: 'pie',
		width: '36',
		height: '36',
		sliceColors: ['#47bcc7','#fa5555','#ffc819']
	});
});

// Box Graph
$(function(){
	$("#boxGraph").sparkline([4,27,34,52,54,59,61,68,78,82,85,87,91,93,100], {
		type: 'box',
		width: '120 ',
		height: '60',
		boxLineColor: '#4286F7',
		boxFillColor: '#4286F7',
		whiskerColor: '#4286F7',
		outlierLineColor: '#4286F7',
		medianColor: '#fcfcfc',
		targetColor: '#32AB52'
	});
});

// Composite Bar
$(function(){
	$('#compositeBar').sparkline([4,5,6,7,8,9,10,11,10,9,8,7,6,5,4], {
		type: 'bar',
		barColor: '#32AB52',
		width: '120 ',
		height: '60',
		barSpacing: 5,
	});
	$('#compositeBar').sparkline([3,2,4,3,5,4,3,5,4,4,7,9,12,15,12], {
		composite: true,
		fillColor: false,
		lineColor: '#4286F7',
		width: '120 ',
		height: '60',
		lineWidth: 2,
		spotRadius: 5
	});
});


// Composite Line
$(function(){
	$('#compositeLine').sparkline([4,1,5,7,9,9,8,7,6,6,4,7,8,4,3,2,2,5,6,7], {
		type: 'line',
		lineColor: '#E84234',
		width: '120 ',
		height: '50',
		lineWidth: 2,
		spotRadius: 3,
		fillColor: false
	});
	$('#compositeLine').sparkline([8,4,0,0,0,0,1,4,4,10,10,10,10,0,0,0,4,6,5,9,10], {
		type: 'line',
		fillColor: false,
		composite: true,
		fillColor: false,
		lineColor: '#4286F7',
		width: '120 ',
		height: '50',
		lineWidth: 2,
		spotRadius: 3
	});
});
