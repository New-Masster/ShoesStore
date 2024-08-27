from django.urls import path
from .views import PromotionListCreateAPIView, PromotionRetrieveUpdateDestroyAPIView

urlpatterns = [
    # Adicione URLs específicas para o app promotions aqui
    path('', PromotionListCreateAPIView.as_view(), name='promotion-list-create'),
    path('<int:pk>/', PromotionRetrieveUpdateDestroyAPIView.as_view(), name='promotion-detail'),
]