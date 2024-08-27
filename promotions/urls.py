from django.urls import path
from .views import (
    PromotionListCreateAPIView, 
    PromotionRetrieveUpdateDestroyAPIView,
    CustomerListCreateAPIView, 
    CustomerRetrieveUpdateDestroyAPIView,
    OrderListCreateAPIView, 
    OrderRetrieveUpdateDestroyAPIView,
    OrderItemListCreateAPIView, 
    OrderItemRetrieveUpdateDestroyAPIView
)

urlpatterns = [
    path('', PromotionListCreateAPIView.as_view(), name='promotion-list-create'),
    path('<int:pk>/', PromotionRetrieveUpdateDestroyAPIView.as_view(), name='promotion-detail'),
    path('customers/', CustomerListCreateAPIView.as_view(), name='customer-list-create'),
    path('customers/<int:pk>/', CustomerRetrieveUpdateDestroyAPIView.as_view(), name='customer-detail'),
    path('orders/', OrderListCreateAPIView.as_view(), name='order-list-create'),
    path('orders/<int:pk>/', OrderRetrieveUpdateDestroyAPIView.as_view(), name='order-detail'),
    path('order-items/', OrderItemListCreateAPIView.as_view(), name='orderitem-list-create'),
    path('order-items/<int:pk>/', OrderItemRetrieveUpdateDestroyAPIView.as_view(), name='orderitem-detail'),
]
