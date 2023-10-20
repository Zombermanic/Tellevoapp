from django.contrib import admin
from .models import InfoUser


@admin.register(InfoUser)
class ModelInfoUserAdmin(admin.ModelAdmin):
    list_display = ['id', 'nombre', 'contraseña',
                    'tipoUser']
