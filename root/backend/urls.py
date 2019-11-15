from . import views
from django.urls import path, include
from rest_framework import routers


router = routers.DefaultRouter()
router.register('all', views.MemeViewSet, base_name='memes')

urlpatterns = router.urls
