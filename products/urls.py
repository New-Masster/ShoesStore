from django.urls import path
from .views import (BrandListCreateAPIView, BrandRetrieveUpdateDestroyAPIView,
                    CategoryListCreateAPIView, CategoryRetrieveUpdateDestroyAPIView,
                    ShoeListCreateAPIView, ShoeRetrieveUpdateDestroyAPIView)

urlpatterns = [
    path('brands/', BrandListCreateAPIView.as_view(), name='brand-list-create'),
    path('brands/<int:pk>/', BrandRetrieveUpdateDestroyAPIView.as_view(), name='brand-detail'),
    path('categories/', CategoryListCreateAPIView.as_view(), name='category-list-create'),
    path('categories/<int:pk>/', CategoryRetrieveUpdateDestroyAPIView.as_view(), name='category-detail'),
    path('shoes/', ShoeListCreateAPIView.as_view(), name='shoe-list-create'),
    path('shoes/<int:pk>/', ShoeRetrieveUpdateDestroyAPIView.as_view(), name='shoe-detail'),
]
