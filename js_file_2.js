var color1;
var color2;
var color3;
var bool1 = false;

$(document).ready(function(){
  $(".slider").click(function(){
    $(".chart-style").toggleClass("chart-style-dark");
    toggleColor();
  });
});


function toggleColor(){
  if(bool1){
    color1 = 'red';
    bool1 = false;
  }else{
    color1='blue';
    bool1 = true;
  }
}




function onReady(callback) {
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 3000);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function() {
  setVisible('.page', true);
  setVisible('.center-dot', false);
});


/****************** */

/**********    for image  */

$(document).ready(function(){
  $(".mode").click(function(){
    $(".chart-style").toggleClass("chart-style-dark");
    toggleImg();

  });
});


function toggleImg(){
  var s1 = "https://www.w3schools.com/css/ocean.jpg";
  var s2 = "https://www.w3schools.com/w3css/img_avatar3.png"
  var myimg = document.getElementById("tgimg").src;
  if(myimg == s1){
    $("#tgimg").attr("src",s2);
  }else{
    $("#tgimg").attr("src",s1);
  }
}
/*************** end for image  */


$('table tr').each(function(){
  $(this).find('th').first().addClass('first');
  $(this).find('th').last().addClass('last');
  $(this).find('td').first().addClass('first');
  $(this).find('td').last().addClass('last');
});

$('table tr').first().addClass('row-first');
$('table tr').last().addClass('row-last');