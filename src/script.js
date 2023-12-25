// on top of the screen the menu tab disappears and displays when start scrolling
var header = document.querySelector(".menu-container");
var header2 = document.querySelector(".menu-container2");

document.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    if (scrollPosition === 0) {
        // header.style.background = "linear-gradient(to right, #67b5ff, #a0e4fa)";
        header.classList.add('bg-secondary');
        header.classList.remove('bg-primary');
        header2.classList.add('bg-secondary');
        header2.classList.remove('bg-primary');
    }
    if (scrollPosition !== 0) {
        // header.style.background = " #a0e4fa";
        header.classList.add('bg-primary');
        header.classList.remove('bg-secondary');
        header2.classList.add('bg-primary');
        header2.classList.remove('bg-secondary');
    }
});