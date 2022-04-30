const header = document.querySelector ('header');

window.addEventListener("scroll", scrollHeader)
function scrollHeader(){
if (this.scrollY >= 50) header.classList.add ("scrollheader"); else header.classList.remove('scrollheader');
}

// -------------------------click----------------
const navmenu = document.querySelector ('nav-menu'),
    toggle = document.querySelector ('.toggle'),
    close = document.querySelector ('.close')

if(toggle){
    toggle.addEventListener('click', function(){
        toggle.classList.add('show-menu');
    })
    
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
      slidesPerView: 4,
    },
    1024: {
      spaceBetween: 48,
    },
  },
});