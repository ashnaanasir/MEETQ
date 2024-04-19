from django.db import models

class TimeSlot(models.Model):
    invitee = models.ForeignKey('calendars.Invitee', on_delete=models.CASCADE, related_name='time_slots', null=True, blank=True)
    calendar = models.ForeignKey('calendars.Calendar', on_delete=models.CASCADE, related_name='time_slots')
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    is_preferred = models.BooleanField(default=False)

    def __str__(self):
        preferred_status = "Preferred" if self.is_preferred else "Available"
        if self.invitee and self.invitee.contact:  # Check if invitee and contact are not None
            invitee_name = f"{self.invitee.contact.first_name} {self.invitee.contact.last_name}"
        else:
            invitee_name = "Owner's Time Slot"
        return f"{invitee_name} - {preferred_status} Slot: {self.start_time.strftime('%Y-%m-%d %H:%M')} to {self.end_time.strftime('%Y-%m-%d %H:%M')}"

# from django.db import models
# from calendars.models import invitee
# from calendars.models import calendar

# class TimeSlot(models.Model):
#     invitee = models.ForeignKey(invitee, on_delete=models.CASCADE, related_name='time_slots')
#     calendar = models.ForeignKey(calendar, on_delete=models.CASCADE, related_name='time_slots')
#     start_time = models.DateTimeField()
#     end_time = models.DateTimeField()
#     is_preferred = models.BooleanField(default=False)

#     def __str__(self):
#         preferred_status = "Preferred" if self.is_preferred else "Available"
#         return f"{self.invitee.contact.first_name} {self.invitee.contact.last_name} - {preferred_status} Slot: {self.start_time} to {self.end_time}"
