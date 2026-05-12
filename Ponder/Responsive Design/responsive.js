let menuButton = document.querySelector(".menu-btn");

menuButton.addEventListener("click", handleMenu) 

function handleMenu() {
    let nav = document.querySelector("nav");
    nav.classList.toggle('hide');
    menuButton.classList.toggle("change");
}