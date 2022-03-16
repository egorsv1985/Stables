let btnBurger = document.querySelector('.header__burgerBtn');
// let btnClose = document.querySelector('.header__close-btn');
let burgerMenu = document.querySelector('.header__menu');
console.log(document.querySelector(".header__menu"))
function openMenu(){
    burgerMenu.classList.toggle('header__menu--hidden');
    burgerMenu.classList.toggle('header__menu--visible');
    console.log(burgerMenu)
}
btnBurger.onclick = openMenu;
// btnClose.onclick = openMenu;