from django.db import models

class Image(models.Model):
    image = models.FileField(null=True, blank=True)
    created_time = models.DateTimeField(auto_now_add=True)
    updated_time = models.DateTimeField(auto_now=True)