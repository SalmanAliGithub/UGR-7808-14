const burger = document.querySelector('#burger');
const landing = document.querySelector('#landing-page');
const items = document.querySelector('.navbar-menu');

burger.addEventListener('click', () => {
    landing.classList.toggle('is-active');
    items.style.width = "100%";
});
