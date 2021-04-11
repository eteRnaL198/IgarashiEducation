// hamburgerMenu_back
const back = document.getElementById("js-hamburgerMenu_back");
const menu = document.getElementById("js-hamburgerMenu");
const button = document.getElementById("js-hamburgerMenu_button");

const toggleMenu = () => {
  menu.classList.toggle("u-hidden");
  back.classList.toggle("u-hidden");
}

back.addEventListener('click', () => {
  toggleMenu();
});
button.addEventListener('click', () => {
  toggleMenu();
});


// scrollReveal