const btn_modo = document.querySelector('.btn_tema')

const tema = document.documentElement

const btn_painel = document.querySelector('.botaoPainel.ativo')

// header
const modo_img = document.querySelector('.img_tema')
const sair_img = document.querySelector('.img_sair')

// menu lateral
const casa_img_all = document.querySelectorAll('.img_casa')
const alerta_img_all = document.querySelectorAll('.img_alerta')
const cardapio_img_all = document.querySelectorAll('.img_cardapio')

const user_img_all = document.querySelectorAll('.img_alerta.people')
const forkSkife_img_all = document.querySelectorAll('.img_cardapio.forkSkife')

const temaSalvo = localStorage.getItem('tema') || 'light'

tema.dataset.theme = temaSalvo
aplicarTema(temaSalvo)

function aplicarTema(temaEscolhido) {
    if (temaEscolhido == 'light') {
        // header
        modo_img.src = '/static/aluno/inicio/img/tema_claro/header/moon-svgrepo-com.svg'
        sair_img.src = '/static/aluno/inicio/img/tema_claro/header/logout-svgrepo-com.svg'

        // menu lateral

        casa_img_all.forEach(img => {
            img.src = '/static/aluno/inicio/img/tema_claro/painelEsquerdo/inicio/houseBlack.png'
        })

        alerta_img_all.forEach(img => {
            img.src = '/static/aluno/inicio/img/tema_claro/painelEsquerdo/minhasRestricoes/alert-square-svgrepo-com.svg'
        })
    
        cardapio_img_all.forEach(img => {
            img.src = '/static/aluno/inicio/img/tema_claro/painelEsquerdo/cardapioSemanal/calendarBlack.png'
        })

        user_img_all.forEach(img => {
            img.src = '/static/nutricionista/inicio/img/tema-claro/painel-esquerdo/people.png'
        })
        forkSkife_img_all.forEach(img => {
            img.src = '/static/nutricionista/inicio/img/tema-claro/painel-esquerdo/forkSkife.svg'
        })

        if (btn_painel.id == 'inicio') {
            casa_img_all.forEach(img => {
                img.src = '/static/aluno/inicio/img/tema_escuro/painelEsquerdo/inicio/houseWhite.png'
            })

            casa_img_all.forEach(img => {
                img.src = '/static/nutricionista/inicio/img/tema-claro/painel-esquerdo/houseWhite.png'
            })
        } else if (btn_painel.id == 'restricoes') {
            alerta_img_all.forEach(img => {
                img.src = '/static/aluno/inicio/img/tema_escuro/painelEsquerdo/minhasRestricoes/alert-square-svgrepo-com.svg'
            })

            user_img_all.forEach(img => {
                img.src = '/static/nutricionista/inicio/img/tema-escuro/painel-esquerdo/people.png'
            })
        } else if (btn_painel.id == 'cardapio') {
            cardapio_img_all.forEach(img => {
                img.src = '/static/aluno/inicio/img/tema_escuro/painelEsquerdo/cardapioSemanal/calendarWhite.png'
            })

            forkSkife_img_all.forEach(img => {
                img.src = '/static/nutricionista/inicio/img/tema-escuro/painel-esquerdo/forkSkife.svg'
            })
        }


        
    } else {

        // header
        modo_img.src = '/static/aluno/inicio/img/tema_escuro/header/sun-svgrepo-com.svg'
        sair_img.src = '/static/aluno/inicio/img/tema_escuro/header/logout-svgrepo-com.svg'

        // menu lateral
        casa_img_all.forEach(img => {
            img.src = '/static/aluno/inicio/img/tema_escuro/painelEsquerdo/inicio/houseWhite.png'
        })
        
        alerta_img_all.forEach(img => {
            img.src = '/static/aluno/inicio/img/tema_escuro/painelEsquerdo/minhasRestricoes/alert-square-svgrepo-com.svg'
        })
    
        cardapio_img_all.forEach(img => {
            img.src = '/static/aluno/inicio/img/tema_escuro/painelEsquerdo/cardapioSemanal/calendarWhite.png'
        })

        user_img_all.forEach(img => {
            img.src = '/static/nutricionista/inicio/img/tema-escuro/painel-esquerdo/people.png'
        })

        forkSkife_img_all.forEach(img => {
            img.src = '/static/nutricionista/inicio/img/tema-escuro/painel-esquerdo/forkSkife.svg'
        })

    }
}
btn_modo.addEventListener('click', () => {
    const temaAtual = localStorage.getItem('tema') || 'light'

    if (temaAtual === 'light') {
        localStorage.setItem('tema', 'dark')
        tema.dataset.theme = 'dark'
        aplicarTema('dark')
    } else {
        localStorage.setItem('tema', 'light')
        tema.dataset.theme = 'light'
        aplicarTema('light')
    }
})

