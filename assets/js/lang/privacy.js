const btn_pe = document.getElementById('button_pe')
const btn_us = document.getElementById('button_us')

btn_pe.addEventListener('click', (e) => {
    btn_pe.classList.add('lang-active')
    btn_us.classList.remove('lang-active')
})

btn_us.addEventListener('click', (e) => {
    btn_pe.classList.remove('lang-active')
    btn_us.classList.add('lang-active')
})