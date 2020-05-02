function myFunction() {
    var w = window.outerWidth;
    var getID = document.getElementById("nav-bar");

    if (w < 768){
        console.log(w)
        getID.className = "sticky-top"
    }
  }
