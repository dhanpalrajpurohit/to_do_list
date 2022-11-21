from rest_framework import serializers

from .models import Notes as NotesModel


class NotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = NotesModel
        fields = '__all__'

