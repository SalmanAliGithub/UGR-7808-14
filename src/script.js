
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
