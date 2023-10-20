from rest_framework import serializers
from .models import InformacionUsuario


class InformacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = InformacionUsuario
        fields = '__all__'
