from django.urls import path
from .views import lista_usuario

urlpatterns=[
    path('lista_usuario', lista_usuario, name='lista_usuario'),
] 
