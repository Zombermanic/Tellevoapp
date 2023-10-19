from django.db import models

# Create your models here.
class InformacionUsuario(models.Model):
    user = models.CharField(max_length=100)
    password = models.CharField(max_length=10)
    tipo_usuario = models.CharField(max_length=25, blank=True, null=True)

    def __str__(self):
        return f'{self.user} {self.password}'