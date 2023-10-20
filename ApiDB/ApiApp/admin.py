from django.contrib import admin
from .models import InformacionUsuario


@admin.register(InformacionUsuario)
class ModelInformacionUsuasrioAdmin(admin.ModelAdmin):
    list_display = ['id', 'nombre', 'apellido',
                    'movilizacion', 'tipo_vehiculo']
