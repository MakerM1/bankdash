const hamburgerMenu = document.querySelector('.header__hamburger-menu')
const sidebar = document.querySelector('.side-bar')
const overlay = document.querySelector('.overlay')

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active')
    sidebar.classList.toggle('active')
    overlay.classList.toggle('active')
})

overlay.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active')
    sidebar.classList.remove('active')
    overlay.classList.remove('active')
})

const sideBarId = document.getElementById('side-bar')

function adjustHeight() {
    sideBarId.style.height = document.body.clientHeight + 20 + "px";
}

window.addEventListener("load", adjustHeight);
adjustHeight();
console.log(document.body.clientHeight)