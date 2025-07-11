function toggleMenu() {
    navSec.classList.toggle('hide');
}

function handleResize() {
    const width = window.innerWidth;

    if (width >= 1000) {
        navSec.classList.remove('hide');
        menuBtn.classList.add('hide');
    } else {
        navSec.classList.add('hide');
        menuBtn.classList.remove('hide');
    }
}

function closeModal() {
    bigPic.src = "";
    dialog.close();
}

const menuBtn = document.getElementById("menuButton");
const navSec = document.getElementById("navLinks");
const dialog = document.querySelector(".imgView");
const bigPic = dialog.querySelector("img");
const imgs = document.querySelector(".gallery");
const closeBtn = document.querySelector(".close-viewer");

menuBtn.addEventListener('click', toggleMenu);
window.addEventListener('resize', handleResize);
closeBtn.addEventListener('click', closeModal);

imgs.addEventListener('click', (event) => {
    const img = event.target.closest('img');
    if ((img !== null) && (img.tagName === "IMG")) {
        const imgSrc = img.src.split('-')[0] + "-full.jpeg";
        bigPic.src = imgSrc;
        dialog.showModal();
    } else {
        console.log("Didn't click an image.");
    }
});


dialog.addEventListener('click', (event) => {
    if (event.target === dialog || event.target.tagName === "DIV") {
        closeModal();
    }
});

handleResize();