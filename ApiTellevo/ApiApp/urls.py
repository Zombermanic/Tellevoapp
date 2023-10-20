from django.urls import path
from .views import InfoUserCreateView

urlpatterns = [
    path('api/info-user/', InfoUserCreateView.as_view(),
         name='create-info-user'),
]
