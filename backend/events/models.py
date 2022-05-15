from datetime import datetime
from statistics import mode
from unicodedata import category
from django.db import models
from django.core.exceptions import ValidationError
import pytz

EVENT_CATEGORY = (
    ("General", "general"),
    ("Technical", "technical"),
    ("Cultural", "cultural"),
)

EVENT_TYPE = (
    ("Per Head", "per_head"),
    ("Per Team", "per_team"),
    ("Per Head In Team", "per_head_team"),
    ("Per Submission", "per_submission")
)


class Event(models.Model):
    """ Events that are conducted """

    name = models.CharField(max_length=250)
    short_description = models.TextField(default='')
    description = models.TextField(default='')
    category = models.CharField(
        max_length=250, choices=EVENT_CATEGORY, default="General")
    type = models.CharField(
        max_length=250, choices=EVENT_TYPE, default="Per Head")
    fee = models.IntegerField(default=0)
    prize = models.IntegerField(default=0)

    start = models.DateTimeField(auto_now_add=False, default=datetime.now)
    end = models.DateTimeField(auto_now_add=False, default=datetime.now)

    venue = models.CharField(max_length=250, default="")
    organizers = models.TextField(default='')
    poster_image = models.ImageField(upload_to='poster_images', blank=True)

    offline_register = models.BooleanField(default=False)
    register_url = models.CharField(max_length=250, default="", blank=True)
    closed = models.BooleanField(default=False)

    def __str__(self):
        return self.name

    def getDay(self):
        if self.start.date() == datetime(2022, 5, 20, tzinfo=pytz.timezone('Asia/Kolkata')).date():
            return 1

        if self.start.date() == datetime(2022, 5, 21, tzinfo=pytz.timezone('Asia/Kolkata')).date():
            return 2

    def save(self, *args, **kwargs):
        try:
            # if offline registration then register url should be empty
            if self.offline_register:
                self.register_url = ""
            # check if register url is empty and offline registration is false
            elif self.register_url == "" and not self.offline_register:
                raise ValidationError("Register URL is empty")

            # Check if the start date is before the end date
            if self.start > self.end:
                raise ValidationError(
                    'The start date is after the end date.')

            if self.start.date() > datetime(2022, 5, 21, tzinfo=pytz.timezone('Asia/Kolkata')).date():
                raise ValidationError(
                    'The event should start before 21st of may')

            if self.end.date() > datetime(2022, 5, 21, tzinfo=pytz.timezone('Asia/Kolkata')).date():
                raise ValidationError(
                    'The event should end before 21st of may')

            if self.start.date() < datetime(2022, 5, 20, tzinfo=pytz.timezone('Asia/Kolkata')).date():
                raise ValidationError(
                    'The event should start before 20th of may')

            if self.end.date() < datetime(2022, 5, 20, tzinfo=pytz.timezone('Asia/Kolkata')).date():
                raise ValidationError(
                    'The event cannot end before 20th of may')

        except ValidationError as e:
            raise ValidationError(e)

        super(Event, self).save(*args, **kwargs)
