let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
// menu.addEventListener("click", dosomething, false);
// const dosomething = () => {
//   menu.classList.toggle("fa-times");
//   navbar.classList.toggle("active");
// };
window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};
let searchicon = document.querySelector("#search-icon");
let searchform = document.querySelector("#search-form");
searchicon.addEventListener("click", dosomething, false);

function dosomething() {
  searchform.classList.toggle("active");
}
dosomething();
let cancel = document.querySelector("#close");
cancel.addEventListener("click", dosome, false);
function dosome() {
  searchform.classList.remove("active");
}
dosome();
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
