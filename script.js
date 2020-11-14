/* Slideshow stuff */
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

/* Refresh goes back to beginning */
//history.scrollRestoration = "manual";
//window.onload = function() {
//  window.scrollTo(0,0);
//  document.querySelector('html').style.scrollBehavior = '';
//}

/* Dark Mode Implementation */
const themeButton = document.querySelector('.theme-toggle');
const theme = document.querySelector('#theme-link');

themeButton.addEventListener("click", function() {
  if (theme.getAttribute("href") == "light-theme.css") {
    theme.href = "dark-theme.css";
  }
  else {
    theme.href = "light-theme.css";
  }
});