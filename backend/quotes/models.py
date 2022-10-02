from django.db import models

class Quote(models.Model):
    quote = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    
    def __str__(self):
       return self.author 