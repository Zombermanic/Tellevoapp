from rest_framework import serializers
from ApiApp.models import InfoUsuario

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = InfoUsuario
        fields = ['user', 'password']