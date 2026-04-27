from django.shortcuts import render
from .models import *

# Create your views here.
def index(request):
  menu_items = MenuItem.objects.all()
  return render(request, 'newapp/index.html', {'menu_items': menu_items})