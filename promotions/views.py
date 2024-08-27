from rest_framework import generics
from .models import Promotion
from .serializers import PromotionSerializer

# Create your views here.
class PromotionListCreateAPIView(generics.ListCreateAPIView):
    queryset = Promotion.objects.all()
    serializer_class = PromotionSerializer

class PromotionRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Promotion.objects.all()
    serializer_class = PromotionSerializer
