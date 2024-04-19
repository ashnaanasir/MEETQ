from django.db import models

class Invitee(models.Model):
    contact = models.ForeignKey('accounts.Contact', on_delete=models.CASCADE, related_name='invitees')
    calendar = models.ForeignKey('calendars.Calendar', on_delete=models.CASCADE, related_name='invitees')
    available_timeslots = models.ManyToManyField('timeslot.TimeSlot', related_name='available_timeslots')
    preferred_timeslots = models.ManyToManyField('timeslot.TimeSlot', related_name='preferred_timeslots')
    has_responded = models.BooleanField(default=False)
    
    def __str__(self):
        return f"Invitee linked to {self.calendar.name} - Response Received: {'Yes' if self.has_responded else 'No'}"

    @property
    def available_timeslots(self):
        """Retrieve non-preferred (available) timeslots for this invitee."""
        # Dynamic import to prevent circular imports
        from .timeslot import TimeSlot
        return self.time_slots.filter(is_preferred=False)

    @property
    def preferred_timeslots(self):
        """Retrieve preferred timeslots for this invitee."""
        # Dynamic import to prevent circular imports
        from .timeslot import TimeSlot
        return self.time_slots.filter(is_preferred=True)

