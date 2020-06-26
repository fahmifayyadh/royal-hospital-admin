new Chartist.Bar('.barHorizontal', {
  labels: ['Mon', 'Tue', 'Wed', 'Thu'],
  series: [
    [
      {meta: 'Ubold Dashboard', value: 5},
      {meta: 'Ubold Dashboard', value: 2},
      {meta: 'Ubold Dashboard', value: 4},
      {meta: 'Ubold Dashboard', value: 7},
    ],
    [
      {meta: 'Ubold App', value: 3},
      {meta: 'Ubold App', value: 2},
      {meta: 'Ubold App', value: 9},
      {meta: 'Ubold App', value: 6},
    ],
    [
      {meta: 'Ubold Admin', value: 2},
      {meta: 'Ubold Admin', value: 3},
      {meta: 'Ubold Admin', value: 5},
      {meta: 'Ubold Admin', value: 9},
    ],
  ],
}, {
  seriesBarDistance: 11,
  reverseData: true,
  horizontalBars: true,
  height: "180px",
  chartPadding: {
    right: 0,
    left: -30,
    top: 0,
    bottom: -10,
  },
  axisY: {
    offset: 70
  },
  plugins: [
    Chartist.plugins.tooltip()
  ], 
});
