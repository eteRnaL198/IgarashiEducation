// hamburgerMenu_back
(() => {
  const back = document.getElementById("js-hamburgerMenu_back");
  const menu = document.getElementById("js-hamburgerMenu");
  back.addEventListener('click', () => {
    menu.classList.toggle("u-hidden");
  });
})();


// scrollReveal