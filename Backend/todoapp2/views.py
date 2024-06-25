from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserRegistrationSerializer,LoginSerializer
from rest_framework.authtoken.models import Token
from rest_framework.authentication import  TokenAuthentication
from django.contrib.auth import authenticate



# from .models import Todo



class RegisterView(APIView):
        
    def post(self, request):
        
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class LoginAPIView(APIView):
    serializer_class = LoginSerializer
    authentication_classes = [TokenAuthentication]

class LoginAPIView(APIView):
    serializer_class = LoginSerializer
    authentication_classes = [TokenAuthentication]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = authenticate(username=serializer.validated_data['username'], password=serializer.validated_data['password'])
            if user:
                token, created = Token.objects.get_or_create(user=user)
                return Response({'token': token.key, "Success": "Login Successfully"}, status=status.HTTP_201_CREATED)
            return Response({'Message': 'Invalid Username or Password'}, status=status.HTTP_401_UNAUTHORIZED)




