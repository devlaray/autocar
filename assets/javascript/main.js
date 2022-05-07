const header = document.querySelector ('header');

  window.addEventListener("scroll", function(){
    header.classList.toggle('scrollheader', window.scrollY >0)
  });
 

// -------------------------click----------------
const navmenu = document.querySelector ('.nav-menu');
const toggle = document.querySelector ('.toggle');
const close = document.querySelector ('.close');

  toggle.addEventListener('click', function(){
    navmenu.classList.toggle('show-menu');
  })
  close.addEventListener('click', function(){
      navmenu.classList.toggle('show-menu');
  })

  window.onscroll = function(){
    navmenu.classList.remove('show-menu');

  }
    

// --------------popular swiper------------------------
let swiperPopular = new Swiper(".popular-container", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    DataView: clearInterval,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    425: {
      slidesPerView: 2,
    },
    940: {
      spaceBetween: 25,
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 40,
      slidesPerView: 4,
    },
  },
});
// -------------- mixit up filter------------------------
var mixerFeatured = mixitup('.featured-content', {
  selectors: {
      target: '.featured-card'
  },
  animation: {
      duration: 300
  }
});
// -------------- link featured active------------------------
const linkFeatured = document.querySelectorAll('.featured-item')
function activeFeatured(){
  linkFeatured.forEach(l=> l.classList.remove('activeFeatured'))
  this.classList.add('activeFeatured')
}
linkFeatured.forEach(l=> l.addEventListener('click', activeFeatured))

// -------------- scroll reveal------------------------
const sr = scrollReveal ({
 origin: 'top',
 distance: '60px',
 duration: 2500,
 delay: 400,
 //reset: true, 
})

sr.reveal(`.home-title`)




