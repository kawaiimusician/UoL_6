from django.shortcuts import render
from django.http import HttpResponse
from .models import *

def index(request):
  response_string = Hello.objects.all()[0]
  return render(request, 'helloworld/index.html', {'data': response_string})

def simple_view(request):
  header = request.META
  ip = header['REMOTE_ADDR']
  html = "<html><body><h1>Your IP Address is: " + ip + "</h1></body></html>"
  return HttpResponse(html, content_type="text/html", status=200)