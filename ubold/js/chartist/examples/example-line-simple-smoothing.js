var chart = new Chartist.Line('.exampleLineSimpleSmoothing', {
  labels: [1, 2, 3, 4, 5],
  series: [
    [1, 5, 10, 0, 1],
    [10, 15, 0, 1, 4],
    [5, 7, 2, 3, 10],
  ]
}, {
  // Remove this configuration to see that chart rendered with cardinal spline interpolation
  // Sometimes, on large jumps in data values, it's better to use simple smoothing.
  lineSmooth: Chartist.Interpolation.simple({
    divisor: 2
  }),
  fullWidth: true,
  height: "180px",
  chartPadding: {
    right: 10,
    left: -50,
    top: 10,
    bottom: -10,
  },
  axisY: {
    offset: 70
  },
  plugins: [
    Chartist.plugins.tooltip()
  ],
  low: 0
});
