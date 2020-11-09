$(document).ready(function () {
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    document.querySelector(".mobile-menu").classList.toggle("mobile-menu--visible");
  });
});