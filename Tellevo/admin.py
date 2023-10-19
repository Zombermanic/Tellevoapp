from django.contrib import admin
from .models import InformacionUsuario

# Register your models here.
@admin.register(InformacionUsuario)
class ModelInformacionUsuasrioAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'password', 'tipo_usuario']