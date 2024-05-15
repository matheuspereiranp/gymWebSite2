let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Animação texto digitado na Home Page

const typed = new Typed('.multiple-text', {
    strings: ['Físico em forma', 'Ganho De Massa Muscular', 'Shape Em Dia', 'Perder Gordura'],
    typeSpeed: 60,
    backspeed: 60,
    backDelay: 1000,
    loop: true,
    
  });