"use strict";

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scroll-nav", window.scrollY > 100);
});


const navInput = document.querySelector("#nav-input");
const navLinks = document.querySelectorAll(".nav_drawer_list a[href^='#']");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navInput) {
      navInput.checked = false;
    }
  });
});