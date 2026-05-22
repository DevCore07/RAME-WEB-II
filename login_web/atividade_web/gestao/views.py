from django.shortcuts import render

# Create your views here.

lista_gestao = []


def novoprojeto(request):
    return render(request, 'novoprojeto/index.html')


def home(request):
    if request.method == "POST":
        eventos = request.POST.get('eventos')
        locais = request.POST.get('local')
        
        item = {
            'Eventos' : eventos,
            'Local' : locais
        }
        lista_gestao.append(item)
    return render(request, 'home/index.html', context={'lista' : lista_gestao})