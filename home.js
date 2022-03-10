const hamburger = document.querySelector(".hamburgermenu");
const navMenu = document.querySelector("#navigation_list");


hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});
