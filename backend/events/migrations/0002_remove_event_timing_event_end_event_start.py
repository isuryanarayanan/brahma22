# Generated by Django 4.0.4 on 2022-05-08 09:16

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='timing',
        ),
        migrations.AddField(
            model_name='event',
            name='end',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
        migrations.AddField(
            model_name='event',
            name='start',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
    ]
