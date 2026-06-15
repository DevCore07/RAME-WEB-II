const btn_modo = document.querySelector('.btn_tema')

const main = document.querySelector('main')

let aux = false;

btn_modo.addEventListener('click', () => {
    if (aux == false) {
        aux = true
        btn_modo.innerText = 'Modo Claro'
        main.classList.add('mainEscuro')
    } else {
        aux = false
        btn_modo.innerText = 'Modo Escuro'
        main.classList.remove('mainEscuro')
    }
})