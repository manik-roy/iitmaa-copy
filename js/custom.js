/* eslint-disable*/

var dropdown1Submenu = document.querySelector('.dropdown-first');

$(".alumini-submenu").click(function(){
  $(".dropdown-first").toggleClass("showdropdown");
});

// Close  dropdown 
window.onclick = function(event) {
  
  if (!event.target.matches('.dropbtn1')) {
    var dropdownsone = document.querySelector(".dropdown-first");
  
    dropdownsone.classList.forEach(cl => {
      if(cl =='showdropdown') {
        dropdown1Submenu.classList.remove('showdropdown')
      }
    })
  }
}
