from django.db import models
from .users import User
class Task(models.Model):
    email = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    is_completed = models.BooleanField(default=False)

    def __str__(self):
        return str(self.title)