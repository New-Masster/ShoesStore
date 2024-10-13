from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Promotion
from .serializers import PromotionSerializer

@api_view(['GET', 'POST'])
def promotion_list(request):
    if request.method == 'GET':
        promotions = Promotion.objects.all()
        serializer = PromotionSerializer(promotions, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PromotionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
