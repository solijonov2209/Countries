var elButton = document.querySelector(".site-header__btn");
var elHeader = document.querySelector("header");
var elCountriesItems = document.querySelectorAll(".countries__item");
var elCountriesLinks = document.querySelectorAll(".countries__link");
var elLogo = document.querySelector(".site-header__logo");
var elInput =document.querySelector(".hero__input");
var elSelect =document.querySelector(".hero__select"); 
var lightLogoSrc = "./images/logo.svg";
var darkLogoSrc = "./images/logo-night.svg";
var isDarkMode = false;

elButton.addEventListener("click", function(){
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    elLogo.src = darkLogoSrc; 
  } else {
    elLogo.src = lightLogoSrc; 
  }
  document.body.classList.toggle("dark"); 
  elHeader.classList.toggle("site-header-dark"); 
  elButton.classList.toggle("site-header__btn-dark"); 
  elInput.classList.toggle("input-dark")
  elSelect.classList.toggle("select-dark")
  elCountriesItems.forEach(function(item) {
    item.classList.toggle("site-header-dark"); 
  });
  elCountriesLinks.forEach(function(link) {
    link.classList.toggle("countries__link-dark"); 
  });
});
  
