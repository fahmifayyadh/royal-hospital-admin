var $border_color = "#efefef";
var $grid_color = "#dddddd";
var $default_black = "#444444";
var $primary = "#6a55c2";
var $primary_light = "#adb3f6";
var $danger = "#eb4343";
var $info = "#47759e";
var $success = "#1e825e";
var $yellow = "#b5799e";



$(document).ready(function () {
  sparklineGraphs();
});

// Sparkline
function sparklineGraphs() {

  // Pie charts
  $(function () {

    $("#spark_1").sparkline([1,1,4 ], {
      type: 'pie',
      sliceColors: [$danger, $default_black, $info],
    });

    $("#spark_2").sparkline([2,3,2 ], {
      type: 'pie',
      sliceColors: [$danger, $default_black, $info],
    });

    $("#spark_3").sparkline([3,1,4 ], {
      type: 'pie',
      sliceColors: [$danger, $default_black, $info],
    });

    $("#spark_4").sparkline([5,1,2,1 ], {
      type: 'pie',
      sliceColors: [$danger, $default_black, $info],
    });

    $("#spark_5").sparkline([3,3,4,2 ], {
      type: 'pie',
      sliceColors: [$danger, $default_black, $info],
    });

    $("#spark_6").sparkline([5,1,1,3,7], {
      type: 'pie',
      sliceColors: [$danger, $default_black, $info, $success, $yellow],
      width: '136px ',
      height: '136px'
    });
  });
}

//Resize charts and graphs on window resize
$(document).ready(function () {
  $(window).resize(function(){
    sparklineGraphs();
  });
});