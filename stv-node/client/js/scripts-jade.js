$(document).ready(function() {


/* Hover Effect */
  $('.nav li a').hover(function(e) {
    $(this).animate({opacity: .5}, 100);
  }, function() {
    $(this).animate({opacity: 1}, 100);
  });
/* END */

});


/* Dropdown Navigation */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
/* END */
