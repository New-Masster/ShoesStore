from django.contrib import admin # Aqui deixei para gerenciar os modelos pelo Django Admin
from .models import Brand, Category, Shoe

# Register your models here.
admin.site.register(Brand)
admin.site.register(Category)
admin.site.register(Shoe)
