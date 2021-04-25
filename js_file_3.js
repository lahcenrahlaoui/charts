var newValue  ;
var prevVal = 0;

var table;

async function uploadData(){
  const response = await fetch('csv_files/dataDownloaded.csv');
  
  let i = 0;
  const data = await response.text();
  table = data.split('\n').slice(1);
  
}

changeData();
async function changeData(){
  await uploadData();

  const id1  = [] ;
  const firstName1 = [] ;
  const lastName1  = [] ;
  const department1  = [] ;
  const cycle1 = [] ;
  const speciality1  = [] ;
  const year1  = [] ;
  const avg1 = [];

  const id2  = [] ;
  const firstName2 = [] ;
  const lastName2  = [] ;
  const department2  = [] ;
  const cycle2 = [] ;
  const speciality2  = [] ;
  const year2  = [] ;
  const avg2 = [];

  const id__  = [] ;
  const firstName__ = [] ;
  const lastName__  = [] ;
  const department__  = [] ;
  const cycle__ = [] ;
  const speciality__  = [] ;
  const year__  = [] ;
  const avg__ = [];

  const id___  = [] ;
  const firstName___ = [] ;
  const lastName___  = [] ;
  const department___  = [] ;
  const cycle___ = [] ;
  const speciality___  = [] ;
  const year___  = [] ;
  const avg___ = [];

  var index = 0 ; 
  var jndex = 0 ; 
  table.forEach(row =>{
    const columns = row.split(',');
    const id_ = columns[0];
    const firstName_ = columns[1];
    const lastName_ = columns[2];
    const cycle_ = columns[3];
    const department_ = columns[4];
    const speciality_ = columns[5];
    const year_ = columns[6];
    const avg_ = columns[7];

    if(avg_ >13){

      id__[index] = id_;    
      firstName__[index]   = firstName_ ;
      lastName__[index]    = lastName_  ;
      department__[index]  = department_;
      cycle__[index]       = cycle_  ;
      speciality__[index]  = speciality_;
      year__[index]        = year_      ;
      avg__[index]         = avg_       ;       
      index++; 
      
    }

    
    if(avg_ >10){

      id___[jndex] = id_;    
      firstName___[jndex]   = firstName_ ;
      lastName___[jndex]    = lastName_  ;
      department___[jndex]  = department_;
      cycle___[jndex]       = cycle_  ;
      speciality___[jndex]  = speciality_;
      year___[jndex]        = year_      ;
      avg___[jndex]         = avg_       ;       
      jndex++; 
      
    }
  
  });

  
  for(let c0 = 0 ; c0<avg__.length;c0++){
    for(let c1 = 1 ; c1<avg__.length;c1++){
      if(avg__[c0] > avg__[c1]){
        con=avg__[c0];
        avg__[c0]=avg__[c1];
        avg__[c1]=con;
      }
    }
  }
  
  for(let c0 = 0 ; c0<avg___.length;c0++){
    for(let c1 = 1 ; c1<avg___.length;c1++){
      if(avg___[c0] < avg___[c1]){
        con=avg___[c0];
        avg___[c0]=avg___[c1];
        avg___[c1]=con;
      }
    }
  }

  for(let i = 0 ; i < 5 ; i++){
      id1.push( id__[i] );
      firstName1.push( firstName__[i] );
      lastName1.push( lastName__[i]);
      department1.push( department__[i]);
      cycle1.push( cycle__[i]);
      speciality1.push( speciality__[i]);
      year1.push( year__[i]);
      avg1.push( avg__[i]);
  }

  
  for(let i = 0 ; i < 5 ; i++){
    id2.push( id___[i] );
    firstName2.push( firstName___[i] );
    lastName2.push( lastName___[i]);
    department2.push( department___[i]);
    cycle2.push( cycle___[i]);
    speciality2.push( speciality___[i]);
    year2.push( year___[i]);
    avg2.push( avg___[i]);
  }

  
  document.getElementById("p-n-1").innerHTML = firstName1[Object.keys(firstName1)[0]];        
  document.getElementById("p-d-1").innerHTML = department1[Object.keys(department1)[0]];  
  document.getElementById("p-s-1").innerHTML = speciality1[Object.keys(speciality1)[0]];
  document.getElementById("p-y-1").innerHTML = year1[Object.keys(year1)[0]];                     
  document.getElementById("p-n-2").innerHTML = firstName1[Object.keys(firstName1)[1]];        
  document.getElementById("p-d-2").innerHTML = department1[Object.keys(department1)[1]];      
  document.getElementById("p-s-2").innerHTML = speciality1[Object.keys(speciality1)[1]];              
  document.getElementById("p-y-2").innerHTML = year1[Object.keys(year1)[1]];                    
  document.getElementById("p-n-3").innerHTML = firstName1[Object.keys(firstName1)[2]];      
  document.getElementById("p-d-3").innerHTML = department1[Object.keys(department1)[2]];
  document.getElementById("p-s-3").innerHTML = speciality1[Object.keys(speciality1)[2]];
  document.getElementById("p-y-3").innerHTML = year1[Object.keys(year1)[2]];                 
  document.getElementById("p-n-4").innerHTML = firstName1[Object.keys(firstName1)[3]];   
  document.getElementById("p-d-4").innerHTML = department1[Object.keys(department1)[3]];
  document.getElementById("p-s-4").innerHTML = speciality1[Object.keys(speciality1)[3]];
  document.getElementById("p-y-4").innerHTML = year1[Object.keys(year1)[3]];                    

  document.getElementById("n-n-1").innerHTML = firstName2[Object.keys(firstName2)[0]];   
  document.getElementById("n-d-1").innerHTML = department2[Object.keys(department2)[0]]; 
  document.getElementById("n-s-1").innerHTML = speciality2[Object.keys(speciality2)[0]];
  document.getElementById("n-y-1").innerHTML = year2[Object.keys(year2)[0]];             
  document.getElementById("n-n-2").innerHTML = firstName2[Object.keys(firstName2)[1]];   
  document.getElementById("n-d-2").innerHTML = department2[Object.keys(department2)[1]]; 
  document.getElementById("n-s-2").innerHTML = speciality2[Object.keys(speciality2)[1]]; 
  document.getElementById("n-y-2").innerHTML = year2[Object.keys(year2)[1]];             
  document.getElementById("n-n-3").innerHTML = firstName2[Object.keys(firstName2)[2]];    
  document.getElementById("n-d-3").innerHTML = department2[Object.keys(department2)[2]];
  document.getElementById("n-s-3").innerHTML = speciality2[Object.keys(speciality2)[2]];
  document.getElementById("n-y-3").innerHTML = year2[Object.keys(year2)[2]];              
  document.getElementById("n-n-4").innerHTML = firstName2[Object.keys(firstName2)[3]];   
  document.getElementById("n-d-4").innerHTML = department2[Object.keys(department2)[3]];
  document.getElementById("n-s-4").innerHTML = speciality2[Object.keys(speciality2)[3]];
  document.getElementById("n-y-4").innerHTML = year2[Object.keys(year2)[3]];             



  $(".div-hide").delay().fadeOut(150);
  setTimeout(function(){
    $(".div-show").fadeIn(1000);  
  }, 150);
}


