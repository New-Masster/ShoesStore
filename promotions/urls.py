from django.urls import path
from .views import (
    PromotionAPIView,
    PromotionDetailAPIView,
    CustomerAPIView,
    CustomerDetailAPIView,
    OrderAPIView,
    OrderDetailAPIView,
    OrderItemAPIView,
    OrderItemDetailAPIView
)

urlpatterns = [
    path('', PromotionAPIView.as_view(), name='promotion-list-create'),
    path('<int:pk>/', PromotionDetailAPIView.as_view(), name='promotion-detail'),
    
    path('customers/', CustomerAPIView.as_view(), name='customer-list-create'),
    path('customers/<int:pk>/', CustomerDetailAPIView.as_view(), name='customer-detail'),
    
    path('orders/', OrderAPIView.as_view(), name='order-list-create'),
    path('orders/<int:pk>/', OrderDetailAPIView.as_view(), name='order-detail'),
    
    path('order-items/', OrderItemAPIView.as_view(), name='order-item-list-create'),
    path('order-items/<int:pk>/', OrderItemDetailAPIView.as_view(), name='order-item-detail'),
]
