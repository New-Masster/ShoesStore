from django.db import models

class Brand(models.Model):  # Marca com um nome e país
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name

class Category(models.Model):  # Categoria de produtos
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name

class Shoe(models.Model):  # Sapato com um nome, marca (ForeignKey), categoria (ForeignKey), preço e estoque.
    name = models.CharField(max_length=200)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    categories = models.ManyToManyField(Category, related_name='shoes')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField()

    def __str__(self):
        return self.name
