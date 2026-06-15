const btn_modo = document.querySelector('.btn_tema')

const main = document.querySelector('main')

let aux = false;

btn_modo.addEventListener('click', () => {
    if (aux == false) {
        aux = true
        main.classList.add('mainEscuro')
    } else {
        aux = false
        main.classList.remove('mainEscuro')
    }
})