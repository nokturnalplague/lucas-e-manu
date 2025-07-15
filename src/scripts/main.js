console.log('nokturnalplague')

//MENU TOGGLE
$(document).ready(function(){
  $('#menu-toggle').click(function(){
    $(this).toggleClass('open');
  });
});

//MENU MOBILE
const menuToggle = document.getElementById('menu-toggle')
const menu = document.querySelector('.menu-mobile')
const links = document.querySelectorAll('.menu-mobile ul a')

let isMenuOpen = false;

menuToggle.addEventListener('click', () => {
  if (isMenuOpen) {
    menu.style.top = '-100vh';
  } else {
    menu.style.top = '0';
  }
  isMenuOpen = !isMenuOpen;
});

links.forEach(link => {
  link.addEventListener('click', () => {
    menu.style.top = '-100vh';
    isMenuOpen = false;
  });
});