from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet

# Создаем роутер именно для этого приложения
router = DefaultRouter()
router.register(r'items', ProductViewSet) # теперь будет /api/products/items/

urlpatterns = [
    path('', include(router.urls)),
]