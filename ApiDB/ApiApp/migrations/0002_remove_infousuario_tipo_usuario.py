# Generated by Django 4.2.7 on 2023-11-15 00:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ApiApp', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='infousuario',
            name='tipo_usuario',
        ),
    ]
