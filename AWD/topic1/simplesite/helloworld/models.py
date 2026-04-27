from django.db import models

class Hello(models.Model):
  text = models.CharField(max_length=200)
  
  
# Person table with name and age, and an address table with a foreign key to the person table.
class Person(models.Model):
  name = models.CharField(max_length=500, null=False, blank=False, db_index=True)
  age = models.IntegerField(null=False, blank=True)
  
  def __str__(self):
    return self.name
  
class Address(models.Model):
  number = models.IntegerField(null=False, blank=True)
  address = models.CharField(max_length=500, null=False, blank=True)
  resident = models.ForeignKey(Person, on_delete=models.SET_NULL, null=True, blank=True)