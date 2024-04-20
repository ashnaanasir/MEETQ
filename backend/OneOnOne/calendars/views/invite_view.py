from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from calendars.serializers.invitee_serializer import InviteeSerializer
from accounts.models.contact import Contact
from calendars.models.calendar import Calendar
from calendars.models.timeslot import TimeSlot
from calendars.serializers.timeslot_serializer import TimeSlotSerializer
from calendars.models.invitee import Invitee

class InviteAPIView(APIView):

    def get(self, request, calendar_id, invitee_id):

        if not request.user.is_authenticated:
            return Response({"detail": "Authentication credentials were not provided."}, status=status.HTTP_401_UNAUTHORIZED)
        
        try:
            # Fetch the calendar to ensure it exists and belongs to the user
            calendar = Calendar.objects.get(id=calendar_id, owner=request.user)
        except Calendar.DoesNotExist:
            return Response({"error": "Calendar not found"}, status=status.HTTP_404_NOT_FOUND)

        try:
            # Ensure the invitee belongs to the specified calendar
            invitee = Invitee.objects.get(id=invitee_id, calendar=calendar)
            # If the invitee has responded, fetch their timeslots
            if invitee.has_responded:
                timeslots = TimeSlot.objects.filter(calendar=calendar, invitee=invitee)
                timeslot_serializer = TimeSlotSerializer(timeslots, many=True)
                invitee_data = InviteeSerializer(invitee).data
                invitee_data['available_timeslots'] = timeslot_serializer.data
                invitee_data['preferred_timeslots'] = timeslot_serializer.data

                return Response(invitee_data)

            # If the invitee has not responded, just return invitee info
            serializer = InviteeSerializer(invitee)
            return Response(serializer.data)
            
        except Invitee.DoesNotExist:
            return Response({"error": "Invitee not found"}, status=status.HTTP_404_NOT_FOUND)
