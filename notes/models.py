from django.db import models

# Create your models here.


class Notes(models.Model):
    title = models.CharField(max_length=255, null=True, blank=True)
    description = models.TextField(max_length=1024, null=True, blank=True, default=None)

    def __str__(self):
        return str(self.title)

