// navigation menu for phone (burger-nav)
const burger = document.getElementById("burger");
const landingPage = document.getElementById("landing-page");
const activate = document.querySelector(".navbar-menu")

burger.addEventListener('click', () => {
    activate.classList.toggle('is-active');
    landingPage.style.background = "rgb(144, 223, 250)";
});