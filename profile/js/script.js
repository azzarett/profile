
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
     let top = window.scrollY;
     let offset = sec.offsetTop - 150;
     let height = sec.offsetHeight;
     let id = sec.getAttribute('id');

     if(top >= offset && top < offset + height) {
        navLinks.forEach(links => {
           links.classList.remove('active');
           document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
     };
  });

  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

};

let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
 }
 
 document.querySelector('#user-btn').onclick = () =>{
    navbar.classList.remove('active');
 }

 window.onscroll = () =>{
    navbar.classList.remove('active');
 }



