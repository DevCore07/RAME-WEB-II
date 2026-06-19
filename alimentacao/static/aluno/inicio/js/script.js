// const btn_modo = document.querySelector('.btn_tema')

// const tema = document.documentElement

// const btn_painel = document.querySelector('.botaoPainel.ativo')

// // header
// const modo_img = document.querySelector('.img_tema')
// const sair_img = document.querySelector('.img_sair')

// // menu lateral
// const casa_img = document.querySelector('.img_casa')
// const alerta_img = document.querySelector('.img_alerta')
// const cardapio_img = document.querySelector('.img_cardapio')

// let aux = false;

// btn_modo.addEventListener('click', () => {
//     if (aux == false) {
//         aux = true
//         tema.dataset.theme = 'dark'

//         // header
//         modo_img.src = '/static/aluno/inicio/img/tema_escuro/header/sun-svgrepo-com.svg'
//         sair_img.src = '/static/aluno/inicio/img/tema_escuro/header/logout-svgrepo-com.svg'

//         // menu lateral
//         casa_img.src = '/static/aluno/inicio/img/tema_escuro/painelEsquerdo/inicio/houseWhite.png'
//         alerta_img.src = '/static/aluno/inicio/img/tema_escuro/painelEsquerdo/minhasRestricoes/alert-square-svgrepo-com.svg'
//         cardapio_img.src = '/static/aluno/inicio/img/tema_escuro/painelEsquerdo/cardapioSemanal/calendarWhite.png'
//     } else {
//         aux = false
//         tema.dataset.theme = 'light'

//         // header
//         modo_img.src = '/static/aluno/inicio/img/tema_claro/header/moon-svgrepo-com.svg'
//         sair_img.src = '/static/aluno/inicio/img/tema_claro/header/logout-svgrepo-com.svg'

//         // menu lateral

//         casa_img.src = '/static/aluno/inicio/img/tema_claro/painelEsquerdo/inicio/houseBlack.png'
//         alerta_img.src = '/static/aluno/inicio/img/tema_claro/painelEsquerdo/minhasRestricoes/alert-square-svgrepo-com.svg'
//         cardapio_img.src = '/static/aluno/inicio/img/tema_claro/painelEsquerdo/cardapioSemanal/calendarBlack.png'
//         if (btn_painel.id == 'inicio') {
//             casa_img.src = '/static/aluno/inicio/img/tema_escuro/painelEsquerdo/inicio/houseWhite.png'
//         } else if (btn_painel.id == 'restricoes') {
//             alerta_img.src = '/static/aluno/inicio/img/tema_escuro/painelEsquerdo/minhasRestricoes/alert-square-svgrepo-com.svg'
//         } else if (btn_painel.id == 'cardapio') {
//             cardapio_img.src = '/static/aluno/inicio/img/tema_claro/painelEsquerdo/cardapioSemanal/calendarWhite.png'
//         }
//     }

// })

