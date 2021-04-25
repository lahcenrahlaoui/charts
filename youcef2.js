
// declaration of chart type 
var myChart = null;
var newValue = "Agl_2010_10-11.csv";
var classValue ;
var yearValue ;
var avgValue ;
async function fetchData(file){
    // Get the data 
    const  response = await fetch(file);
    const data = await response.text();
    
    // Split the data 
    const table = data.split('\n').slice(1);
    return table;
  }

  genderChart();
  async function genderChart(){
    const data =  await getGenderData();
    const ctx = document.getElementById('youcefChart').getContext('2d');
    myChart = new Chart(ctx,{
      type: 'bar',
      data: {
        labels: data.XLabels,
          datasets: [{
              label: 'csv',
              data: data.YLabels,
              showLine:true,
              backgroundColor:'rgb(119, 192, 192)',
              borderColor:'rgb(119, 192, 192)',
            }]
          }
      });
  }
  async function getGenderData(){
    const XLabels = [];
    const YLabels = [];

    const table = await fetchData('csv_files/csv/'+newValue);

    table.forEach(row =>{
      const columns = row.split(',');
      const genderData = columns[1];
      const theResult = columns[3];
      XLabels.push(genderData);
      YLabels.push(theResult);
    });
    return {XLabels , YLabels}; 
  }

  
function fffff(){
  myChart.destroy();
  classValue = document.getElementById("class").value;
  yearValue = document.getElementById("year").value;
  avgValue = document.getElementById("avg").value;
  newValue = classValue + "_"+yearValue+"_"+avgValue+".csv";
  console.log(newValue);
  genderChart();  
}
var classV = document.getElementById('class');
var yearV = document.getElementById('year');
var avrV = document.getElementById('avg');
  classV.addEventListener('change', function(event)  {
    fffff();
  });
  yearV.addEventListener('change', function(event)  {
    fffff();
  });
  avrV.addEventListener('change', function(event)  {
    fffff();
  });
  