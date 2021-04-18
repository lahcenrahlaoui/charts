
// declaration of chart type 
var myChart = null;
var bool =false;

// radio click 

var changeval = null;
var newValue ='14010996865';
var prevVal = null;
      
//var newValue = 1

      var _myInterval = setInterval(function() {
          newValue = document.getElementById("input-id").value;
          if(prevVal == newValue) {
            changeval =false;
              console.log("No change for 2 second", newValue)
          } else {
              console.log(" New: ", newValue)
              prevVal = newValue;
              changeval = true;
          }
          if(changeval){
            
              myChart.destroy();
              chartIt10();
            
          }
        
          
          
      },(chartIt10, 2000));
      
/********************/
  
/**************************** */


      if(!bool)
      chartIt10();
    bool = true;


// function for chart 
async function chartIt10(){
  const data =  await getData10();
  const ctx = document.getElementById('myChartx').getContext('2d');
  const myChart = new Chart(ctx,{
    type: 'bar',
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
async function getData10(){
  var xs = [];
  var ys = [];
  let i = 0;
  let j = 0;

  const mylist=['agl','alg1','alg2','aly2','analy','CF','elect','his-s','info','info2','Mecaq','StatD','STRM','TEC1','Tecw'];
  const  response = await fetch('math_cs_students.csv');
  const data = await response.text();


  const table = data.split('\n').slice(1);
  let ss =[];
  table.forEach(row =>{
    const columns = row.split(',');
    const id = columns[0];
    const aveg = columns[5];
    if (id !=null) {
      if (id == newValue) {
        ss[i] = aveg;
        i++;
      }
      else{
        j++;
      }
    }


  });
  
  for(let counter = 0 ; counter<mylist.length ; counter++){
    console.log('lkfjasgdklfjalksdjhfkasdhfklashd'+ss[counter]);
    xs.push(mylist[counter]);
    ys.push(ss[counter]);
  }
  
  return {xs , ys}; 
}
