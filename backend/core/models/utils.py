from django.db import models


class Foto(models.Model):
    upload = models.ImageField(upload_to ='uploads/% Y/% m/')
