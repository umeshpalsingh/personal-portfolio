
let myNavbar = document.getElementById('navbar');

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        myNavbar.style.backdropFilter = "blur(7px)";
        myNavbar.style.background = 'background-color: rgba(10, 10, 10, 0.9);';
    } else {
        mybutton.style.display = "none";
    }
}
