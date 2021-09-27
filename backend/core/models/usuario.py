from django.contrib.auth.models import User
from django.db import models
from django.utils.translation import gettext_lazy as _


class Usuario(models.Model):
    class Categoria(models.TextChoices):
        CICLISTA = 'Ciclista', _('Ciclista')
        DONO = 'Dono', _('Dono')
    
    categoria = models.CharField(
        max_length=10,
        choices=Categoria.choices
    )
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    documento = models.CharField(max_length=11)
    endereco = models.TextField()

    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name} - id: {self.user.pk}"
