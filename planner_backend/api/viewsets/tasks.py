from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist


from api.serializers import TaskSerializer, CreateTaskSerializer
from api.models import Task, User

class TaskViewSet(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, email_address:str):
        try:
            email = User.objects.get(email = email_address)
        except User.DoesNotExist:
            return Response({'msg': "User does not found"}, status=status.HTTP_404_NOT_FOUND)
        tasks = Task.objects.filter(email=email)
        serializer = TaskSerializer(tasks, many=True)
        return Response({'tasks': serializer.data}, status=status.HTTP_200_OK)

    def post(self, request, email_address:str):
        try:
            email = User.objects.get(email = email_address)
        except User.DoesNotExist:
            return Response({'msg': "User does not found"}, status=status.HTTP_404_NOT_FOUND)
        data = request.data
        data.update({'email':email.id})
        serializer = CreateTaskSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'task': serializer.data}, status=status.HTTP_200_OK)