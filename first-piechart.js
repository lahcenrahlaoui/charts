var op ;
function initialiseOptions(data,backgroundColor,borderColor){
op={
type: 'doughnut',
data: {
  labels: data.XLabels,
    datasets: [{
        label: 'csv',
        data: data.YLabels,
        radius:240,
        showLine:true,
        backgroundColor:backgroundColor,
        borderColor:borderColor,
        borderWidth: 3
      }]
    }
}
}
// fetch data function 
async function fetchData(file){
  // Get the data 
  const  response = await fetch(file);
  const data = await response.text();

  // Split the data 
  const table = data.split('\n').slice(1);
  return table;
}


nationalityChart();
async function nationalityChart(){
  const data =  await getNationalityData();
  backgroundColor = ['rgb(119, 192, 192)','rgb(192, 192, 119)'];
  borderColor = ['rgb(119, 192, 192)','rgb(192, 192, 119)'];
  initialiseOptions(data,backgroundColor,borderColor);
  const ctx = document.getElementById('nationality-chart').getContext('2d');
  const myChart = new Chart(ctx,op);
}

async function getNationalityData(){
  // Axis
  const XLabels = [];
  const YLabels = [];
  // for count the algerians and the other 
  let indexAlgerian = 0;
  let indexForeign = 0;
  // the labels 
  const nationality=['algérienne','others'];

  const table = await fetchData('csv_files/student_master.csv');
  // for loop for data 
  table.forEach(row =>{
    const columns = row.split(',');
    // Get the Nationality from columns 2 
    const nationalityData = columns[2];
    
    if (nationalityData !=null) {
      // count people 
      if (nationalityData == "algérienne") {
        indexAlgerian++;
      }
      else{
        indexForeign++;
      }
    }
  });

  let theResult = [indexAlgerian,indexForeign]
  for(let index = 0 ; index<2 ; index++){
    XLabels.push(nationality[index]);
    YLabels.push(theResult[index]);
  }
  return {XLabels , YLabels}; 
}



/**************    gender   ********************* */


genderChart();
async function genderChart(){
  const data =  await getGenderData();
  backgroundColor=['rgb(100, 192, 250)','rgb(255, 0, 119)'];
  borderColor=['rgb(100, 192, 250)','rgb(255, 0, 119)'];
  initialiseOptions(data,backgroundColor,borderColor);
  const ctx = document.getElementById('gender-chart').getContext('2d');
  const myChart = new Chart(ctx,op);
}

async function getGenderData(){
  const XLabels = [];
  const YLabels = [];
  let i = 0;
  let j = 0;

  const gender=['male','female'];
  

  const table = await fetchData('csv_files/student_master.csv');

  table.forEach(row =>{
    const columns = row.split(',');
    const genderData = columns[1];
    
    if (genderData !=null) {
      if (genderData == "M") {
        i++;
      }
      else{
        j++;
      }
    }


  });
  let theResult = [i,j]
  for(let sss = 0 ; sss<2 ; sss++){
    XLabels.push(gender[sss]);
    YLabels.push(theResult[sss]);
  }
  
  return {XLabels , YLabels}; 
}




/******** etudiants more than 10 in result  */


superTenChart();
async function superTenChart(){
  const data =  await getSuperTenData();
  backgroundColor = ['rgb(100, 192, 250)','rgb(255, 0, 119)'],
  borderColor = ['rgb(100, 192, 250)','rgb(255, 0, 119)'],
              
  initialiseOptions(data,backgroundColor,borderColor);
  const ctx = document.getElementById('above-ten-chart').getContext('2d');
  const myChart = new Chart(ctx,op);
}

async function getSuperTenData(){
  const XLabels = [];
  const YLabels = [];
  let i = 0;
  let j = 0;

  const status=['Above','Under'];

  var id_test = 0 ;
  var notes;
  var mynotes = [];
  let ids = []

  const table = await fetchData('csv_files/math_cs_students.csv');

  table.forEach(row =>{
    const columns = row.split(',');
    var notes1 = columns[19];
    var notes2 = columns[20];
    notes = 0 ; 
    notes = (parseInt(notes1)+parseInt(notes2))/2;
    var id = columns[0];


    if (notes !=null) {
        
        if(id_test != id){
          mynotes[i]= notes;
          
          id_test = id;
          ids[i] = id;
          i++;
        }
    }
      else{
        j++;
      }


  });
  var cont=[0,0];
      
  for(let counter = 0 ; counter<mynotes.length ; counter++){
    if(mynotes[counter]<10) cont[0]++;
    else cont[1]++;
    
  }

  for(let i = 0 ; i<2 ; i++){
    console.log(cont[i]);

    XLabels.push(status[i]);
    YLabels.push(cont[i]);
  }

  return {XLabels , YLabels}; 
}


