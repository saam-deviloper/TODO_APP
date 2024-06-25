from django.shortcuts import render

# Create your views here.
from rest_framework import status,generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import RegisterSerializer,TodoSerializer
import re
# from .models import Todo



# class RegisterView(APIView):
        
#     def post(self, request):
        
#         serializer = RegisterSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class TodoView(generics.ListAPIView):

#     serializer_class=TodoSerializer

#     def get_queryset(self):

    
#         user = self.request.user
#         return Todo.objects.filter(user=user)




