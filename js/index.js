/* function myFunction() {
    var w = window.outerWidth;
    var getID = document.getElementById("nav-bar");

 /*    if (w < 768){
        console.log(w)
        getID.className = "fixedNav"
    } */

  /* Open when someone clicks on the span element */
function openNav() {
    
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
