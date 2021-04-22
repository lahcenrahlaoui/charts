
// function for get data 
async function getDataHeatMap(){
  console.log("IM MARIOOOOO ");
  let i = 0;
  const  response = await fetch('csv_files/second_heatmap_____therealdata.csv');
  const data = await response.text();
  var createObjectDate={};
  var allnotes=[];
  let alldays =[];
  let x  = 0 ;
  const table = data.split('\n').slice(0);
  table.forEach(row =>{
    const columns = row.split(',');
    const id = columns[0];
    //console.log(id)
    if(id == 'ids'){
      for(let i = 1 ; i<columns.length;i++){
        columns[i] = columns[i].replace(new RegExp('/', 'g'), '-');
        alldays[i-1] = (columns[i]); 
      }
    }
    if (id == newValue){
      for(i = 1 ; i<columns.length ; i++){
        allnotes[i-1] = parseFloat(columns[i]);
      }
    }
    x = columns.length
  });

  console.log("das >>>>>> "+ x +" <> "+ allnotes.length);
  allnotes[allnotes.length-1] = 5;
    
  alldays.forEach((key, val) => createObjectDate[key] = allnotes[val]);

  return createObjectDate;
}

var heatMapchart;
heatMapChart();

async function heatMapChart(){
  var objectDate = await getDataHeatMap();
  const getTimestamp = (date) => Math.round(new Date(date).getTime() / 1000).toString();

  const toDataPointsV2 = (objectDate) => {
    const normalDates = Object.keys(objectDate);
    let dataPoints = {};
    normalDates.forEach((item) => {
      const timeStamp = getTimestamp(item);
      dataPoints[timeStamp] = objectDate[item];
      //!! console.log(timeStamp);
    });
    return dataPoints;
  };

  let data = {
    dataPoints: toDataPointsV2(objectDate),
    start: new Date("09-17-2020"), // a JS date object
    end: new Date("06-12-2021")
  }
  //!! console.log(data);



  chart = new frappe.Chart("#heatmapss", {
    type: "heatmap",
    data:data,


    colors: [ '#d0fff0', '#ade8f4', '#90e0ef', '#48cae4','#00b4d8'],

  });
}
