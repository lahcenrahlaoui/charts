// declaration of variables 
var chartType  =  document.querySelector('input[name="type"]:checked').value;

// declaration of chart type 
var myChart = null;
var bool =false;

// radio click 
if (document.querySelector('input[name="type"]')) {
  document.querySelectorAll('input[name="type"]').forEach((elem) => {
    elem.addEventListener("change", function(event) {
      chartType = event.target.value;
      console.log(chartType);
      if(bool)
        destroyChart();
      bool = true;
      appVesitors();
    });
  });
}

//destroy chart  
function destroyChart(){
  if (myChart !=null)
    myChart.destroy();
}
// call function for the first time 
if(!bool)
  appVesitors();
bool = true;

// function for chart 
    async function appVesitors(){
      const data =  await getDataVesitors();
      const ctx = document.getElementById('app-vesitors').getContext('2d');
      myChart = new Chart(ctx, {
          type: chartType,
          data: {
              labels: data.xs,
              datasets: [{
                  data: data.ys,
                  tension: 0.4,
                  backgroundColor:'rgb(119, 192, 192)',
                  borderColor:'rgb(119, 192, 192)',
                  borderWidth: 3
              }]
          },

          options: {
            scales :{
              x:{
                title:{
                  color : 'red'
                  ,
                  display :true,
                  text : 'month'
                }
              }
            },
            plugins: {
              title: {
                  display: true,
                  text: 'App vesitors in the year '
              },
              legend: {
                display: false,
              }
            }, 
          }
        });
      }
    // function for get data 
    async function getDataVesitors(){
      const xs = [];
      const ys = [];
      
      const  response = await fetch('ZonAnn.Ts+dSST1.csv');
      const data = await response.text();
      
      const table = data.split('\n').slice(1);
      table.forEach(row =>{
        const columns = row.split(',');
        const month = columns[0];
        xs.push(month);
        const temp = columns[1];
        ys.push(temp);
        console.log(month);
      });
      return {xs , ys}; 
    }

