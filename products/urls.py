from django.urls import path
from .views import (
    BrandListCreateAPIView,
    BrandDetailAPIView,
    CategoryListCreateAPIView,
    CategoryDetailAPIView,
    ShoeListCreateAPIView,
    ShoeDetailAPIView
)

urlpatterns = [
    path('brands/', BrandListCreateAPIView.as_view(), name='brand-list-create'),
    path('brands/<int:pk>/', BrandDetailAPIView.as_view(), name='brand-detail'),
    path('categories/', CategoryListCreateAPIView.as_view(), name='category-list-create'),
    path('categories/<int:pk>/', CategoryDetailAPIView.as_view(), name='category-detail'),
    path('shoes/', ShoeListCreateAPIView.as_view(), name='shoe-list-create'),
    path('shoes/<int:pk>/', ShoeDetailAPIView.as_view(), name='shoe-detail'),
]
