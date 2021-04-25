
// declaration of chart type 
var myChart = null;
var bool =false;
var changeval = null;
var newValue= 0  ;
var prevVal = null;

///  14011097631
var coc='';
coc = parseInt(document.cookie.substring(0,11));

// var strFirstThree = coc.substring(0,11);



var xxxx;
var _myInterval = setInterval(function() {
    
  newValue = document.getElementById("input-id").value;
  if((newValue[0]!='1')){
    //!! console.log("YEEEEEEEEEEEEEEEES");
  }
  xxxx= newValue[0]+newValue[1]+newValue[2]+newValue[3];
  if(xxxx!='1401'){
    newValue = "1401"+newValue;
    //!! console.log("YEEEEEEEEEEEEEEEES   " + newValue);
  }
  if(prevVal == newValue) {
    //!! console.log("No change for 2 second", newValue)
  } 
  else {
    prevVal = newValue;
      if(myChart!=null){
        myChart.destroy();
        barForModule();
        //!! console.log(" New: ", newValue)
      }else{
        barForModule();
      }
      heatMapChart();
  }
}, 2000);


// if(!bool){
//   barForModule();
// }
// bool = true;


// function for chart 
async function barForModule(){
  const data =  await getDataForModule();
  const ctx = document.getElementById('myChartx').getContext('2d');
  //ctx.fillStyle = chart.config.options.chartArea.backgroundColor;
  myChart = new Chart(ctx,{
    type: 'bar',
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
      scales: {
        yAxes: [{
          ticks: {
              beginAtZero: true,
              max :20,
              min :0
          }
        }],
        y: {
              max: 20
          },
        x:{
          min:0,
        }
      },
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
async function getDataForModule(){
  var xs = [];
  var ys = [];
  let i = 0;
  const  response = await fetch('csv_files/math_cs_students.csv');
  const data = await response.text();
  const table = data.split('\n').slice(1);
  let average =[];
  let classes=[];
  table.forEach(row =>{
    const columns = row.split(',');
    const id = columns[0];
    const aveg = columns[5];
    const classesCol = columns[1];
    if (id !=null) {
      if (id == newValue){
        classes[i]= classesCol;
        average[i] = aveg;
        i++;
      }
    }
  });
  
  for(let counter = 0 ; counter<classes.length ; counter++){
    xs.push(classes[counter]);
    ys.push(average[counter]);
  }
  return {xs , ys}; 
}
/*********    HEAT  MAP     ******* */



document.getElementById('input-id').value =  coc ;






