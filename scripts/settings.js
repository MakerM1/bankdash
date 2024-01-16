const navItem = document.querySelectorAll('.settings__nav-item')
const navContent1 = document.getElementById('settings__edit-profile')

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

        if (navItem[0].classList.contains('active')) {
            navContent1.style.display = 'flex'
        } else {
            navContent1.style.display = 'none'
        }
    })
})