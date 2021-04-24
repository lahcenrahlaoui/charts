var newValue  ;
var prevVal = 0;

var table;
uploadData();

async function uploadData(){
  const response = await fetch('csv_files/dataApr-24-2021.csv');
  
  let i = 0;
  const data = await response.text();
  table = data.split('\n').slice(1);
  
}
var _myInterval = setInterval(function() {
  newValue = document.getElementById("input-id").value;
  if(prevVal == newValue) {
    console.log("No change for 2 second", newValue)
  } 
  else {
    prevVal = newValue;
    changeData();
  }
}, 2000);

function changeData(){
  var id='' ;
  var firstName =' ' ;
  var lastName='' ;
  var department='' ;
  var cycle='' ;
  var speciality='' ;
  var year='' ;
  table.forEach(row =>{
    const columns = row.split(',');
    const id_ = columns[0];
    const firstName_ = columns[1];
    const lastName_ = columns[2];
    
    const cycle_ = columns[3];
    
    const department_ = columns[4];
    const speciality_ = columns[5];
    const year_ = columns[5];
    if( id_ == newValue){
      console.log(">> "+firstName_);
      id = id_ ;
      firstName = firstName_ ;
      lastName = lastName_;
      department = department_;
      cycle = cycle_;
      console.log("data done " + cycle);
      speciality = speciality_;
      year = year_;
    }
  });

  document.getElementById("fisrt-name").innerHTML = firstName;
  document.getElementById("last-name").innerHTML = cycle;
  document.getElementById("user-id").innerHTML = id;
  document.getElementById("department-name").innerHTML = department;
  document.getElementById("cycle-name").innerHTML = cycle;
  document.getElementById("speciality-name").innerHTML = speciality;
  document.getElementById("year-date").innerHTML = year;

  $(".div-hide").delay().fadeOut(150);
  setTimeout(function(){
    $(".div-show").fadeIn(1000);  
  }, 150);
}




$(document).ready(function () {
  $("#department").change(function () {
      var val = $(this).val();
      if (val == "item1") {
          $("#cycle").html("<option value='blanck'>Choose Cycle</option><option value='cycleM'>Master</option><option value='cycleL'>Licence</option>");
          $("#year").html("<option value='blanck'>Choose Year</option>");
          $("#speciality").html("<option value=''>Choose Speacialety</option>");
          $("#speciality").hide(500);
        } else if (val == "item2") {
          $("#cycle").html("<option value='blanck'>Choose Cycle</option><option value='cycleM'>Master</option><option value='cycleL'>Licence</option>");
          $("#year").html("<option value='blanck'>Choose Year</option>");
          $("#speciality").html("<option value=''>Choose Speacialety</option>");
          $("#speciality").hide(500);
        } else if (val == "item3") {
          $("#cycle").html("<option value='blanck'>Choose Cycle</option><option value='cycleM'>Master</option><option value='cycleL'>Licence</option>");
          $("#year").html("<option value='blanck'>Choose Year</option>");
          $("#speciality").html("<option value=''>Choose Specialey</option>");
          $("#speciality").hide(500);
        } else if (val == "item0") {
          $("#speciality").hide(500);
        }
  });
});


$(document).ready(function () {
  $("#cycle").change(function () {
      var val = $(this).val();
      if (val == "cycleL") {
          $("#year").html("<option value='blanck'>Choose Year</option><option value='year1'>Licence 1</option><option value='year2'>Licence 2</option><option value='year3'>Licence 3</option>");
          $("#speciality").html("<option value=''>Choose Speacialety</option>");
          $("#speciality").hide(500);
        } else if (val == "cycleM") {
          $("#year").html("<option value='blanck'>Choose Year</option><option value='year4'>Master 1 </option><option value='year5'>Master 2 </option>");
          
          /* */
          // fade in 
          $("#department").fadeToggle(10);
          $("#cycle").fadeToggle(10);
          $("#year").fadeToggle(10);
          // fade out 
          $("#department").fadeToggle(500);
          $("#cycle").fadeToggle(500);
          $("#year").fadeToggle(500);
          /**/
          //fade out 
          $("#speciality").show(500);

          $("#speciality").html("<option value=''>Choose Speacialety</option>");
      } else if(val == "blanck") {
          $("#year").html("<option value='blanck'>Choose Year</option>");
          $("#speciality").hide(500);
      }
  });
});


$(document).ready(function () {
  $("#year").change(function () {
      var val = $(this).val();
      var s = $("#department").val();
      if (((val == "year4")||(val == "year5"))&&(s == "item1")) {
          $("#speciality").html("<option value=''>Choose Speacialety</option><option value='sp1'>GL</option><option value='sp1'>GI</option><option value='sp1'>RT</option>");
      } else if (((val == "year4")||(val == "year5"))&&(s == "item2")) {
          $("#speciality").html("<option value=''>Choose Speacialety</option><option value='sp1'>G il</option><option value='year5'>GM </option>");
      } else {
          $("#speciality").html("<option value=''>Choose Speacialety</option>");
      }
  });
});




$(document).ready(function(){
  $("#dp").click(function(){
    $(".f1").delay(500).fadeToggle(500);
    $("#dp").fadeToggle(500);
    $("#et").fadeToggle(500);
    $('.father-0').css({'height':'auto','margin':'60px auto'});
  });
});


$(document).ready(function(){
  $("#et").click(function(){
    $(".input-toggle").delay(500).fadeToggle(500);
    $("#dp").fadeToggle(500);
    $("#et").fadeToggle(500);
    $('.father-0').css({'height':'auto','margin':'60px auto'});
  });
});



// On change in any of the fields with the class vcheck we run this function
$('.vcheck').change(function() {
    // We store the values of each input field in a variable
    var send = $('#texta').val();
    // We check for null (empty) values
    if (send == '') {
        // When we find something blank set or keep the button to disabled
        $('.btn').addClass('disabled', 'disabled');
    } else {
        // When all conditions are met and values are good we enable the button
        $('.btn').removeClass('disabled');
    }
});




$( "#showtext" ).click(function() {
  $( ".input-toggle" ).fadeToggle();
  $(".inin").delay(300).fadeToggle(1500);
});

