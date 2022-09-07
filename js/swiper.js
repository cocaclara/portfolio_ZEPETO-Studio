// Swiper - Autoplay, Infinite loop

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(document).ready(function(){
  // $('.swiper-slide-active').;
});