from rest_framework import serializers
from .models import Promotion, Customer, Order, OrderItem
from products.serializers import ShoeSerializer

class PromotionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Promotion
        fields = '__all__'

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    customer = CustomerSerializer(read_only=True)
    
    class Meta:
        model = Order
        fields = '__all__'

class OrderItemSerializer(serializers.ModelSerializer):
    shoe = ShoeSerializer(read_only=True)
    
    class Meta:
        model = OrderItem
        fields = '__all__'
