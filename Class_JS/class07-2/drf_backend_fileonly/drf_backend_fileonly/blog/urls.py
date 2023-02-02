from django.urls import path
from .views import ImageListView

urlpatterns = [
    path("image", ImageListView.as_view()),
]