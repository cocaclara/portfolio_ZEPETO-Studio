// Swiper - Autoplay, Infinite loop, Responsive breakpoints

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 10,
  loop: true,               // 슬라이드 반복
  centeredSlides: true,     // 슬라이트 가운데 배치
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
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
    1440: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});