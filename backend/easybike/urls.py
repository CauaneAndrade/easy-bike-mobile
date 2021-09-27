from django.contrib import admin

from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt import views as jwt_views
from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(title='Easy Bike API')


urlpatterns = [
    path('api/doc/', schema_view),
    path('admin/', admin.site.urls),
    path('api/', include('core.urls')),
    path('api/auth/', include('auth_backend.urls')),
    path('api/auth/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/auth/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]