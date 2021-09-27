from core.models.bicicleta import Bicicleta
from core.serializers.bicicleta import BicicletaSerializer
from rest_framework import viewsets

# ViewSets define the view behavior.
class BicicletaViewSet(viewsets.ModelViewSet):
    queryset = Bicicleta.objects.all()
    serializer_class = BicicletaSerializer
