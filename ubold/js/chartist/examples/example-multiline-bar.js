new Chartist.Bar('.multiline-bar', {
  labels: ['Jan-Mar', 'Apr-Jun', 'Jul-Sep', 'Oct-Dec'],
  series: [
    [600, 400, 800, 700],
    [400, 300, 700, 650],
    [800, 300, 100, 600],
    [900, 500, 200, 400],
  ]
}, {
  seriesBarDistance: 12,
  height: "200px",
  chartPadding: {
    left: -30,
    top: 0,
    bottom: -10,
  },
  axisX: {
    offset: 60
  },
  axisY: {
    offset: 80,
    labelInterpolationFnc: function(value) {
      return value + ' $'
    },
    scaleMinSpace: 15
  },
  plugins: [
    Chartist.plugins.tooltip()
  ]  
});