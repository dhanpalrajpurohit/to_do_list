from django.shortcuts import render
from rest_framework.views import APIView
from django.http import JsonResponse, HttpResponse
from django.contrib.sessions.models import Session


from .models import Notes as NotesModel
from .serializers import NotesSerializer
# Create your views here.


class NotesList(APIView):
    def get(self, request):
        notes = NotesModel.objects.all()
        serializer = NotesSerializer(notes)
        return JsonResponse({"data": serializer.data}, status=200)

    def post(self, request):
        if not request.session.session_key:
            request.session.create()
        data = request.data
        data['session'] = Session.objects.get(session_key=request.session.session_key)
        note_serializer = NotesSerializer(data=data)
        note_serializer.is_valid(raise_exception=True)
        note_serializer.save()
        return JsonResponse({"data": note_serializer.data}, status=200)


class Notes(APIView):
    def get(self, request, pk: int):
        notes = NotesModel.objects.get(id=pk)
        serializer = NotesSerializer(notes)
        return JsonResponse({"data": serializer.data}, status=200)

    def put(self, request, pk: int):
        notes = NotesModel.objects.get(id=pk)
        serializer = NotesSerializer(notes, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return JsonResponse({"data": serializer.data}, status=200)

    def delete(self, request, pk: int):
        notes = NotesModel.objects.get(id=pk)
        notes.delete()
        return HttpResponse(status=204)
