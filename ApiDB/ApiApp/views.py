from django.shortcuts import render
from rest_framework import generics
from .models import InformacionUsuario
from .serializer import InformacionSerializer


class InformacionUsuasrioCreateView(generics.CreateAPIView):
    queryset = InformacionUsuario.objects.all()
    serializer_class = InformacionSerializer
