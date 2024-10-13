from django.contrib import admin  
from .models import Brand, Category, Shoe


@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')  
    search_fields = ('name',) 

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name') 
    search_fields = ('name',)  

@admin.register(Shoe)
class ShoeAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'brand', 'price', 'stock')  
    search_fields = ('name', 'brand__name')  
    list_filter = ('brand',)  
    list_editable = ('price', 'stock')  
