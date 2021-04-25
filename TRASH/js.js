// Global
var options = {
  showPoint: false,
  lineSmooth: true,
  axisX: {
    showGrid: false,
    showLabel: true
  },
  axisY: {
    offset: 60,

    labelInterpolationFnc: function(value) {
      return '$' + value + 'm';
    }
  }
};

// First Chart
var FirstData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  series: [
    [5, 2, 4, 2, 0]
  ]
};

new Chartist.Line('.ct-chart-line', FirstData , options );


// Second Chart
var SecondData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  series: [
    [5, 2, 4, 2, 0]
  ]
};
new Chartist.Bar('.ct-chart-bar', SecondData );


// Third Chart
var ThirdData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  series: [
    [5, 2, 4, 2, 0]
  ]
};
new Chartist.Bar('.ct-chart-bar', ThirdData );