from django.db import models
from django.contrib.auth.models import User
from accounts.models.contact import Contact
from schedule.models.schedule import Schedule
from calendars.models.calendar import Calendar

class Meeting(models.Model):
    owner = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name="meetings")
    contact = models.ForeignKey(Contact, on_delete=models.SET_NULL, null=True, related_name="meetings")
    time_slot = models.CharField(max_length=50)
    date = models.DateField()
    schedule = models.ForeignKey(Schedule, on_delete=models.SET_NULL, null=True, related_name="meetings")
    calendar = models.ForeignKey(Calendar, on_delete=models.SET_NULL, null=True, related_name="meetings")

    class Meta:
        ordering = ['date', 'time_slot']  # Optional, to ensure meetings are sorted



# from accounts.models.contact import Contact
# from django.contrib.auth.models import User
# from django.db import models
# from schedule.models.schedule import Schedule


# class Meeting(models.Model):
#     owner = models.ForeignKey(User, on_delete=models.SET_NULL,
#                                 null=True, related_name="meetings")
#     contact = models.ForeignKey(Contact, on_delete=models.SET_NULL,
#                                     null=True, related_name="meetings")
#     time_slot = models.CharField(max_length=50, null=False, blank=False)
#     date = models.DateField(null=False, blank=False)
#     # schedule this meeting is in
#     schedule = models.ForeignKey(Schedule, on_delete=models.SET_NULL,
#                                     null=True, related_name="meetings")