# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2018-04-29 13:36
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ezeadmin', '0002_auto_20180429_1111'),
    ]

    operations = [
        migrations.AddField(
            model_name='registeruser',
            name='modified_date',
            field=models.DateTimeField(null=True),
        ),
        migrations.AlterField(
            model_name='registeruser',
            name='created_date',
            field=models.DateTimeField(null=True),
        ),
    ]
