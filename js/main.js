"use strict";

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scroll-nav", window.scrollY > 100);
});