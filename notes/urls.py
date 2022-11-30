from django.urls import path
from .views import Notes, NotesList

urlpatterns = [
    path('notes/', NotesList.as_view(), name='get-notes'),
    path('notes/<int:pk>/', Notes.as_view(), name='get-note'),
]