var swiper = new Swiper(".mySwiperBlog", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  /*  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }, */
  loop: true,
  /*  centeredSlides: true, */
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1500: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});
var swiper = new Swiper(".mySwiperComments", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});

var swiperTop = new Swiper(".mySwiperBanner", {
    loop:true,
    loopedSlides: 2
});
var swiperServices = new Swiper(".mySwiperServices", {
  slidesPerView: 2,
  spaceBetween: 0,
  loop:true,

  
  /* autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }, */
});
var swiperBottom = new Swiper(".mySwiperServicesImage", {
    
});
swiperServices.controller.control = [swiperTop, swiperBottom];

AOS.init();
