from django.urls import path, include
from rest_framework import routers
from core.viewsets import usuario, bicicleta, aluguel

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', usuario.UserViewSet)
router.register(r'bicicleta', bicicleta.BicicletaViewSet)
router.register(r'devolucao', aluguel.DevolucaoViewSet)
router.register(r'aluguel', aluguel.AluguelViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
]
