var mycharts= {};
finalNoteChart();
  var data ;
  async function finalNoteChart(){
    
    data =  await getFinalNoteData();
    
    const ctxss = document.getElementById('final-note-chart').getContext('2d');
    
    mycharts = new Chart(ctxss, {
      
        type: 'line',
        data: {
            labels: data.XLabels,
            datasets: [{
                data: data.YLabels,
                radius:1.5,
                showLine:false,
                backgroundColor:[chartColors.red],
                borderColor:[chartColors.red],
                borderWidth: 3
            }
          ]
        },

        
        options: {
          scales: {
            y: {
              max : 20,
              min : 20
            },
            xAxes: [{
                ticks:{
                  display:false,
                // },

                // ticks: {
                  beginAtZero: true,
                  callback: function(value, index, values) {
                    // where 3 is the line index you want to display

                    return (index%20 == 1) ? "" : null;
                  }
                },
                gridLines: {
                  //  color: "rgba(0, 0, 0, 0)",
                }
            }],
            yAxes: [{
              
              gridLines: {
                  //color: "rgba(0, 0, 0, 0)",
              }   
            }]
        },


        





          //* for delete the ids 
          // scales: {
          //   xAxes: [{
          //       ticks: {
          //           display: false //this will remove only the label
          //       }
          //   }]
          // },


          scaleStartValue: 0,
          plugins: {
            tooltip:{
              callbacks: {
                label: function() {
                    return XLabels;
                }
            }
            },

            datalabels: {
              display: false,
              formatter: function(value, context) {
                return '$' + Number(value).toLocaleString();
              },
            },
            title: {
                display: true,
                text: 'Custom Chart Title'
            },
            legend: {
              display: false,
            },

            //* Zoom 
            // zoom: {
            //   pan: {
            //       enabled: true,
            //       mode: 'xy'
            //   },
            //   zoom: {
            //       enabled: true,
            //       mode: 'xy',
            //   }
            // }

          }, 
          
          onClick: (evt, item) => {
            const idx = mycharts.getElementAtEvent(event)[0]._index;
            //!! console.log(data.XLabels[idx]);

            deleteAllCookies() ;
            document.cookie = parseInt(data.XLabels[idx]);
            location.href = "second_Just_one.html";
          },
        //   hover: {
        //     mode: 'nearest',
        //     intersect: false,
        //     onHover: function (e, item) {
        //         if (item.length) {
        //             const data = item[0]._chart.config.data.datasets[0].data[item[0]._index];
        //             console.log(data.XLabels[0], data);
        //         }
        //     }
        // }
          
      },
        
    });

    heyo();

  function heyo(){
    var colorChangeValue = 10; //set this to whatever is the deciding color change value
    var dataset = mycharts.data.datasets[0];
    for (var i = 0; i < dataset.data.length; i++) {
      if (dataset.data[i] > colorChangeValue) {
        dataset.backgroundColor[i] = chartColors.blue;
        dataset.borderColor[i] = chartColors.blue;
      }else{
        dataset.backgroundColor[i] = chartColors.red;
        dataset.borderColor[i] = chartColors.red;

      }
    }
  }
}

var chartColors = {
  red: 'rgb(255, 50, 50)',
  blue: 'rgb(54, 50, 235)'
};


async function getFinalNoteData(){
  // Axis
  
  const XLabels = [];
  const YLabels = [];
  // index 
  let   index   = 0 ;
  // for removing the duplicate ids 
  let ids = []
  var id_test = 0 ;
  var notes_test = 0;
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
    notes = (parseFloat(notes1)+parseFloat(notes2))/2;
    if (notes !=null) {
      // for removing the duplicate ids 
        if((notes != notes_test)){

          id_test = id;           
          notes_test = notes;      
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
  const xdLabel =[]; 
  for(let counter = 0 ; counter<mynotes.length ; counter++){
    XLabels.push(ids[counter]);
    ids[counter] = '   ';
    xdLabel.push(ids[counter]);
    YLabels.push(mynotes[counter]);
  }
  // the return 
  return {XLabels,YLabels,xdLabel }; 
}





    
function deleteAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}




