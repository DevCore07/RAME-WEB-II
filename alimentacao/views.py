from django.shortcuts import render, redirect
from django.contrib.auth import login as auth_login, authenticate


dicionario_restricoes = [
    {
        "restricao": "Intolerância à Lactose",
        "status": "ativado",
        "valor": "1"
    },
    {
        "restricao": "Intolerância ao Glúten (Celíaco)",
        "status": "desativado",
        "valor": "2"
    },
    {
        "restricao": "Alergias à castanhas/amemdoim",
        "status": "desativado",
        "valor": "3"
    },
    {
        "restricao": "Alergias à frutos do mar",
        "status": "desativado",
        "valor": "4"
    },
    {
        "restricao": "Alergia à Ovos",
        "status": "desativado",
        "valor": "5"
    },
    {
        "restricao": "Alergia à sojja",
        "status": "desativado",
        "valor": "6"
    }
]


# Create your views here.

def login(request):
    if request.method == 'POST':
        matricula = request.POST['matricula']
        senha = request.POST['senha']

        user = authenticate(
            request,
            username=matricula,
            password=senha
        )

       

        if user is not None:
            auth_login(request, user)
            return redirect('inicio')
        else:
            return redirect('inicio_nutricionista')
    return render(request, 'login/login.html')

def inicio(request):
    return render(request, 'aluno/inicio/inicio.html', context={'lista': dicionario_restricoes})

def restricoes(request):
    if request.method == 'POST':
        valor = request.POST.getlist('restricao')
        for rest in dicionario_restricoes:
            if rest['valor'] not in valor:
                rest['status'] = 'desativado'
            else:
                rest['status'] = 'ativado'
                
    return render(request, 'aluno/restricoes/restricoes.html', context={'lista': dicionario_restricoes})


def cardapio(request): 
    return render(request, 'aluno/cardapio/cardapio.html')

def inicio_nutricionista(request):
    return render(request, 'nutricionista/inicio/inicioNutricionista.html')

def alunos_nutricionista(request):
    return render(request, 'nutricionista/alunos/alunos.html')

def gerenciar_cardapio_nutricionista(request):
    return render(request, 'nutricionista/gerenciar_cardapio/cardapio_nutricionista.html')
