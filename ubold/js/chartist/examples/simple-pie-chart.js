// Chart #1

var data = {
  series: [219, 167, 115, 62]
};
var sum = function(a, b) { return a + b };

new Chartist.Pie('.simple-pie-chart2', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  },
  fullWidth: true,
  height: "240px",
  plugins: [
    Chartist.plugins.tooltip()
  ]
});



// // Chart #2
// var data = {
//   series: [200, 256, 210, 182, 120, 85, 10]
// };

// var sum = function(a, b) { return a + b };

// new Chartist.Pie('.simple-pie-chart', data, {
//   labelInterpolationFnc: function(value) {
//     return Math.round(value / data.series.reduce(sum) * 50) + '%';
//   },
//   fullWidth: true,
//   height: "240px",
//   plugins: [
//     Chartist.plugins.tooltip()
//   ]
// });



// // Chart #3
// var data = {
//   series: [178, 218, 97, 72, 55, 32, 18]
// };

// var sum = function(a, b) { return a + b };

// new Chartist.Pie('.simple-pie-chart3', data, {
//   labelInterpolationFnc: function(value) {
//     return Math.round(value / data.series.reduce(sum) * 20) + '%';
//   },
//   fullWidth: true,
//   height: "240px",
//   // plugins: [
//   //   Chartist.plugins.tooltip()
//   // ]
// });


