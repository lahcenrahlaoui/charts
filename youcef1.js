
// declaration of chart type 
var myChart = null;
var bool =false;
var changeval = null;
var newValue = "Agl_2010_10-11.csv";
var classValue ;
var yearValue ;
var minValue ;
var maxValue ;
var avgValue ;
var prevVal = null;

var list =[];



// getFileName();

// async function getFileName(){
  // await loadFileNames('/csv_files/csvs').then((data) => {
  //   var re = /(?:\.([^.]+))?$/;
  //   var ext;
  //   var j = 0;
  //   for(let i = 0 ; i < data.length ; i++){
  //     ext = re.exec(data[i])[1];   // "txt"
  //     if(ext == 'csv'){
  //       list[j] = data[i];
  //       j++;
  //     }
  //     else
  //     console.log(ext)
  
  //   }
  //   document.getElementById("fileNames").innerHTML = list;
  
  //   console.log(list)
  
  // }).catch((error) => {
  //     alert('Files could not be loaded. please check console for details');
  //     console.error(error);
  // });



//     // get the input data 
//   var _myInterval = setInterval(function() {
// //Agl_2010_10-11.csv
//     /*classValue = document.getElementById("input-id-class").value;
//     yearValue = document.getElementById("input-id-year").value;
//     minValue = document.getElementById("input-id-min").value;
//     avgValue = parseInt(minValue)+"-"+(parseInt(minValue)+1);
//     newValue = classValue + "_"+yearValue+"_"+avgValue+".csv";*/
    
//     classValue = document.getElementById("class").value;
//     yearValue = document.getElementById("year").value;
//     avgValue = document.getElementById("avg").value;
//     newValue = classValue + "_"+yearValue+"_"+avgValue+".csv";
//     console.log(" >>>>>     "+newValue);
//     // alert(newValue);
//     if(prevVal == newValue) {
    
//     } 
//     else 
//     {
//       prevVal = newValue;
//         if(myChart!=null){
//           myChart.destroy();
            
//         genderChart();
//         }  else{

//           genderChart();
//         }
//     }
//   }, 2000);





  // if (document.querySelector('class')||document.querySelector('year')||document.querySelector('avg')) {
  //   classValue = document.getElementById("class").value;
  //   yearValue = document.getElementById("year").value;
  //   avgValue = document.getElementById("avg").value;
  //   newValue = classValue + "_"+yearValue+"_"+avgValue+".csv";
  //   console.log(" >>>>>     "+newValue);
  //   document.querySelectorAll('class').forEach(function (elem){
  //     elem.addEventListener("change",  function(event){
        
  // classValue = document.getElementById("class").value;
  // yearValue = document.getElementById("year").value;
  // avgValue = document.getElementById("avg").value;
  // newValue = classValue + "_"+yearValue+"_"+avgValue+".csv";
  // console.log(" >>>>>     "+newValue);
  //       genderChart();
  //     });
  //   });
  //   document.querySelectorAll('year').forEach(function (elem){
  //     elem.addEventListener("change",  function(event){
        
  //       genderChart();
  //     });
  //   });
  //   document.querySelectorAll('avg').forEach(function (elem){
  //     elem.addEventListener("change",  function(event){
        
  //       genderChart();
  //     });
  //   });
  // }





  // function loadFileNames(dir) {
  //   return new Promise((resolve, reject) => {
  //     try {
  //         var fileNames = new Array();
  //         $.ajax({
  //             url: dir,
  //             success: function (data) {
  //                 for(var i = 1; i < $(data).find('li span.name').length; i++){
  //                     var elem = $(data).find('li span.name')[i];
  //                     fileNames.push(elem.innerHTML);
  //                 }
  //                 return resolve(fileNames);
  //             }
  //         });
  //       } catch (ex) {
  //         return reject(new Error(ex));
  //     }
  //   });

  // }



  // fetch data function 
  async function fetchData(file){
    // Get the data 
    const  response = await fetch(file);
    const data = await response.text();

    // Split the data 
    const table = data.split('\n').slice(1);
    return table;
  }
  var myChart;
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


  // var res = list.split(","); 
// }





// $(document).on('change','#class',function(){
//   alert('Change Happened');
// });
// if(myChart!= null){
//   myChart.destrot();
// }

// $(document).ready(function(){
//   $(document).on('change','#class',function(){
//     classValue = document.getElementById("class").value;
//       yearValue = document.getElementById("year").value;
//       avgValue = document.getElementById("avg").value;
//       newValue = classValue + "_"+yearValue+"_"+avgValue+".csv";
//       console.log(" >>>>>     "+newValue);
//       genderChart();
//   });

//   $('#year').on('change', function() {
//       classValue = document.getElementById("class").value;
//       yearValue = document.getElementById("year").value;
//       avgValue = document.getElementById("avg").value;
//       newValue = classValue + "_"+yearValue+"_"+avgValue+".csv";
//       console.log(" >>>>>     "+newValue);
//       genderChart();
//   });

//   $('#avg').on('change', function() {
//       classValue = document.getElementById("class").value;
//       yearValue = document.getElementById("year").value;
//       avgValue = document.getElementById("avg").value;
//       newValue = classValue + "_"+yearValue+"_"+avgValue+".csv";
//       console.log(" >>>>>     "+newValue);
//       genderChart();
//   });
// });

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
  