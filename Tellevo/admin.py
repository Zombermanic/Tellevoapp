from django.contrib import admin
from .models import InfoUsuario

# Register your models here.
@admin.register(InfoUsuario)
class ModelInfoUsuasrioAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'password', 'tipo_usuario']