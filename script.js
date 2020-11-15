/* Slideshow stuff */
var homePage = Boolean(window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1) == "index.html");
if (homePage) {
  var slideIndex = 1;
  showDivs(slideIndex);

  function plusDivs(n) {
    showDivs(slideIndex += n);
  }

  function currentDiv(n) {
    showDivs(slideIndex = n);
  }

  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("testy");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-black", "");
    }
    x[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " w3-black";
  }
}

/* Refresh goes back to beginning */
//history.scrollRestoration = "manual";
//window.onload = function() {
//  window.scrollTo(0,0);
//  document.querySelector('html').style.scrollBehavior = '';
//}

/* Dark Mode Implementation */
var modeButton = document.querySelector(".theme-toggle");
var iconType = document.getElementById("sunmoon");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
var currentTheme = localStorage.getItem("theme");
var welcomeMsg = document.getElementById("welcome");

if (currentTheme == "dark") {
  document.body.classList.toggle("dark-mode");
  if (iconType.className == "fas fa-moon") {
    iconType.className = "fas fa-sun";
  }
  if (homePage) {
    welcomeMsg.innerHTML = "Welcome to my dark side.";
  }
} 
else if (currentTheme == "light") {
  document.body.classList.toggle("light-mode");
  if (iconType.className == "fas fa-sun") {
    iconType.className = "fas fa-moon";
  }
  if (homePage) {
    welcomeMsg.innerHTML = "Learn more about me!";
  }
};

modeButton.addEventListener("click", function() {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-mode");
    var theme = document.body.classList.contains("light-mode") ? "light" : "dark";
  } else {
    document.body.classList.toggle("dark-mode");
    var theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
  }
  localStorage.setItem("theme", theme);
  if (theme == "light") {
    if (homePage) {
      welcomeMsg.innerHTML = "Learn more about me!";
    }
    iconType.className = "fas fa-moon";
  }
  else {
    if (homePage) {
      welcomeMsg.innerHTML = "Welcome to my dark side.";
    }
    iconType.className = "fas fa-sun";
  }
});