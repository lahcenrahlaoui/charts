var labels =  ["lab","els"];
var data =[6,6];
let chart = new Chart(document.getElementById('myChart'), {
  type: 'bar',
  data: {
    labels: labels,    
    datasets: [{
      label: "My First Dataset",
      data: data
    }]
  },
  options: {
    plugins: {
      datalabels: {
        formatter: function(value, context) {
          return '$' + Number(value).toLocaleString();
        },
      }
    },
    onClick: (evt, item) => {
      const idx = chart.getElementAtEvent(event)[0]._index;
      console.log(labels[idx]);
    }
  }
});