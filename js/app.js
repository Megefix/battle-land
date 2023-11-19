const swiper = new Swiper(".swiper", {
  direction: "vertical",
  autoplay: {
    delay: 2000,
  },
  noSwiping: true,
});

const open = document.querySelector(".open");
const close = document.querySelector(".close");
const nav = document.querySelector(".mobile-nav");
const fade = document.querySelector(".mobile-nav-fade");

open.onclick = function () {
  $(open).slideToggle(100);
  $(close).slideToggle(500);
  nav.classList.toggle("mobile-nav--open");
  fade.classList.toggle("mobile-nav-fade--open");
  document.body.classList.toggle("no-scroll");
};
close.onclick = function () {
  $(open).slideToggle(100);
  $(close).slideToggle(500);
  nav.classList.toggle("mobile-nav--open");
  fade.classList.toggle("mobile-nav-fade--open");
  document.body.classList.toggle("no-scroll");
};

const scrollBtn = document.querySelectorAll("[data-scroll='']");

scrollBtn.forEach(function (item) {
  item.onclick = function () {
    $(open).slideToggle(100);
    $(close).slideToggle(500);
    nav.classList.toggle("mobile-nav--open");
    fade.classList.toggle("mobile-nav-fade--open");
    document.body.classList.toggle("no-scroll");
  };
});

const blankContainer = document.querySelector("#blank");

window.addEventListener("resize", function () {
  const viewport__width = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  if (viewport__width <= 426) {
    blankContainer.classList.remove("container");
  }
});

AOS.init();
