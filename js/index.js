var isOpen = false;

  /* Open when someone clicks on the span element */
function toggleSideBar(){
  if(!isOpen){
    document.getElementById("myNav").style.width = "100%";
    isOpen = true;
  } else {
    document.getElementById("myNav").style.width = "0%";
    isOpen = false;
  }
}

