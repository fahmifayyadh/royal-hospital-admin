var $border_color = "#ccc";
var $grid_color = "#ccc";
var $default_black = "#666";

var $cool_one = "#7764a2";
var $cool_two = "#145b9b";
var $cool_three = "#00a4be";
var $cool_four = "#45a989";
var $cool_five = "#588ba4";
var $cool_six = "#b2a7d0";
var $cool_seven = "#67aadf";
var $cool_eight = "#7bc1d8";
var $cool_nine = "#89c1a2";
var $cool_ten = "#8bb9d6";

  
$(function () {

  var ds=[], data, chartOptions;

  ds.push ([[1700, 1],[3400, 2],[2300, 3]]);
  ds.push ([[1300, 1],[1200, 2],[2900, 3]]);
  ds.push ([[800, 1],[1900, 2],[1200, 3]]);
  ds.push ([[1200, 1],[1300, 2],[2100, 3]]);

  data = [ {
    label: 'Income',
    data: ds[1]
  }, {
    label: 'Expenses',
    data: ds[0]
  }, {
    label: 'Salaries',
    data: ds[2]
  }, {
    label: 'Investment',
    data: ds[3]
  }];

  chartOptions = {
    xaxis: {
    },
    grid:{
      hoverable: true,
      clickable: false,
      borderWidth: 1,
      tickColor: $border_color,
      borderColor: $grid_color,
    },
    shadowSize: 0,
    legend: {
      show: false,
    },
    bars: {
      horizontal: true,
      show: true,
      barWidth: 3*24*60*60*300,
      barWidth: .1,
      fill: true,
      lineWidth: 1,
      order: true,
      lineWidth: 0,
      fillColor: { colors: [ { opacity: 0.8 }, { opacity: 0.6 } ] }
    },
  tooltip: true,

  tooltipOpts: {
    content: '%s: %x'
  },
  colors: [$cool_ten, $cool_four, $cool_one, $cool_seven, $cool_two, $cool_eight],
  }

  var holder = $('#horizontal-chart');

  if (holder.length) {
    $.plot(holder, data, chartOptions );
  }

});