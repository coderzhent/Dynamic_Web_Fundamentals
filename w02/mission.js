const selEl = document.getElementById('theme');
selEl.addEventListener('change', changeTheme);

function changeTheme() {
    const selVal = selEl.value;
    const bdy = document.body
    const logo = document.querySelector("#logo");

    if (selVal === 'light') {
        bdy.removeAttribute('class');
        logo.setAttribute('src', "../w01/byui-logo_blue.webp");
    } else if (selVal === 'dark') {
        bdy.setAttribute('class', 'dark');
        logo.setAttribute('src', "./byui-logo_white.png");
    } else {
        console.log("An error occurred in selecting the theme.");
    }
}