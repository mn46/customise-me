const hamburger = document.querySelector(".hamburgermenu");
const navMenu = document.querySelector("#navigation_list li a");

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelector("#navigation_list li a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))