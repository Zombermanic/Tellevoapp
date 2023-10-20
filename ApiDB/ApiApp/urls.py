from django.urls import path
from .views import InformacionUsuasrioCreateView

urlpatterns = [
    path('api/informacion-usuario/', InformacionUsuasrioCreateView.as_view(),
         name='create-informacion-usuario'),
]
