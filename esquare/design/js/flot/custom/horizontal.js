var $border_color = "#ccc";
var $grid_color = "#ccc";
var $default_black = "#666";

var $info = "#47759e";
var $danger = "#eb4343";
var $warning = "#b5799e";
var $success = "#1e825e";
  
$(function () {

  var ds=[], data, chartOptions;

  ds.push ([[1700, 1],[3400, 2],[2300, 3],[4500, 4],[6300, 5]]);
  ds.push ([[1300, 1],[1200, 2],[2900, 3],[2300, 4],[4500, 5]]);
  ds.push ([[800, 1],[1900, 2],[1200, 3],[2100, 4],[3800, 5]]);

  data = [ {
    label: 'Facebook',
    data: ds[1]
  }, {
    label: 'LinkedIn',
    data: ds[0]
  }, {
    label: 'Twitter',
    data: ds[2]
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
    bars: {
      horizontal: true,
      show: true,
      barWidth: 8*24*60*60*300,
      barWidth: .2,
      fill: true,
      lineWidth: 1,
      order: true,
      lineWidth: 0,
      fillColor: { colors: [ { opacity: 1 }, { opacity: 1}]}
    },
  
  tooltip: true,

  tooltipOpts: {
    content: '%s: %x'
  },
  colors: [$danger, $default_black, $info, $success, $warning],
  }

  var holder = $('#horizontal-chart');

  if (holder.length) {
      $.plot(holder, data, chartOptions );
  }

});