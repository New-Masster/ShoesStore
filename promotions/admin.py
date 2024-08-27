from django.contrib import admin # Gerenciar os itens no Django Admin(5] item da prova)
from .models import Customer, Order, OrderItem, Promotion

# Register your models here.
@admin.register(Promotion)
class PromotionAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'discount', 'start_date', 'end_date')  # ID, Nome, Desconto, Data de Início e Data de Término na lista
    search_fields = ('name',)  # Busca por Nome
    list_filter = ('start_date', 'end_date')  # Filtro por Data de Início e Data de Término

@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ('id', 'first_name', 'last_name', 'email', 'phone_number')  # ID, Primeiro Nome, Último Nome, Email e Telefone na lista
    search_fields = ('first_name', 'last_name', 'email')  # Busca por Primeiro Nome, Último Nome e Email

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'customer', 'created_at', 'updated_at')  # ID, Cliente, Data de Criação e Data de Atualização na lista
    search_fields = ('customer__first_name', 'customer__last_name')  # Busca por Nome do Cliente
    list_filter = ('created_at', 'updated_at')  # Filtro por Data de Criação e Data de Atualização

@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    list_display = ('id', 'order', 'shoe', 'quantity', 'price')  # ID, Pedido, Sapato, Quantidade e Preço na lista
    search_fields = ('order__id', 'shoe__name')  # Busca por ID do Pedido e Nome do Sapato
    list_filter = ('order', 'shoe')  # Filtro por Pedido e Sapato