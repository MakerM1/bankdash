const navItem = document.querySelectorAll('.settings__nav-item')
const navContent1 = document.getElementById('settings__edit-profile')
const navContent2 = document.getElementById('settingsPreferences') 
const navContent3 = document.getElementById('settingsSecurity')
const saveButton = document.getElementById('settingsSave')

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
            navContent2.style.display = 'none'
            navContent3.style.display = 'none'
            saveButton.setAttribute('form', 'settings__form-1') 
        } else if (navItem[1].classList.contains('active')) {
            navContent1.style.display = 'none'
            navContent2.style.display = 'flex'
            navContent3.style.display = 'none'
            saveButton.setAttribute('form', 'settings__form-2')
        }else if (navItem[2].classList.contains('active')) {
            navContent1.style.display = 'none'
            navContent2.style.display = 'none'
            navContent3.style.display = 'block'
            saveButton.setAttribute('form', 'settings__form-3')
        }
    })
})