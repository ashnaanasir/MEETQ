from django.contrib.auth.models import User
from django.db import models
from schedule.models.schedule import Schedule


class SchedulePlan(models.Model):
    owner = models.ForeignKey(User, on_delete=models.SET_NULL,
                                null=True, related_name="scheduleplan")
    this_week = models.ForeignKey(Schedule, on_delete=models.SET_NULL,
                                    null=True, related_name="scheduleplanthisweek")
    next_week = models.ForeignKey(Schedule, on_delete=models.SET_NULL,
                                    null=True, related_name="scheduleplannextweek")