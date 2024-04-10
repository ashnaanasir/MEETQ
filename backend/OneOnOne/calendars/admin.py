from django.contrib import admin

# Register your models here.
from calendars.models.calendar import Calendar
from calendars.models.invitee import Invitee
from calendars.models.timeslot import TimeSlot

admin.site.register(Calendar)
admin.site.register(Invitee)
admin.site.register(TimeSlot)