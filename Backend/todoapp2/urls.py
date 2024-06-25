from django.urls import path
from .views import RegisterView,LoginAPIView
# from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('auth/', LoginAPIView.as_view(), name='auth')
    # path('get_todo/', TodoView.as_view(), name='get_todo')
]