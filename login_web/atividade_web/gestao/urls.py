from django.urls import path
from . import views

urlpatterns = [
    path('', views.novoprojeto, name='novoprojeto'),
    path('home', views.home, name= '/home'),
]