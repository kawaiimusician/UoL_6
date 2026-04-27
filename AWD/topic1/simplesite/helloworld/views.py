from django.shortcuts import render
from django.http import HttpResponse
from .models import *

def index(request):
  response_string = Hello.objects.all()[0]
  return render(request, 'helloworld/index.html', {'data': response_string})

def simple_view(request):
  addresses = Address.objects.all()
  first_address = addresses[0]
  resident_name = str(first_address.resident.name)
  # return HttpResponse(f'{resident_name} lives at {first_address.address}')
  return render(request, 'helloworld/simple.html', {'resident_name': resident_name, 'address': first_address.address})