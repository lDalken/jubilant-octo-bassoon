/* SHOE MENU ELEMENTS*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*MENU SHOW*/
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
    })
}

/*MENU HIDDEN*/
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    })
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () =>{
    navMenu.classList.remove('show-menu');
};

navLink.forEach(link => link.addEventListener('click', linkAction));

/*======= CHANGE BACKGROUND HEADER ======*/
const scrollHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header');
};

window.addEventListener('scroll', scrollHeader);

/*=========== SWIPER POPULAR =========*/
/*const popularSwiper = new Swiper('.popular__content', {
 // Optional parameters
 slidesPerView: 'auto',
 centeredSlides: true,
 loop: true,

 // Navigation arrows
 navigation: {
   nextEl: '.swiper-button-next',
   prevEl: '.swiper-button-prev',
 },
*/