from django.db import models
from django.contrib.auth.models import User

class Schedule(models.Model):
    owner = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name="schedules")
    week = models.DateField(help_text="The week for this schedule")

    def get_meetings(self):
        """
        Returns a queryset of meetings associated with this schedule,
        which effectively acts like a list of meetings with their dates and time slots.
        """
        return self.meetings.all()
