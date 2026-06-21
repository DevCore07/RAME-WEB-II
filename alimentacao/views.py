from django.shortcuts import render, redirect
from django.contrib.auth import login as auth_login, authenticate

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
    return render(request, 'aluno/inicio/inicio.html')

def restricoes(request):
    return render(request, 'aluno/restricoes/restricoes.html')


def cardapio(request): 
    return render(request, 'aluno/cardapio/cardapio.html')

def inicio_nutricionista(request):
    return render(request, 'nutricionista/inicio/inicioNutricionista.html')

def alunos_nutricionista(request):
    return render(request, 'nutricionista/alunos/alunos.html')
