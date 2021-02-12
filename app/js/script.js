const btnHamburguer = document.querySelector("#btnHamburguer");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElements = document.querySelectorAll(".has-fade");
const body = document.querySelector("body");

btnHamburguer.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    body.classList.remove("noscroll");
    fadeElements.forEach(function (element) {
      element.classList.add("fade-out");
      element.classList.remove("fade-in");
    });
  } else {
    header.classList.add("open");
    body.classList.add("noscroll");
    fadeElements.forEach(function (element) {
      element.classList.add("fade-in");
      element.classList.remove("fade-out");
    });
  }
});
