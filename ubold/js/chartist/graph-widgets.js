/****************************** Chart #1 *****************************/
var chart = new Chartist.Line('.lineInterpolation', {
  labels: [1, 2, 3, 4, 5],
  series: [
    [10, 18, 66, 32, 39]
  ]
}, {
  // Remove this configuration to see that chart rendered with cardinal spline interpolation
  // Sometimes, on large jumps in data values, it's better to use simple smoothing.
  lineSmooth: Chartist.Interpolation.simple({
    divisor: 1
  }),
  fullWidth: true,
  lineSmooth: true,
  chartPadding: {
    right: 20,
    left: 0,
  },
  low: 0,
  high: 'auto',
  showPoint: false,
  axisX: {
    showGrid: true,
    showLabel: true
  },
  axisY: {
    offset: 40,
    showGrid: true
  },
  classNames: {
    line: 'ct-line ct-red'
  },
  plugins: [
    Chartist.plugins.tooltip()
  ],
});


/****************************** Chart #2 *****************************/
var chart = new Chartist.Line('.lineInterpolation2', {
  labels: [1, 2, 3, 4, 5],
  series: [
    [5, 32, 11, 36, 53]
  ]
}, {
  // Remove this configuration to see that chart rendered with cardinal spline interpolation
  // Sometimes, on large jumps in data values, it's better to use simple smoothing.
  lineSmooth: Chartist.Interpolation.simple({
    divisor: 1
  }),
  fullWidth: true,
  lineSmooth: true,
  chartPadding: {
    right: 20,
    left: 0,
  },
  low: 0,
  high: 'auto',
  showPoint: false,
  axisX: {
    showGrid: true,
    showLabel: true
  },
  axisY: {
    offset: 40,
    showGrid: true
  },
  classNames: {
    line: 'ct-line ct-blue'
  },
  plugins: [
    Chartist.plugins.tooltip()
  ],
});

/****************************** Chart #3 *****************************/
var chart = new Chartist.Line('.lineInterpolation3', {
  labels: [1, 2, 3, 4, 5],
  series: [
    [76, 67, 31, 45, 19]
  ]
}, {
  // Remove this configuration to see that chart rendered with cardinal spline interpolation
  // Sometimes, on large jumps in data values, it's better to use simple smoothing.
  lineSmooth: Chartist.Interpolation.simple({
    divisor: 1
  }),
  fullWidth: true,
  lineSmooth: true,
  chartPadding: {
    right: 20,
    left: 0,
  },
  low: 0,
  high: 'auto',
  showPoint: false,
  axisX: {
    showGrid: true,
    showLabel: true
  },
  axisY: {
    offset: 40,
    showGrid: true
  },
  classNames: {
    line: 'ct-line ct-green'
  },
  plugins: [
    Chartist.plugins.tooltip()
  ],
});
