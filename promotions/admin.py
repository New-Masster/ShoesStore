from django.contrib import admin # Aqui deixei para gerenciar os modelos pelo Django Admin
from .models import Customer, Order, OrderItem

# Register your models here.
admin.site.register(Customer)
admin.site.register(Order)
admin.site.register(OrderItem)