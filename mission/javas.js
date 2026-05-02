let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
const contentID = document.getElementById("content");

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.style.backgroundColor = "#323232";
        document.body.style.color = "white";
        contentID.style.border = "1px solid white";
        logo.src = "byui-logo-black.png";
    } else {
        // code for changes to colors and logo
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        contentID.style.border = "1px solid black";
        logo.src = "byui-logo-blue.webp";
    }
}