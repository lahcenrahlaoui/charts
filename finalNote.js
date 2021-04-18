var mytype  ;
  
    finalNoteChart();
    async function finalNoteChart(){
      const data =  await getFinalNoteData();
      const ctx = document.getElementById('myChartCl').getContext('2d');
      const myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: data.XLabels,
              datasets: [{
                  data: data.YLabels,
                  radius:1.5,
                  showLine:false,
                  backgroundColor:['rgb(119, 192, 192)','rgb(192, 192, 119)'],
                  borderColor:['rgb(119, 192, 192)','rgb(192, 192, 119)'],
                  borderWidth: 3
              }
            ]
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
  
    async function getFinalNoteData(){
      // Axis
      const XLabels = [];
      const YLabels = [];
      // index 
      let   index   = 0 ;
      // for removing the duplicate ids 
      let ids = []
      var id_test = 0 ;
      // for save the notes without duplicate
      var mynotes = [];
      var notes;
      
      // Get the data 
      const  response = await fetch('math_cs_students.csv');
      const data = await response.text();
      // Split the data 
      const table = data.split('\n').slice(1);
      // for loop for data 
      table.forEach(row =>{
        const columns = row.split(',');
        
        // get the whole ids from the csv 
        var id = columns[0];
        // Get the Data from columns 19 and 20 
        var notes1 = columns[19];
        var notes2 = columns[20];
        // Calculate the result of the year
        notes = (parseInt(notes1)+parseInt(notes2))/2;
        if (notes !=null) {
          // for removing the duplicate ids 
            if(id_test != id){
              id_test = id;
              mynotes[index] = notes;
              ids[index]     = id;
              index++;
            }
        }
      });
      // for sorting the data 
     /* var con; // the third variable
      for(let c0 = 0 ; c0<mynotes.length;c0++){
        for(let c1 = 1 ; c1<mynotes.length;c1++){
          if(mynotes[c0] < mynotes[c1]){
            con=mynotes[c0];
            mynotes[c0]=mynotes[c1];
            mynotes[c1]=con;
            con = ids[c0];
            ids[c0] = ids[c1];
            ids[c1]=con;
          }
      }}*/
      // for send the data to the function
      for(let counter = 0 ; counter<mynotes.length ; counter++){
        XLabels.push(ids[counter]);
        YLabels.push(mynotes[counter]);
      }
      // the return 
      return {YLabels , XLabels }; 
    }
  

