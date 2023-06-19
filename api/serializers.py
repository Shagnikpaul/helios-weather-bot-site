from rest_framework import serializers
from api.models import Commands


class CommandSerializer(serializers.ModelSerializer):
  class Meta():
    model = Commands
    fields = ['commands_syntax', 'is_Admin', 'description']
