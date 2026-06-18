const btn_modo = document.querySelector('.btn_tema')

const tema = document.documentElement

const btn_modo_img = document.querySelector('.img_tema')

let aux = false;

btn_modo.addEventListener('click', () => {
    if (aux == false) {
        aux = true
        tema.dataset.theme = 'dark'
        btn_modo_img.src = '/static/aluno/inicio/img/header/icons8-logout-100.png'
    } else {
        aux = false
        tema.dataset.theme = 'light'
        btn_modo_img.src = '/static/aluno/inicio/img/header/moon-svgrepo-com.svg'
    }
})