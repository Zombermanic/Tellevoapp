from django.shortcuts import render
from rest_framework import generics
from .models import InfoUsuario
from .serializer import InfoSeralizer

# Create your views here.

class InfoUsuarioCrearView(generics.CrearAPIView):
    queryset = InfoUsuario.objects.all()
    serializer_class = InfoSeralizer