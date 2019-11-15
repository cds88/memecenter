from django.db import models

# Create your models here.

class Meme(models.Model):
    webservice= models.TextField()
    memetype = models.TextField()
    thumb = models.TextField()



