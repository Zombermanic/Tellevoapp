from django.shortcuts import render
from rest_framework import generics
from .models import InfoUser
from .serializer import InfoSerializer


class InfoUserCreateView(generics.CreateAPIView):
    queryset = InfoUser.objects.all()
    serializer_class = InfoSerializer
