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
    0,
    2,
    4,
    6,
    8,
    10,
    12,
    15,
    20
  ];

var timeSeriesColors =
  ['#fff7fb',
'#ece7f2',
'#d0d1e6',
'#a6bddb',
'#74a9cf',
'#3690c0',
'#0570b0',
'#045a8d',
'#023858'
  ];

//Colors don't matter, its the 0 at the end which indicate opacity
var outlineColors =
["rgba(254,240,217, 0)",
 "rgba(253,204,138, 0)",
 "rgba(252,141,89, 0)",
 "rgba(227,74,51, 0)",
 "rgba(179,0,0, 0)",
"rgba(179,0,0, 0)",
"rgba(179,0,0, 0)",
"rgba(179,0,0, 0)",
"rgba(179,0,0, 0)"];


const dataPaint = {
  'fill-outline-color': [
     "step",
    ["get", "temp"],
    outlineColors[0], timeSeriesStops[0],
    outlineColors[1], timeSeriesStops[1],
    outlineColors[2], timeSeriesStops[2],
    outlineColors[3], timeSeriesStops[3],
    outlineColors[4], timeSeriesStops[4],
    outlineColors[5], timeSeriesStops[5],
    outlineColors[6], timeSeriesStops[6],
    outlineColors[7], timeSeriesStops[7],
    outlineColors[8]
  ],

  'fill-color': [
      "step",
      ["get", "temp"],

      timeSeriesColors[0], timeSeriesStops[0],
      timeSeriesColors[1], timeSeriesStops[1],
      timeSeriesColors[2], timeSeriesStops[2],
      timeSeriesColors[3], timeSeriesStops[3],
      timeSeriesColors[4], timeSeriesStops[4],
      timeSeriesColors[5], timeSeriesStops[5],
      timeSeriesColors[6], timeSeriesStops[6],
      timeSeriesColors[7], timeSeriesStops[7],
      timeSeriesColors[8]

  ],
/*
'fill-opacity':
 ["case",
      ["boolean", ["feature-state", "hover"], false],
      1,
      0
    ] //need to set everything to 0 at start or add a third case
*/

  'fill-opacity': 0
};



const mapLayers = [

  [{
      'id': 'time-series1',
      'type': 'fill',
      'source': 'timeseries1',
      'source-layer': 'Wind_d04_asc_v5_timestep20h_F-5j1yb7',
      'paint': dataPaint,
      'layout': {}

  }],
  [{
    'id': 'time-series2',
    'type': 'fill',
    'source': 'timeseries2',
    'source-layer': 'Wind_d04_asc_v5_timestep21h_F-1qsa9z',
    'paint': dataPaint,
    'layout': {}
  }],
  [{
    'id': 'time-series3',
    'type': 'fill',
    'source': 'timeseries3',
    'source-layer': 'Wind_d04_asc_v5_timestep22h_F-56d61z',
    'paint': dataPaint,
    'layout': {}
  }],
  [{
    'id': 'time-series4',
    'type': 'fill',
    'source': 'timeseries4',
    'source-layer': 'Wind_d04_asc_v5_timestep23h_F-226th3',
    'paint': dataPaint,
    'layout': {}
  }],
  [{
    'id': 'time-series5',
    'type': 'fill',
    'source': 'timeseries5',
    'source-layer': 'Wind_d04_asc_v5_timestep24h_F-9z2suy',
    'paint': dataPaint,
    'layout': {}
  }]


];
