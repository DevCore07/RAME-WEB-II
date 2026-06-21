from django.urls import path
from . import views


urlpatterns = [
    path('', views.login, name='login'),
    path('inicio', views.inicio, name='inicio'),
    path('restricoes', views.restricoes, name='restricoes'),
    path('cardapio', views.cardapio, name='cardapio'),
    path('inicio_nutricionista', views.inicio_nutricionista, name='inicio_nutricionista'),
    path('alunos_nutricionista', views.alunos_nutricionista, name='alunos_nutricionista'),
    path('gerenciar_cardapio_nutricionista', views.gerenciar_cardapio_nutricionista, name='gerenciar_cardapio_nutricionista')
]