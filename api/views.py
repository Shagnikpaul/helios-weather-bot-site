
from rest_framework import generics
from .models import Commands
from .serializers import CommandSerializer

class Data(generics.ListAPIView):
  serializer_class = CommandSerializer
  queryset = Commands.objects.all()

class ParticularData(generics.RetrieveUpdateDestroyAPIView):
  serializer_class = CommandSerializer
  queryset = Commands.objects.all()