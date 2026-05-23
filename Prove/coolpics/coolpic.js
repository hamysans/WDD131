const gallery = document.querySelector('#content');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');
const menu = document.querySelector('#menu');

gallery.addEventListener('click', openModal);
menu.addEventListener('click', openMenu);

function openModal(e) {
// Code to show modal  - Use event parameter 'e'   
    console.log(e.target.src);
    let imageSrc = e.target.src;

    // select img tag inside dialog, give it src
    modalImage.src = imageSrc.replace("-smll.jpg", "-full.jpg");
    modal.showModal();
}

function openMenu(e) {
    let nav = document.querySelector("ul")
    nav.classList.toggle('hide');
}

// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});