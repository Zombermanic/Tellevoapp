from django.db import models


class InformacionUsuario(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    movilizacion = models.CharField(max_length=2)
    tipo_vehiculo = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return f'{self.nombre} {self.apellido}'
