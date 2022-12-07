let menu = document.querySelector('#icon');
let navlinks = document.querySelector('#navlinks');

menu.addEventListener('click', () => {
    navlinks.classList.toggle('open')
});