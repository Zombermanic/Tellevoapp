from django.db import models


class InfoUser(models.Model):
    nombre = models.CharField(max_length=100)
    contraseña = models.CharField(max_length=100)
    tipoUser = models.CharField(max_length=3)

    def __str__(self):
        return f'{self.nombre} {self.contraseña}'
