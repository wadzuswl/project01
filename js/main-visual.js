var swiper = new Swiper(".mainVisualSwiper", {
  navigation: {
    nextEl: ".main-slide-btn-next",
    prevEl: ".main-slide-btn-prev",
  },
  pagination: {
    el: ".main-slide-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
});