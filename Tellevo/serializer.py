from rest_framework import serializers
from .models import InfoUsuario


class InfoSeralizer(serializers.ModelSerializer):
    class Meta:
        model = InfoUsuario
        fields = '__all__'