from rest_framework.parsers import MultiPartParser
from rest_framework import generics
from .models import Image
from .serializers import ImageSerializer

class ImageListView(generics.ListCreateAPIView):
    parser_classes = [MultiPartParser]
    serializer_class = ImageSerializer
    queryset = Image.objects.all().order_by('id')