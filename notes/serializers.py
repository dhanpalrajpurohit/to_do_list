from rest_framework import serializers

from .models import Notes as NotesModel


class NotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = NotesModel
        fields = ('title', 'description', 'session')


