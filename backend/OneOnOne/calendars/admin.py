from django.contrib import admin

# Register your models here.
from calendars.models.calendar import Calendar
from calendars.models.invitee import Invitee
from calendars.models.timeslot import TimeSlot

admin.site.register(Calendar)
admin.site.register(Invitee)

class TimeSlotAdmin(admin.ModelAdmin):
    list_display = ('start_time', 'end_time', 'is_preferred', 'invitee', 'calendar')
    
    def invitee_contact(self, obj):
        # Safely access attributes of related objects
        return obj.invitee.contact if obj.invitee else "No Invitee Assigned"

    # Adding custom method to the list_display
    list_display += ('invitee_contact',)

# Registers the TimeSlot model and applies the TimeSlotAdmin configuration
admin.site.register(TimeSlot, TimeSlotAdmin)
