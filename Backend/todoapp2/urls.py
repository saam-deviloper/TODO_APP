from django.urls import path
from .views import RegisterView,LoginAPIView,AddTodoAPIView
# from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('auth/', LoginAPIView.as_view(), name='auth'),
    path('add_todo/',AddTodoAPIView.as_view(),name='todo')
    # path('get_todo/', TodoView.as_view(), name='get_todo')
]