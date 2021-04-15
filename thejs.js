const hamburger= document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

var nav_bool= false;

hamburger.addEventListener('click',()=>{
  navlinks.classList.add("open");
  console.log("hamburger");

});

const mybody= document.querySelector(".mybody");

mybody.addEventListener('click',()=>{
  const test_navlinks = document.querySelector(".nav-links");

  if((test_navlinks.classList.contains('open')) && (nav_bool)){
    navlinks.classList.remove("open");
    nav_bool = !nav_bool;
  }else{
    nav_bool = !nav_bool;
  }

});



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
