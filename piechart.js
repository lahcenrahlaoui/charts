var op ;
function initialiseOptions(data){
    op={
    type: 'pie',
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

var mytype;  
  
    nationalityChart();
    async function nationalityChart(){
      const data =  await getNationalityData();
      backgroundColor = ['rgb(119, 192, 192)','rgb(192, 192, 119)'];
      borderColor = ['rgb(119, 192, 192)','rgb(192, 192, 119)'];
      initialiseOptions(data,backgroundColor,borderColor);
      const ctx = document.getElementById('myCharts').getContext('2d');
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
      const XLabelsArray=['algérienne','others'];

      // Get the data 
      const  response = await fetch('student_master.csv');
      const data = await response.text();

      // Split the data 
      const table = data.split('\n').slice(1);
      // for loop for data 
      table.forEach(row =>{
        const columns = row.split(',');
        // Get the Nationality from columns 2 
        const nationality = columns[2];
        
        if (nationality !=null) {
          // count people 
          if (nationality == "algérienne") {
            indexAlgerian++;
          }
          else{
            indexForeign++;
          }
        }
      });

      let theResult = [indexAlgerian,indexForeign]
      for(let index = 0 ; index<2 ; index++){
        XLabels.push(XLabelsArray[index]);
        YLabels.push(theResult[index]);
      }
      return {XLabels , YLabels}; 
    }
/*********************************** */
    

    genderChart();
    async function genderChart(){
      const data =  await getGenderData();
      backgroundColor=['rgb(100, 192, 250)','rgb(255, 0, 119)'];
      borderColor=['rgb(100, 192, 250)','rgb(255, 0, 119)'];
      initialiseOptions(data,backgroundColor,borderColor);
      const ctx = document.getElementById('myChartss').getContext('2d');
      const myChart = new Chart(ctx,op);
    }
  
    async function getGenderData(){
      const XLabels = [];
      const YLabels = [];
      let i = 0;
      let j = 0;

      const xx=['male','female'];
      const  response = await fetch('student_master.csv');
      const data = await response.text();


      const table = data.split('\n').slice(1);
      table.forEach(row =>{
        const columns = row.split(',');
        const nationality = columns[1];
        
        if (nationality !=null) {
          if (nationality == "M") {
            i++;
          }
          else{
            j++;
          }
        }


      });
      let ss = [i,j]
      for(let sss = 0 ; sss<2 ; sss++){
        XLabels.push(xx[sss]);
        YLabels.push(ss[sss]);
      }
      
      return {XLabels , YLabels}; 
    }



    
    
    
  
    superTenChart();
    async function superTenChart(){
      const data =  await getSuperTenData();
      const ctx = document.getElementById('myChartC').getContext('2d');
      const myChart = new Chart(ctx, {
          type: 'pie',
          data: {
              labels: data.XLabels,
              datasets: [{
                  label: 'csv',
                  data: data.YLabels,
                  radius:240,
                  showLine:true,
                  backgroundColor:['rgb(100, 192, 250)','rgb(255, 0, 119)'],
                  borderColor:['rgb(100, 192, 250)','rgb(255, 0, 119)'],
                  borderWidth: 3
              }]
          },
      });
    }
  
    async function getSuperTenData(){
      const XLabels = [];
      const YLabels = [];
      let i = 0;
      let j = 0;

      const xx=['super','under'];
      const  response = await fetch('math_cs_students.csv');
      const data = await response.text();
      
      var id_test = 0 ;
      var notes;
      var mynotes = [];
      let ids = []

      const table = data.split('\n').slice(1);
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

      let ss = [i,j];

      for(let sss = 0 ; sss<2 ; sss++){
        console.log(cont[sss]);

        XLabels.push(xx[sss]);
        YLabels.push(cont[sss]);
      }

      return {XLabels , YLabels}; 
    }