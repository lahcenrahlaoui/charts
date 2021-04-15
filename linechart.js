// declaration of variables 
var item  =  document.querySelector('input[name="type"]:checked').value;

// declaration of chart type 
var myChart = null;
var bool =false;

// radio click 
if (document.querySelector('input[name="type"]')) {
  document.querySelectorAll('input[name="type"]').forEach((elem) => {
    elem.addEventListener("change", function(event) {
      item = event.target.value;
      console.log(item);
      if(bool)
        destt();
      bool = true;
      chartIt();
    });
  });
}

//destroy function 
function destt(){
  if (myChart !=null)
    myChart.destroy();
}
// call function for the first time 
if(!bool)
  chartIt();
bool = true;

// function for chart 
    async function chartIt(){
      const data =  await getData();
      const ctx = document.getElementById('myChart').getContext('2d');
      myChart = new Chart(ctx, {
          type: item,
          data: {
              labels: data.xs,
              datasets: [{
                label : 'red',
                  data: data.ys,
                  tension: 0.4,
                  backgroundColor:'rgb(119, 192, 192)',
                  borderColor:'rgb(119, 192, 192)',
                  borderWidth: 3
              }]
          },

          options: {
            plugins: {
              title: {
                  display: true,
                  text: 'Custom Chart Title'
              },
              legend: {
                display: false,
              }
            }, 
          }
        });
      }
    // function for get data 
    async function getData(){
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

