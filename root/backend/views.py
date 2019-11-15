from django.shortcuts import render
from .models import Meme
from .serializers import MemeSerializer
from rest_framework import viewsets
# Create your views here.



class MemeViewSet(viewsets.ModelViewSet):
    serializer_class = MemeSerializer
    queryset = Meme.objects.all()
    filter_fields = ('webservice',)
