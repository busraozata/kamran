

$(document).ready(function () {
  $(".services_toggle").click(function () {
    $(".services-menu").animate({ width: "toggle" });
    $(".list").delay("200").fadeToggle("slow");
  });
});

var swiperTop = new Swiper(".mySwiperBanner", {
  spaceBetween: 0,
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
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
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
 /*  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }, */
});
var swiper = new Swiper(".mySwiperBlog", {
  slidesPerView: 3,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
/*   autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }, */
});

let SwiperTopVideo = new Swiper(".swiper--top", {
  spaceBetween: 10,
/*   centeredSlides: true, */
 /*  speed: 8000,
  autoplay: {
    delay: 1,
  }, */
 
  slidesPerView: "2",
/*   allowTouchMove: false,
  disableOnInteraction: true, */

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/* 
const registerVideo = (bound, video) => {
	bound = document.querySelector(bound);
	video = document.querySelector(video);
	const scrollVideo = ()=>{
		if(video.duration) {
			const distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;
			const rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);
			const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);
			
			video.currentTime = video.duration * percentScrolled * 3;
		}
		requestAnimationFrame(scrollVideo);
	}
	requestAnimationFrame(scrollVideo);
}


registerVideo(".services", ".services video"); */




AOS.init();
