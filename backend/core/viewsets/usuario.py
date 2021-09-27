from core.models.usuario import Usuario
from core.serializers.usuario import UserSerializer
from rest_framework import viewsets

# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UserSerializer
