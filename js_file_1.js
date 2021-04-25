// const hamburger= document.querySelector(".hamburger");
// const navlinks = document.querySelector(".nav-links");
// const links = document.querySelectorAll(".nav-links li");
// const lines = document.querySelector(".line");
// var nav_bool= false;

// // ham.addEventListener('click',()=>{
// //   lines.classList.add("linecolor");
// // });



// const mybody= document.querySelector(".mybody");

// mybody.addEventListener('click',()=>{
//   const test_navlinks = document.querySelector(".nav-links");

//   if((test_navlinks.classList.contains('open')) && (nav_bool)){
//     navlinks.classList.remove("open");
//     nav_bool = !nav_bool;
//   }else{
//     nav_bool = !nav_bool;
//   }

// });



/*
jQuery(".hamburger").on("click", function (event) {
  jQuery(this).toggleClass('open');
  event.stopPropagation();
});
jQuery(".sub-menu").on("click", function (event) {
  event.stopPropagation();
});
jQuery(".mybody").on("click", function () {
  jQuery('#menu-button').prop('checked', true); //method of choice: our method uses the input checkbox method as fallback.
  jQuery('#menu-button').removeClass('on');
});
*/



// just for numbers in the input field 
function isNumber(evt) {
  evt = (evt) ? evt : window.event;
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
  }
  return true;
}




// function onReady(callback) {
//   var intervalId = window.setTimeout(function() {
//     if (document.getElementsByTagName('body')[0] !== undefined) {
//       window.clearInterval(intervalId);
//       callback.call(this);
//     }
//   }, 3000);
// }

// function setVisible(selector, display) {
//   document.querySelector(selector).style.display = visible ? 'block' : 'none';
//   //  document.querySelector(selector).style.opacity = x ? 1 : 0;
// }

// onReady(function() {
//   setVisible('.page', true);
//   setVisible('.loadd', false);

// });


