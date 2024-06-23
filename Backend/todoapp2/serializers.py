from rest_framework import serializers
from django.contrib.auth.models import User
import re
from .models import Todo

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('username', 'password')

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password']
        )
        return user
    

    def validate_password(self,password):


        if len(password)<=3:

            raise serializers.ValidationError('PASSWORD TOO SHORT,MINIMUN ALLOWED: FOUR CHARACTERS')
        
        elif len(re.findall(r'[A-Z]',password))==0:

            raise serializers.ValidationError('USE AT LEAST ONE UPPERCASE LETTER')


        return password

class TodoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Todo
        fields = ('user', 'title','description','date','status')


    # def get_todo_list(self,user):
        
    #     todo_list=Todo.objects.filter(user=user)

    #     return todo_list
