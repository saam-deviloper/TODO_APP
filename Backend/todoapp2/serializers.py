from rest_framework import serializers
from django.contrib.auth.models import User
import re

from .models import Todo

class UserRegistrationSerializer(serializers.ModelSerializer):

    password=serializers.CharField(write_only=True)  # not displaying the password in the response

    class Meta:
        model=User
        fields=['username','password'] # definig our fields



    def validate_password(self,password):

        if len(password)<=3:

            raise serializers.ValidationError("Password needs to be more than 3 characters".upper())
        
        elif len(re.findall(r'[A-Z]',password))==0:

            raise serializers.ValidationError('USE AT LEAST ONE UPPERCASE LETTER')
        
        return password

    def create(self,validated_data):

        user=User.objects.create_user(username=validated_data['username'])

        user.set_password(validated_data["password"]) 

        user.save()

        return user
    
class LoginSerializer(serializers.Serializer):


    username = serializers.CharField()
    password = serializers.CharField()


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ['id', 'title', 'description', 'status', 'user']