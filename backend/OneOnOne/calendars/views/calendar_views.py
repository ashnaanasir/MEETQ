from rest_framework import generics, permissions
from rest_framework.response import Response
from django.contrib.auth.models import User
from calendars.models.calendar import Calendar
from calendars.models.invitee import Invitee
from calendars.models.timeslot import TimeSlot

from calendars.serializers.calendar_serializer import CalendarSerializer
from calendars.serializers.invitee_serializer import InviteeSerializer
from calendars.serializers.timeslot_serializer import TimeSlotSerializer

# View to return all calendars associated with the user
class UserCalendarsListView(generics.ListAPIView):
    serializer_class = CalendarSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Calendar.objects.filter(owner=self.request.user)

# View to return a specific calendar based on the id
class CalendarDetailView(generics.RetrieveAPIView):
    queryset = Calendar.objects.all()
    serializer_class = CalendarSerializer
    permission_classes = [permissions.IsAuthenticated]

# View to return a specific calendar's invitees and all the timeslots of the owner
class CalendarInviteesTimeslotsView(generics.RetrieveAPIView):
    serializer_class = CalendarSerializer  # Assume serializer handles invitees and timeslots
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return Calendar.objects.prefetch_related('invitees', 'timeslots').get(pk=self.kwargs['pk'])

# View to create the calendar
class CalendarCreateView(generics.CreateAPIView):
    queryset = Calendar.objects.all()
    serializer_class = CalendarSerializer
    permission_classes = [permissions.IsAuthenticated]

# View to update the calendar
class CalendarUpdateView(generics.UpdateAPIView):
    queryset = Calendar.objects.all()
    serializer_class = CalendarSerializer
    permission_classes = [permissions.IsAuthenticated]

# View to delete the calendar
class CalendarDeleteView(generics.DestroyAPIView):
    queryset = Calendar.objects.all()
    serializer_class = CalendarSerializer
    permission_classes = [permissions.IsAuthenticated]

# View to return the invitee information including if they have responded or not
class InviteeDetailView(generics.RetrieveAPIView):
    queryset = Invitee.objects.all()
    serializer_class = InviteeSerializer
    permission_classes = [permissions.IsAuthenticated]

# View to create and send an invite (creates the invitee response)
class SendInviteView(generics.CreateAPIView):
    queryset = Invitee.objects.all()
    serializer_class = InviteeSerializer
    permission_classes = [permissions.IsAuthenticated]

# View for an invitee to respond (get and update methods)
class InviteeResponseView(generics.RetrieveUpdateAPIView):
    queryset = Invitee.objects.all()
    serializer_class = InviteeSerializer
    permission_classes = [permissions.IsAuthenticated]

# View to return all timeslots of the invitees associated with the calendar
class InviteeTimeslotsListView(generics.ListAPIView):
    serializer_class = TimeSlotSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        calendar_id = self.kwargs.get('calendar_id')
        return TimeSlot.objects.filter(invitee__calendar_id=calendar_id)
