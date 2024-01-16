const navItem = document.querySelectorAll('.settings__nav-item')

navItem.forEach((item) => {
    item.addEventListener('click', () => {
        for (let i =0; i < navItem.length; i++) {
            if (navItem[i].classList.contains('active')) {
                navItem[i].classList.remove('active')
            }

            if (!navItem[i].classList.contains('active')) {
                item.classList.add('active')
            }
        }
    })
})