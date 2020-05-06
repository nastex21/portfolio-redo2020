var isOpen = false;

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

var addNav = '<nav class="navbar navbar-expand-md navbar-dark" style="background-color: #191919;">' +
'<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> ' + 
'<span class="navbar-toggler-icon"></span>' + 
'</button>' +
'<div class="collapse navbar-collapse" id="navbarNav">' +
'<ul class="navbar-nav">' + 
'<li class="nav-item active">' +
'<a class="nav-link" href="/"><span class="navlink-address">Home</span></a>' +
'</li>' +
'<li class="nav-item">' +
'<a class="nav-link" href="/portfolio.html">Portfolio</a>' +
'</li>' +
'<li class="nav-item">' +
'<a class="nav-link" href="/contact.html">Contact</a>' +
'</li>' +
'</ul>' +
'</div>' +
'</nav>'; 

/* function navBarStart() {
console.log('started');

}

navBarStart(); */

/* window.onload = (event) => {
  var start = document.getElementById("nav-bar");
  var end ="<p>Hi</p>";

  start.insertAdjacentHTML('beforeend', addNav);
  console.log(start)
};
 */