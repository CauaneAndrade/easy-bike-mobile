from core.models.bicicleta import Bicicleta
from core.models.usuario import Usuario
from django.db import models
from rest_framework import serializers
from rest_framework import generics
from django.http import JsonResponse


class BicicletaSerializer(serializers.HyperlinkedModelSerializer):
    dono = serializers.SlugRelatedField(
        queryset=Usuario.objects.filter(categoria__icontains='Dono'),
        slug_field='pk'
    )

    class Meta:
        model = Bicicleta
        fields = [
            'id',
            'dono',
            'estilo',
            'marca',
            'ano_fabricacao',
            'foto'
        ]