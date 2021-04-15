
var mytype  
  
    chartIt1();
    async function chartIt1(){
      const data =  await getData1();
      const ctx = document.getElementById('myCharts').getContext('2d');
      const myChart = new Chart(ctx, {
          type: 'pie',
          data: {
              labels: data.xs,
              datasets: [{
                  label: 'csv',
                  data: data.ys,
                  radius:240,

                  showLine:true,
                  backgroundColor:['rgb(119, 192, 192)','rgb(192, 192, 119)'],
                  borderColor:['rgb(119, 192, 192)','rgb(192, 192, 119)'],
                  borderWidth: 3
              }]
          },
      });
    }
  
    async function getData1(){
      const xs = [];
      const ys = [];
      let i = 0;
      let j = 0;

      const xx=['algérienne','others'];
      const  response = await fetch('student_master.csv');
      const data = await response.text();


      const table = data.split('\n').slice(1);
      table.forEach(row =>{
        const columns = row.split(',');
        const nationality = columns[2];
        
        if (nationality !=null) {
          if (nationality == "algérienne") {
            i++;
          }
          else{
            j++;
          }
        }


      });
      console.log(i);
      console.log(j);
      let ss = [i,j]
      for(let sss = 0 ; sss<2 ; sss++){
        xs.push(xx[sss]);
        ys.push(ss[sss]);
        console.log(ss[sss]);


      }
      
      return {xs , ys}; 
    }



    
    
  
    chartIt2();
    async function chartIt2(){
      const data =  await getData2();
      const ctx = document.getElementById('myChartss').getContext('2d');
      const myChart = new Chart(ctx, {
          type: 'pie',
          data: {
              labels: data.xs,
              datasets: [{
                  label: 'csv',
                  data: data.ys,
                  radius:240,
                  showLine:true,
                  backgroundColor:['rgb(100, 192, 250)','rgb(255, 0, 119)'],
                  borderColor:['rgb(100, 192, 250)','rgb(255, 0, 119)'],
                  borderWidth: 3
              }]
          },
      });
    }
  
    async function getData2(){
      const xs = [];
      const ys = [];
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
        xs.push(xx[sss]);
        ys.push(ss[sss]);
      }
      
      return {xs , ys}; 
    }
