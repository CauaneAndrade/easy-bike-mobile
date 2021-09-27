from core.models.bicicleta import Bicicleta
from core.models.usuario import Usuario
from django.db import models
from django.utils.translation import gettext_lazy as _


class Devolucao(models.Model):
    class NivelSatisfacao(models.TextChoices):
        BOM = 'B', _('Bom')
        OTIMO = 'O', _('Ótimo')
        RUIM = 'R', _('Ruim')

    nivel_satisfacao = models.CharField(
        max_length=2,
        choices=NivelSatisfacao.choices,
        default=NivelSatisfacao.OTIMO,
    )
    devolvido = models.BooleanField()
    local_entrega = models.TextField()
    comentario = models.TextField()
    data_devolucao = models.DateField(auto_now=True)


class Aluguel(models.Model):
    bicicleta = models.ForeignKey(
        Bicicleta, on_delete=models.CASCADE
    )
    ciclista = models.ForeignKey(
        'Usuario', on_delete=models.CASCADE
    )
    data_aluguel = models.DateField(auto_now=True)
    devolucao = models.ForeignKey(
        Devolucao, on_delete=models.CASCADE, blank=True, null=True
    )
    comentario = models.TextField()
