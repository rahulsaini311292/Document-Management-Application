# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.


class registeruser(models.Model):
    user_id = models.AutoField(primary_key=True)
    user_name = models.CharField(max_length=4000)
    user_dob = models.CharField(max_length=4000)
    user_email = models.CharField(max_length=4000)
    created_date = models.DateTimeField(null=True)
    modified_date = models.DateTimeField(null=True)
    user_password = models.CharField(max_length=4000, null=True)

    class Meta:
        db_table = "register_user"

class uploadpdf(models.Model):
    pdf_id = models.AutoField(primary_key=True)
    pdf_name = models.CharField(max_length=4000)
    created_date = models.DateTimeField(null=True)

    class Meta:
        db_table = "pdf_uploaded"
