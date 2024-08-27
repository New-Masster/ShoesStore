from django.db import models
from products.models import Shoe  # Tem que importar o modelo Shoe do app products

class Promotion(models.Model):
    name = models.CharField(max_length=100)  # Nome da promoção
    discount = models.DecimalField(max_digits=5, decimal_places=2)  # Percentual de desconto
    start_date = models.DateField()  # Data de início da promoção
    end_date = models.DateField()  # Data de término da promoção

    def __str__(self):
        return self.name

class Customer(models.Model): # Cliente com informações pessoais.
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class Order(models.Model): # Pedido com um cliente (ForeignKey), data de criação e data de atualização
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Order {self.id} by {self.customer}"

class OrderItem(models.Model): # Item em um pedido, que inclui o sapato (ForeignKey) e quantidade.
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')
    shoe = models.ForeignKey(Shoe, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.quantity} x {self.shoe.name} for Order {self.order.id}"
