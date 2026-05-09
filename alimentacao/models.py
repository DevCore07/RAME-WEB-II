from django.db import models

# Create your models here.

class Restricao_Alimentar(models.Model):
    nome_restricao = models.CharField(
        max_length=100
    )

    tipo_restricao = models.CharField(
        max_length=100
    )

    descricao_restricao = models.CharField(
        max_length=200
    )

    gravidade_restricao = models.CharField(
        max_length=100
    )

    def __str__(self):
        return self.nome_restricao