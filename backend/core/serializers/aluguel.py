from core.models.transacao import Aluguel, Devolucao
from rest_framework import serializers
from core.models.usuario import Usuario


class AluguelSerializer(serializers.HyperlinkedModelSerializer):
    ciclista = serializers.SlugRelatedField(
        queryset=Usuario.objects.filter(categoria__icontains='Ciclista'),
        slug_field='pk'
    )

    class Meta:
        model = Aluguel
        fields = [
            'bicicleta',
            'ciclista',
            'data_aluguel',
            'devolucao',
            'comentario'
        ]


class DevolucaoSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Devolucao
        fields = [
            'nivel_satisfacao',
            'devolvido',
            'local_entrega',
            'comentario',
            'data_devolucao'
        ]