from rest_framework import serializers

from api.models import Task
from api.serializers import UserProfileSerializer

class TaskSerializer(serializers.ModelSerializer):
    email = UserProfileSerializer()
    class Meta:
        model = Task
        fields = '__all__'

class CreateTaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'