from django.db import models

class Hello(models.Model):
  text = models.CharField(max_length=200)
  