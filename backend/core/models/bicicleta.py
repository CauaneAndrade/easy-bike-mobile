from core.models.usuario import Usuario
from core.models.utils import Foto
from django.db import models
from django.utils.translation import gettext_lazy as _


class Bicicleta(models.Model):
    class Estilo(models.TextChoices):
        ESPORTIVA = 'Esportiva', _('Esportiva')
        PASSEIO = 'Passeio', _('Passeio')
        HIBRIDA = 'Hibrida', _('Hibrida')
        OUTRO = 'Outro', _('Outro')

    dono = models.ForeignKey(
        Usuario, on_delete=models.CASCADE
    )
    estilo = models.CharField(
        max_length=25,
        choices=Estilo.choices
    )
    marca = models.CharField(max_length=30)
    ano_fabricacao = models.DateField()
    foto = models.ForeignKey(
        Foto, on_delete=models.CASCADE,
        blank=True, null=True
    )
