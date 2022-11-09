const open = document.querySelector(".header__top-hamburger");
const close = document.querySelector(".header__close");
const headerTopNav = document.querySelector(".header__topNav");
const headerBottom = document.querySelector(".header__bottom");
const headerTop = document.querySelector(".header__top");
const container = document.querySelector(".container");
const width1200 = window.matchMedia("(max-width: 1200px)");
const menu = document.createElement("div");

function mediaQuery(size) {
  if (size.matches) {
    menu.style.background = "rgb(187, 177, 177)";
    menu.style.height = "100vh";
    menu.style.position = "fixed";
    menu.style.top = "0";
    menu.style.width = "100%";
    menu.style.display = "block";
    menu.style.transition = "all 0.6s linear";
    menu.style.transform = "translate(100%)";
    document.body.append(menu);
    menu.append(headerTopNav);
    menu.append(headerBottom);
  } else {
    menu.style.display = "none";
    headerTop.append(headerTopNav);
    container.append(headerBottom);
  }
}

mediaQuery(width1200);
width1200.addListener(mediaQuery);

//click
open.addEventListener("click", () => {
  menu.style.transform = "translate(0)";
});

//close
close.addEventListener("click", () => {
  menu.style.transform = "translate(100%)";
});
