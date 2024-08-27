from django.contrib import admin # Gerenciar os itens no Django Admin(5] item da prova)
from .models import Brand, Category, Shoe

# Register your models here.
@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')  # ID e Nome na lista
    search_fields = ('name',)  # Busca por Nome

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')  # ID e Nome na lista
    search_fields = ('name',)  # Busca por Nome

@admin.register(Shoe)
class ShoeAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'brand', 'price', 'stock')  # ID, Nome, Marca, Preço e Estoque
    search_fields = ('name', 'brand__name')  # Busca por Nome e Marca
    list_filter = ('brand',)  # Filtro por Marca
    list_editable = ('price', 'stock')  # Editar Preço e Estoque diretamente na lista
