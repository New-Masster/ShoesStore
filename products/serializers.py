from rest_framework import serializers
from .models import Shoe  # Corrija o nome do modelo aqui

class ShoeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shoe
        fields = '__all__'

