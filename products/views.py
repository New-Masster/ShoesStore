from rest_framework import generics
from .models import Shoe
from .serializers import ShoeSerializer

# Create your views here.
class ProductListCreateAPIView(generics.ListCreateAPIView):
    queryset = Shoe.objects.all()
    serializer_class = ShoeSerializer

class ProductRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Shoe.objects.all()
    serializer_class = ShoeSerializer