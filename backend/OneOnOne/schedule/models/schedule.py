from django.db import models
from django.contrib.auth.models import User
from calendars.models.calendar import Calendar
from accounts.models.contact import Contact


class Schedule(models.Model):
    owner = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name="schedules")
    calendars = models.ManyToManyField('calendars.Calendar', related_name="schedules")
    matches = models.JSONField(default=list)  
    isFinal = models.BooleanField(default=False)

