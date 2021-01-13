from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=70)
    name = models.CharField(max_length=50)
    church = models.CharField(max_length=50)

    def __str__(self):
        return self.name