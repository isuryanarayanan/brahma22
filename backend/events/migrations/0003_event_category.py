# Generated by Django 4.0.4 on 2022-05-08 10:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0002_remove_event_timing_event_end_event_start'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='category',
            field=models.CharField(choices=[('General', 'general'), ('Technical', 'technical'), ('Cultural', 'cultural')], default='General', max_length=250),
        ),
    ]
