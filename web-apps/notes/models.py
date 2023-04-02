from django.db import models
from django.contrib.sessions.models import Session

# Create your models here.


class Notes(models.Model):
    session = models.ForeignKey(Session, on_delete=models.SET_NULL, blank=True, null=True, default=None)
    title = models.CharField(max_length=255, null=True, blank=True)
    description = models.TextField(max_length=1024, null=True, blank=True, default=None)

