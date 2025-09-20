// script.js - small helpers for mobile menu
const toggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('main-menu');
toggle && toggle.addEventListener('click', ()=>{
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  menu.classList.toggle('show');
});