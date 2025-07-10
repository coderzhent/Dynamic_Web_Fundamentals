const menuBtn = document.getElementById("menuButton");
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    // const navSec = document.getElementById("navLinks");
    // const navStyle = window.getComputedStyle(navSec);
    // const navState = navStyle.display;
    let navState = document.getElementById("navLinks").style.display;

    if (navState === "block") {
        document.getElementById("navLinks").style.display = 'none';
    } else {
        document.getElementById("navLinks").style.display = 'block';
    }

    console.log("State of the nav section:", navState);
}