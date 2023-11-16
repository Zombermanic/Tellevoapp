from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from .models import InfoUsuario
from ApiDB.serializers import UsuarioSerializer

# Create your views here.

@csrf_exempt
@api_view(['GET', 'POST'])
def lista_usuario(request):
    if request.method == 'GET':
        user = InfoUsuario.objects.all()
        serializer = UsuarioSerializer(user, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        data = request.data
        username = data.get('user')  # Cambié 'user' a 'username' para mayor claridad

        existing_user = InfoUsuario.objects.filter(user=username).first()  # Corregí aquí
        if existing_user:
            return Response({'error': 'Ya existe un usuario con este nombre de usuario.'}, status=status.HTTP_400_BAD_REQUEST)

        serializer = UsuarioSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
