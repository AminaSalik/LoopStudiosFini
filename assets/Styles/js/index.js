document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('header__menu');
    const header = document.querySelector('.header');
    const overlay = document.querySelector('.header__overlay');
    const links = document.querySelector('.header__links');

    menu.addEventListener('click', () => {
        header.classList.toggle('open');
        overlay.classList.toggle('open');
        links.classList.toggle('open');
    });

});