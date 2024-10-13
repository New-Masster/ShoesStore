from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PromotionViewSet, CustomerViewSet, OrderViewSet, OrderItemViewSet
from .views_fbv import promotion_list

router = DefaultRouter()
router.register(r'promotions', PromotionViewSet)
router.register(r'customers', CustomerViewSet)
router.register(r'orders', OrderViewSet)
router.register(r'order-items', OrderItemViewSet)

urlpatterns = [
    path('promotions-fbv/', promotion_list, name='promotion-list-fbv'), 
]
