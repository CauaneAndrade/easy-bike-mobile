from core.models.transacao import Aluguel
from core.serializers.aluguel import AluguelSerializer, DevolucaoSerializer
from rest_framework import viewsets

class AluguelViewSet(viewsets.ModelViewSet):
    queryset = Aluguel.objects.all()
    serializer_class = AluguelSerializer


class DevolucaoViewSet(viewsets.ModelViewSet):
    queryset = Aluguel.objects.all()
    serializer_class = DevolucaoSerializer
