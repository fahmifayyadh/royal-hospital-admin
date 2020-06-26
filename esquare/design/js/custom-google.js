var $border_color = "#efefef";
var $grid_color = "#ddd";
var $default_black = "#666";

var $primary = "#6a55c2";
var $info = "#47759e";
var $danger = "#eb4343";
var $warning = "#b5799e";
var $success = "#1e825e";


//Google Visualization 
google.load("visualization", "1", {
	packages: ["corechart"]
});

$(document).ready(function () {
	drawChart1();
	drawChart2();
	drawChart3();
	drawChart4();
	drawRegionsMap();
	drawTable();
	candlestick();
	bubbleChart();
	histograomChart();
	timeline()
})

function drawChart1() {
	var data = google.visualization.arrayToDataTable([
		['Year', 'Male', 'Female'],
		['2005', 210, 830],
		['2006', 280, 1390],
		['2007', 1250, 2430],
		['2008', 1890, 2950],
		['2009', 2120, 3970],
		['2010', 3270, 5960],
		['2011', 2950, 6090],
		['2012', 1800, 5440]
		]);

	var options = {
		width: 'auto',
		pointSize: 7,
		lineWidth: 1,
		height: '200',
		backgroundColor: 'transparent',
		colors: [$danger, $default_black, $info, $success, $warning],
		tooltip: {
			textStyle: {
				color: '#666666',
				fontSize: 11
			},
			showColorCode: true
		},
		legend: {
			textStyle: {
				color: 'black',
				fontSize: 12
			}
		},
		chartArea: {
			left: 40,
			top: 10,
			height: "80%"
		}
	};

	var chart = new google.visualization.AreaChart(document.getElementById('area_chart'));
	chart.draw(data, options);
}


function drawChart2() {
	var data = google.visualization.arrayToDataTable([
		['Year', 'Visits', 'Sales'],
		['1989', 1200, 1800],
		['1990', 1250, 1850],
		['1991', 1300, 1900],
		['1992', 1350, 1950],
		['1993', 1400, 2000],
		['1994', 1450, 2050],
		['1995', 1500, 2100],
		['1996', 1550, 2150],
		['1997', 1600, 2200],
		['1998', 1650, 2250],
		['1999', 1700, 2300],
		['2000', 1750, 2350],
		['2001', 1800, 2400],
		['2002', 1850, 2450],
		['2003', 1900, 2500],
		['2004', 1950, 2550],
		['2005', 2000, 2600],
		['2006', 2050, 2650],
		['2007', 2100, 2700],
		['2008', 2150, 2750],
		['2009', 1290, 1967],
		['2010', 1290, 1967],
		['2011', 1290, 1967],
		['2012', 1290, 1967],
		['2013', 1290, 1967],

		]);

	var options = {
		width: 'auto',
		height: '160',
		backgroundColor: 'transparent',
		colors: [$danger, $default_black, $info, $success, $warning],
		tooltip: {
			textStyle: {
				color: '#666666',
				fontSize: 11
			},
			showColorCode: true
		},
		legend: {
			textStyle: {
				color: 'black',
				fontSize: 12
			}
		},
		chartArea: {
			left: 100,
			top: 10
		},
		focusTarget: 'category',
		hAxis: {
			textStyle: {
				color: 'black',
				fontSize: 12
			}
		},
		vAxis: {
			textStyle: {
				color: 'black',
				fontSize: 12
			}
		},
		pointSize: 8,
		chartArea: {
			left: 60,
			top: 10,
			height: '80%'
		},
		lineWidth: 2,
	};

	var chart = new google.visualization.LineChart(document.getElementById('line_chart'));
	chart.draw(data, options);
}


function drawChart3() {
	var data = google.visualization.arrayToDataTable([
		['Year', 'Sales', 'Orders', 'Income', 'Expenses'],
		['2007', 300, 800, 900, 300],
		['2008', 1170, 860, 1220, 564],
		['2009', 260, 1120, 2870, 2340],
		['2010', 1030, 540, 3430, 1200],
		['2011', 200, 700, 1700, 770],
		['2012', 1170, 2160, 3920, 800],
		['2013', 2170, 1160, 2820, 500] ]);

	var options = {
		width: 'auto',
		height: '160',
		backgroundColor: 'transparent',
		colors: [$danger, $default_black, $info, $success, $warning],
		tooltip: {
			textStyle: {
				color: '#666666',
				fontSize: 11
			},
			showColorCode: true
		},
		legend: {
			textStyle: {
				color: 'black',
				fontSize: 12
			}
		},
		chartArea: {
			left: 60,
			top: 10,
			height: '80%'
		},
	};

	var chart = new google.visualization.ColumnChart(document.getElementById('column_chart'));
	chart.draw(data, options);
}

function drawChart4() {
	var data = google.visualization.arrayToDataTable([
		['Task', 'Hours per Day'],
		['Eat', 2],
		['Work', 9],
		['Commute', 2],
		['Read', 2],
		['Sleep', 7],
		['Play', 2],
		]);

	var options = {
		width: 'auto',
		height: '260',
		backgroundColor: 'transparent',
		colors: [$danger, $default_black, $info, $success, $warning],
		tooltip: {
			textStyle: {
				color: '#666666',
				fontSize: 11
			},
			showColorCode: true
		},
		legend: {
			position: 'left',
			textStyle: {
				color: 'black',
				fontSize: 12
			}
		},
		chartArea: {
			left: 0,
			top: 10,
			width: "100%",
			height: "100%"
		}
	};

	var chart = new google.visualization.PieChart(document.getElementById('pie_chart'));
	chart.draw(data, options);
}

//Geo Charts
google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
	var data = google.visualization.arrayToDataTable([
		['Country', 'Popularity'],
		['Germany', 200],
		['IN', 900],
		['United States', 300],
		['Brazil', 400],
		['Canada', 500],
		['France', 600],
		['RU', 700]
		]);

	var options = {
		width: 'auto',
		height: '260',
		backgroundColor: 'transparent',
		colors: [$danger, $default_black, $info, $success, $warning],
	};

	var chart = new google.visualization.GeoChart(document.getElementById('geo_chart'));
	chart.draw(data, options);
};

//Table Charts
google.load('visualization', '1', {packages:['table']});
google.setOnLoadCallback(drawTable);
function drawTable() {
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Name');
	data.addColumn('number', 'Salary');
	data.addColumn('boolean', 'Full Time Employee');
	data.addRows([
		['Williams',  {v: 10000, f: '$12,000'}, true],
		['Rosy',   {v: 18000, f: '$19,000'},  false],
		['John', {v: 12500, f: '$32,500'}, false],
		['Prinu',   {v: 28000, f: '$21,000'}, true],
		['Maxwell',  {v: 10000, f: '$14,000'}, true]
		]);

	var table = new google.visualization.Table(document.getElementById('table_chart'));
	table.draw(data, {showRowNumber: true});
}

//Candlestick Chart
function candlestick() {
	var data = google.visualization.arrayToDataTable([
		['Mon', 20, 28, 38, 45],
		['Tue', 31, 38, 55, 66],
		['Wed', 50, 55, 77, 80],
		['Thu', 77, 47, 56, 50],
		['Fri', 68, 66, 22, 15],
		['Sat', 23, 31, 12, 35]
		// Treat first row as data as well.
		], true);

	var options = {
		legend: 'none',
		width: 'auto',
		height: '280',
		backgroundColor: 'transparent',
		colors: [$danger, $default_black, $info, $success, $warning],
	};

	var chart = new google.visualization.CandlestickChart(document.getElementById('candlestick_chart'));
	chart.draw(data, options);
}

// google.setOnLoadCallback(drawVisualization);

//Bubble Chart

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(bubbleChart);
function bubbleChart() {
	var data = google.visualization.arrayToDataTable([
		['ID', 'Life Expectancy', 'Fertility Rate', 'Region',     'Population'],
		['CAN',    80.66,              1.67,      'North America',  33739900],
		['DEU',    79.84,              1.36,      'Europe',         81902307],
		['DNK',    78.6,               1.84,      'Europe',         5523095],
		['SL',     72.73,              2.78,      'South Asia',    109716203],
		['GBR',    80.05,              2,         'Europe',         61801570],
		['IRN',    72.49,              1.7,       'Middle East',    73137148],
		['IRQ',    68.09,              4.77,      'Middle East',    31090763],
		['ISR',    81.55,              2.96,      'Middle East',    7485600],
		['RUS',    68.6,               1.54,      'Europe',         141850000],
		['USA',    78.09,              2.05,      'North America',  307007000]
		]);

	var options = {
		title: 'Correlation between life expectancy, fertility rate and population of some world countries (2012)',
		hAxis: {title: 'Life Expectancy'},
		vAxis: {title: 'Fertility Rate'},
		colors: [$danger, $default_black, $info, $success, $warning],
		fontSize: 11,
		backgroundColor: 'transparent',
		bubble: {textStyle: {fontSize: 11}}
	};

	var chart = new google.visualization.BubbleChart(document.getElementById('bubble_chart'));
	chart.draw(data, options);
}

// Histogram
function histograomChart(){
	google.load("visualization", "1", {packages:["corechart"]});
	google.setOnLoadCallback(histogram_chart);
	function histogram_chart() {
		var data = google.visualization.arrayToDataTable([
			['Dinosaur', 'Length'],
			['Acrocanthosaurus (top-spined lizard)', 12.2],
			['Albertosaurus (Alberta lizard)', 9.1],
			['Allosaurus (other lizard)', 12.2],
			['Apatosaurus (deceptive lizard)', 22.9],
			['Archaeopteryx (ancient wing)', 0.9],
			['Argentinosaurus (Argentina lizard)', 36.6],
			['Baryonyx (heavy claws)', 9.1],
			['Brachiosaurus (arm lizard)', 30.5],
			['Ceratosaurus (horned lizard)', 6.1],
			['Coelophysis (hollow form)', 2.7],
			['Compsognathus (elegant jaw)', 0.9],
			['Deinonychus (terrible claw)', 2.7],
			['Diplodocus (double beam)', 27.1],
			['Dromicelomimus (emu mimic)', 3.4],
			['Gallimimus (fowl mimic)', 5.5],
			['Mamenchisaurus (Mamenchi lizard)', 21.0],
			['Megalosaurus (big lizard)', 7.9],
			['Microvenator (small hunter)', 1.2],
			['Ornithomimus (bird mimic)', 4.6],
			['Oviraptor (egg robber)', 1.5],
			['Plateosaurus (flat lizard)', 7.9],
			['Sauronithoides (narrow-clawed lizard)', 2.0],
			['Seismosaurus (tremor lizard)', 45.7],
			['Spinosaurus (spiny lizard)', 12.2],
			['Supersaurus (super lizard)', 30.5],
			['Tyrannosaurus (tyrant lizard)', 15.2],
			['Ultrasaurus (ultra lizard)', 30.5],
			['Velociraptor (swift robber)', 1.8]]);

		var options = {
			title: 'Lengths of dinosaurs, in meters',
			legend: { position: 'none' },
			height: '260',
			backgroundColor: 'transparent',
			colors: [$danger, $default_black, $info, $success, $warning],
		};

		var chart = new google.visualization.Histogram(document.getElementById('histogram_chart'));
		chart.draw(data, options);
	}
}

// Charges of subatomic particles
function timeline(){
	google.setOnLoadCallback(drawChart);
	function drawChart() {

		var container = document.getElementById('timeline_chart');
		var chart = new google.visualization.Timeline(container);
		var dataTable = new google.visualization.DataTable();
		dataTable.addColumn({ type: 'string', id: 'Room' });
		dataTable.addColumn({ type: 'string', id: 'Name' });
		dataTable.addColumn({ type: 'date', id: 'Start' });
		dataTable.addColumn({ type: 'date', id: 'End' });
		dataTable.addRows([
			[ 'Wilson', 'Beginning JavaScript',       new Date(0,0,0,12,0,0),  new Date(0,0,0,13,30,0) ],
			[ 'Wilson', 'Intermediate JavaScript',    new Date(0,0,0,14,0,0),  new Date(0,0,0,15,30,0) ],
			[ 'Wilson', 'Advanced JavaScript',        new Date(0,0,0,16,0,0),  new Date(0,0,0,17,30,0) ],
			[ 'James',  'Beginning Ruby',    new Date(0,0,0,12,30,0), new Date(0,0,0,14,0,0) ],
			[ 'James',  'Intermediate Ruby', new Date(0,0,0,14,30,0), new Date(0,0,0,16,0,0) ],
			[ 'James',  'Advanced Ruby',     new Date(0,0,0,16,30,0), new Date(0,0,0,18,0,0) ]]);

		var options = {
			legend: {position: 'none'},
			height: '150',
			colors: [$danger, $default_black, $info, $success, $warning],
		};

		chart.draw(dataTable, options);
	}
}

//Resize charts and graphs on window resize
$(document).ready(function () {
	$(window).resize(function(){
		drawChart1();
		drawChart2();
		drawChart3();
		drawChart4();
		drawTable();
		bubbleChart();
		drawRegionsMap();
		candlestick();
		histograomChart();
		timeline();
	});
});
