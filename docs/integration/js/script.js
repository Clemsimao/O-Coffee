document.addEventListener('DOMContentLoaded', function () {
    const menuBurger = document.querySelector('.menu-burger');
    const mainMenu = document.querySelector('.main-menu');

    menuBurger.addEventListener('click', function () {
        mainMenu.classList.toggle('active');
    });
});
