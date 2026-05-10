const button = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

button.addEventListener("click", function() {
    nav.classList.toggle('hide');
    button.classList.toggle("change");
});