from django.db import models

# Create your models here.


class Commands(models.Model):
    commands_syntax = models.CharField(max_length=60) 
    is_Admin = models.BooleanField()
    description = models.CharField(max_length=300)
    def __str__(self):
        return self.commands_syntax