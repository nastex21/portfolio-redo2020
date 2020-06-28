var isOpen = false;
$(document).ready(function(){
  $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
    
    $(".zoom").hover(function(){
		
		$(this).addClass('transition');
	}, function(){
        
		$(this).removeClass('transition');
	});
});

/* Open when someone clicks on the span element */
function toggleSideBar() {
  if (!isOpen) {
    document.getElementById("myNav").style.width = "100%";
    isOpen = true;
  } else {
    document.getElementById("myNav").style.width = "0%";
    isOpen = false;
  }
}

// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function () {
  const burgerID = document.getElementById("burgerButton");
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu

  if (burgerID.classList.contains("is-active")) {
    document.getElementById("myNav").style.width = "100%";
  } else {
    document.getElementById("myNav").style.width = "0%";
  }
});