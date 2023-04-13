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

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
});

var swiperTop = new Swiper(".mySwiperBanner", {
  spaceBetween: 0,

  loop: true,
  loopedSlides: 3,
});
var swiperServices = new Swiper(".mySwiperServices", {
  spaceBetween: 0,
  touchRatio: 0.2,
  loop: true,
  loopedSlides: 3,
  slidesPerView: 2,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
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
var swiper = new Swiper(".mySwiperMobileService", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
var swiper = new Swiper(".mySwiperComments", {
  spaceBetween: 60,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
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

/* var swiper = new Swiper(".mySwiperLastDoctorBlog", {
  direction: "vertical",
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
}); */
var swiper = new Swiper(".mySwiperLastPosts", {
  direction: 'vertical',
  slidesPerView: 2,
  loop: true,
  autoplay: {
    delay: 1500,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1366: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },
});
var swiper = new Swiper(".mySwiperVideoSub", {});


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

var tabChange = function () {
  var tabs = $(".nav-tabs > button");
  var active = tabs.filter(".active");
  var next = active.next("button").length
    ? active.next("button")
    : tabs.filter(":first-child");
  next.tab("show");
};
var tabCycle = setInterval(tabChange, 6000);
$(function () {
  $(".nav-tabs button").click(function (e) {
    e.preventDefault();
    clearInterval(tabCycle);
    $(this).tab("show");
    setTimeout(function () {
      tabCycle = setInterval(tabChange, 6000);
    }, 6000);
  });
});

$("#preloader")
  .delay(1000)
  .fadeOut("slow", function () {
    $(this).remove();
  });


AOS.init();
