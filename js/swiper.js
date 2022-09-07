// Swiper - Autoplay, Infinite loop, Responsive breakpoints

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,               // 슬라이드 반복
  centeredSlides: true,     // 슬라이트 가운데 배치
  
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
    zoom: {
      maxRatio: 2,
      minRatio: 1
    },
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});

$(document).ready(function(){
    // $('.swiper-slide-active').find('.profile-box').show();
});