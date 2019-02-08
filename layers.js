/*
yellow green timeline

var stops =
   [28806060,
    29497280,
    30188500];

 var colors =
   ["hsl(49, 92%, 44%)",
    "hsl(101, 95%, 41%)",
    "hsl(236, 92%, 44%)"];

    OR
    "hsl(223, 98%, 50%)",
    "hsl(98, 98%, 50%)",
    "hsl(62, 93%, 50%)",
    "hsl(20, 98%, 50%)",
    "hsl(0, 90%, 43%)"

*/


var timeSeriesStops =
  [
    28500000,
    29000000,
    29500000,
    30000000
  ];

var timeSeriesColors =
  ["#fef0d9",
  "#fdcc8a",
  "#fc8d59",
  "#e34a33",
  "#b30000"
  ];


const dataPaint = {
  'fill-opacity' : 0,
  'fill-color': [
      "step",
      ["get", "gridcode"],

      timeSeriesColors[0], timeSeriesStops[0],
      timeSeriesColors[1], timeSeriesStops[1],
      timeSeriesColors[2], timeSeriesStops[2],
      timeSeriesColors[3], timeSeriesStops[3],
      timeSeriesColors[4]

  ]
};



const mapLayers = [

  [{
      'id': 'time-series1',
      'type': 'fill',
      'source': 'timeseries1',
      'source-layer': 'ts1-9js4ib',
      'paint': dataPaint,
      'layout': {}

  }],
  [{
    'id': 'time-series2',
    'type': 'fill',
    'source': 'timeseries2',
    'source-layer': 'ts2-5ap9rr',
    'paint': dataPaint,
    'layout': {}
  }],
  [{
    'id': 'time-series3',
    'type': 'fill',
    'source': 'timeseries3',
    'source-layer': 'ts3-dwe7hq',
    'paint': dataPaint,
    'layout': {}
  }],
  [{
    'id': 'time-series4',
    'type': 'fill',
    'source': 'timeseries4',
    'source-layer': 'ts4-7g9v1j',
    'paint': dataPaint,
    'layout': {}
  }],
  [{
    'id': 'time-series5',
    'type': 'fill',
    'source': 'timeseries5',
    'source-layer': 'ts5-d2ylke',
    'paint': dataPaint,
    'layout': {}
  }]


];
