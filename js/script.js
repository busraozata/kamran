const menuToggle = document.querySelector("#toggle-btn");
const navigation = document.querySelector(".navigation");
menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");

  if (menuToggle.innerHTML === `<i class="fa-solid fa-xmark"></i>`) {
    menuToggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  } else {
    menuToggle.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  }
};
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
  touchRatio: 0.2,
  loop: true,
  loopedSlides: 3,
  slidesPerView: 1,
   autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 00,
    },
    1650: {
      slidesPerView: 3,
      spaceBetween: 00,
    },
  },
});
swiperTop.controller.control = swiperServices;
swiperServices.controller.control = swiperTop;

var swiper = new Swiper(".mySwiperComments", {
  spaceBetween: 60,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  /*  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }, */
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 1,
      spaceBetween: 00,
    },
    1650: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
  },
});
var swiper = new Swiper(".mySwiperBlog", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: {
    eventsTarged: ".swiper-slide",
    sensitivity: 5,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1440: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1650: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
  },
  /*   autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }, */
});

var swiper = new Swiper(".mySwiperLastBlog", {
  slidesPerView: 3,
  spaceBetween: 70,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 70,
    },
  },
});

let SwiperTopVideo = new Swiper(".swiper--top", {
  spaceBetween: 0,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 2,
      spaceBetween: 00,
    },
    1650: {
      slidesPerView: 2,
      spaceBetween: 00,
    },
  },
});
var swiper = new Swiper(".mySwiperSSS", {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
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
