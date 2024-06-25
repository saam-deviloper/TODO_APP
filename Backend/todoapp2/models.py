from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser,User

class Todo(models.Model):

    user=models.ForeignKey(User,on_delete=models.CASCADE)

    title=models.CharField(max_length=100)

    description=models.TextField(null=True,blank=True)

    date=models.DateTimeField(auto_now_add=True)

    status=models.BooleanField(default=False)


    def __str__(self):
        return self.title





