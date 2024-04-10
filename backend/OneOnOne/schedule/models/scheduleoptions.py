from django.contrib.auth.models import User
from django.db import models
from schedule.models.schedule import Schedule


class ScheduleOptions(models.Model):
    owner = models.ForeignKey(User, on_delete=models.SET_NULL,
                                null=True, related_name="scheduleoptions")
    option1 = models.ForeignKey(Schedule, on_delete=models.SET_NULL,
                                    null=True, related_name="option1")
    option2 = models.ForeignKey(Schedule, on_delete=models.SET_NULL,
                                    null=True, related_name="option2")
    option3 = models.ForeignKey(Schedule, on_delete=models.SET_NULL,
                                    null=True, related_name="option3")