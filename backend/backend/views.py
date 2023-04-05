from django.shortcuts import render



def mainpage(request):
  context = { }
  return render(request, "index.html", context)