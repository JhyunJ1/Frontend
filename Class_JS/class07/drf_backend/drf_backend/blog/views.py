from rest_framework import generics
from .models import Article
from .serializers import ArticleSerializer

class ArticleListView(generics.ListCreateAPIView):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all().order_by('id')

class ArticleDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all().order_by('id')
