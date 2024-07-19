from django.urls import path
from .views import RegisterView,LoginAPIView,AddTodoAPIView,DeleteTodoAPIView,UpdateTodoAPIView,TodoListAPIView
# from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('auth/', LoginAPIView.as_view(), name='auth'),
    path('add_todo/',AddTodoAPIView.as_view(),name='add_todo'),
    path('delete_todo/<int:pk>/', DeleteTodoAPIView.as_view(), name='delete_todo'),
    path('edit-todo/<int:pk>/', UpdateTodoAPIView.as_view(), name='edit-todo'),
    path('get_todo_items/', TodoListAPIView.as_view(), name='get_todo_items'),

]