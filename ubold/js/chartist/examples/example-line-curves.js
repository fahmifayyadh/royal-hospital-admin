var chart = new Chartist.Line('.example-line-curved', {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  series: [
    [{meta: 'Ubold Admin', value: 1 },
    {meta: 'Ubold Admin', value: 3},
    {meta: 'Ubold Admin', value: 1},
    {meta: 'Ubold Admin', value: 3},
    {meta: 'Ubold Admin', value: 1},
    {meta: 'Ubold Admin', value: 5},
    {meta: 'Ubold Admin', value: 1},
    {meta: 'Ubold Admin', value: 3},
    {meta: 'Ubold Admin', value: 1},
    {meta: 'Ubold Admin', value: 3},
    {meta: 'Ubold Admin', value: 1},    
    ],[
    {meta: 'Ubold App', value: 1},
    {meta: 'Ubold App', value: 5},
    {meta: 'Ubold App', value: 1},
    {meta: 'Ubold App', value: 5},
    {meta: 'Ubold App', value: 1},
    {meta: 'Ubold App', value: 7},
    {meta: 'Ubold App', value: 1},
    {meta: 'Ubold App', value: 5},
    {meta: 'Ubold App', value: 1},
    {meta: 'Ubold App', value: 5},
    {meta: 'Ubold App', value: 1},
    ]
  ]},
  {
  low: 0,
  high: 8,
  fullWidth: true,
  height: "250px",
  chartPadding: {
    left: -40,
    top: 0,
    bottom: -10,
    right: 20,
  },
  axisY: {
    offset: 70
  },  
  plugins: [
    Chartist.plugins.tooltip()
  ]
});


