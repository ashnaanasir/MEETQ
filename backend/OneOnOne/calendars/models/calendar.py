from django.db import models
from django.contrib.auth.models import User
from accounts.models.contact import Contact

class Calendar(models.Model):
    owner = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name="calendars")
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=200, null=True, blank=True)
    start_date = models.DateField()
    end_date = models.DateField()
    color = models.CharField(max_length=7)
    duration = models.IntegerField()
    owners_available = models.JSONField(default=list)
    owners_preferred = models.JSONField(default=list)
    deadline = models.DateField()
    # use related_name to access the invitees from the Contact model
    invited = models.ManyToManyField(Contact, related_name="calendars")
    
    def __str__(self):
        return self.name
    

    # function that returns the invitees of the calendar
    

    @property
    def responded_invitees_count(self):
        """Counts how many invitees have responded."""
        # Dynamic import to avoid circular dependencies
        from .invitee import Invitee
        return self.invited.filter(has_responded=True).count()

    @property
    def available_timeslots(self):
        """Aggregates all available (non-preferred) timeslots from invitees."""
        # Dynamic import within the method to avoid circular imports
        from .timeslot import TimeSlot
        return TimeSlot.objects.filter(invitee__calendar=self, is_preferred=False)

    @property
    def preferred_timeslots(self):
        """Aggregates all preferred timeslots from invitees."""
        # Dynamic import within the method to avoid circular imports
        from .timeslot import TimeSlot
        return TimeSlot.objects.filter(invitee__calendar=self, is_preferred=True)



# from django.db import models
# from django.contrib.auth.models import User
# from django.contrib.postgres.fields import JSONField
# from django.db.models import Count, Q

# class Calendar(models.Model):
#     owner = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name="calendars")
#     name = models.CharField(max_length=50)
#     description = models.CharField(max_length=200, null=True, blank=True)
#     start_date = models.DateField()
#     end_date = models.DateField()
#     color = models.CharField(max_length=7)
#     duration = models.IntegerField()
#     owners_available = JSONField(default=list)
#     owners_preferred = JSONField(default=list)
#     deadline = models.DateField()

#     # needs to have a field for invitees
#     invitees = models.ManyToManyField(Invitee, related_name="calendars")

#     def __str__(self):
#         return self.name

#     @property
#     def responded_invitees_count(self):
#         """Counts how many invitees have responded."""
#         return self.invitees.filter(has_responded=True).count()

#     @property
#     def available_timeslots(self):
#         """Aggregates all available (non-preferred) timeslots from invitees."""
#         return TimeSlot.objects.filter(invitee__calendar=self, is_preferred=False)

#     @property
#     def preferred_timeslots(self):
#         """Aggregates all preferred timeslots from invitees."""
#         return TimeSlot.objects.filter(invitee__calendar=self, is_preferred=True)


# # from django.db import models
# # from django.contrib.auth.models import User

# # class Calendar(models.Model):

# #     owner = models.ForeignKey(User, on_delete=models.SET_NULL,
# #                                 null=True, related_name="calendars")
# #     name = models.CharField(max_length=50, null=False, blank=False)
# #     description = models.CharField(max_length=200, null=True, blank=True)
# #     start_date = models.DateField(null=False, blank=False)
# #     end_date = models.DateField(null=False, blank=False)
# #     # responses (many Response) - check Response model
# #     # invitees (many Invitee) - to check if someone was invited, use Invitee model
# #     color = models.CharField(max_length=7)
# #     duration = models.IntegerField()
# #     owners_available = models.CharField(max_length=200, null=False, blank=False)
# #     owners_preferred = models.CharField(max_length=200, null=False, blank=False)
# #     deadline = models.DateField()