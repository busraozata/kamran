/* var FRAMES = 250;
var FPS = 20;
var video = document.getElementById("video");

window.addEventListener("scroll", function (e) {
  var time = ((window.scrollY / 1000) * FRAMES) / FPS;
  video.currentTime = time;
  console.log(time);
  // alert('Hizo scroll')
});

window.addEventListener("load", function (e) {
  video.pause();
  video.currentTime = 0;
}); */

/* var FRAMES = 250;
var FPS = 20;
var video = document.getElementById("video");

window.addEventListener("scroll", function (e) {
  var time = ((window.scrollY / 1000) * FRAMES) / FPS;
  video.currentTime = time;
  console.log(time);
  // alert('Hizo scroll')
});

window.addEventListener("load", function (e) {
  video.pause();
  video.currentTime = 0;
}); */

/* const registerVideo = (bound, video) => {
  bound = document.querySelector(bound);
  video = document.querySelector(video);
  const scrollVideo = () => {
    if (video.duration) {
      const distanceFromTop =
        window.scrollY + bound.getBoundingClientRect().top;
      const rawPercentScrolled =
        (window.scrollY - distanceFromTop) /
        (bound.scrollHeight - window.innerHeight);
      const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 100);

      video.currentTime = video.duration * percentScrolled;
    }
    requestAnimationFrame(scrollVideo);
  };
  requestAnimationFrame(scrollVideo);
};

registerVideo("#bound-one", "#bound-one video"); */

$(document).ready(function () {
  $(".services_toggle").click(function () {
    $(".services-menu").animate({ width: "toggle" });
    $(".list").delay("200").fadeToggle("slow");
  });
});

var swiperTop = new Swiper(".mySwiperBanner", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  loopedSlides: 3,
});
var swiperServices = new Swiper(".mySwiperServices", {
  spaceBetween: 0,
  slidesPerView: "3",
  touchRatio: 0.2,
  loop: true,
  loopedSlides: 3,
});
swiperTop.controller.control = swiperServices;
swiperServices.controller.control = swiperTop;

var swiper = new Swiper(".mySwiperComments", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".mySwiperBlog", {
  slidesPerView: 4,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
});

let SwiperTop = new Swiper(".swiper--top", {
  spaceBetween: 0,
  centeredSlides: true,
  speed: 8000,
  autoplay: {
    delay: 1,
  },
  loop: true,
  slidesPerView: "1.5",
  allowTouchMove: false,
  disableOnInteraction: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
});

let SwiperBottom = new Swiper(".swiper--bottom", {
  spaceBetween: 0,
  centeredSlides: true,
  speed: 8000,
  autoplay: {
    delay: 1,
    reverseDirection: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
  loop: true,
  loopedSlides: 4,
  slidesPerView: "1.5",
  allowTouchMove: false,
  disableOnInteraction: true,
});

AOS.init();
