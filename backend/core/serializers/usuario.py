from core.models.usuario import Usuario
from rest_framework import serializers

# Serializers define the API representation.
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['user', 'categoria', 'documento', 'endereco']