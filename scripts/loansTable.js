const cols1 = document.querySelectorAll('.col1')
const cols1end = document.querySelector('.col1-end')

const cols2 = document.querySelectorAll('.col2')
const cols2end = document.querySelector('.col2-end')

const cols3 = document.querySelectorAll('.col3')
const cols3end = document.querySelector('.col3-end')

function addUp(column, columnEnd, last) {
    let total = 0;
    
    column.forEach((col) => {
        let colNumb = col.innerHTML.match(/\d/g);
        colNumb = colNumb.join("");
        total += Number(colNumb)
        if (last === true) {
            columnEnd.innerHTML = `$${total.toLocaleString()} / month`
        } else {
            columnEnd.innerHTML = `$${total.toLocaleString()}`
        }
    })
}

addUp(cols1, cols1end, false)
addUp(cols2, cols2end, false)
addUp(cols3, cols3end, true)