// navigation menu for phone (burger-nav)
const burger = document.getElementById("menu-burger");
const landingPage = document.getElementById("myNav");
const times = document.getElementById("closebtn");
const brand = document.getElementById("logo");

burger.addEventListener('click', () => {
    landingPage.style.width = "100%";
    landingPage.style.display = "block";
    burger.style.display = "none";
    brand.style.display = "block";
})

times.addEventListener('click', () => {
    landingPage.style.width = "0%";
    burger.style.display = "flex";
    landingPage.style.display = "none";
    brand.style.display = "block";
})


// on top of the screen the menu tab disappears and displays when start scrolling
document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector(".menu-container");
    var landing = document.querySelector(".landing-page");
    document.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;

        if (scrollPosition === 0) {
            header.style.background = "linear-gradient(to right, #67b5ff, #a0e4fa)";
        } else {
            header.style.backgroundColor = "#a0e4fa";
        }
    });
});


