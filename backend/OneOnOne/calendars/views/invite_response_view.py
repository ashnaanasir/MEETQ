from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from calendars.models.invitee import Invitee
from django.utils.dateparse import parse_datetime
from calendars.models.invitee import Invitee
from calendars.models.timeslot import TimeSlot
from django.db import transaction
from datetime import timedelta


class InviteResponseAPIView(APIView):
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """This method is required by DjangoModelPermissions or similar permissions."""
        # This queryset is used for permission checks and not for data fetching
        return Invitee.objects.all()
    
    def post(self, request, calendar_id, invitee_id):
        try:
            invitee = Invitee.objects.get(id=invitee_id, calendar_id=calendar_id)  # Also ensure the invitee belongs to the specific calendar
        except Invitee.DoesNotExist:
            return Response({"error": "Invitee not found"}, status=status.HTTP_404_NOT_FOUND)

        calendar = invitee.calendar
        preferred_times = request.data.get('preferred_times', [])
        available_times = request.data.get('available_times', [])

        # Handling timeslots within a database transaction
        with transaction.atomic():
            # Delete all existing timeslots associated with the invitee for this calendar
            TimeSlot.objects.filter(calendar=calendar, invitee=invitee).delete()

            # Create available timeslots
            for time_data in available_times:
                start_time = parse_datetime(time_data['start_time'])
                end_time = start_time + timedelta(minutes=calendar.duration)
                TimeSlot.objects.create(calendar=calendar, invitee=invitee, start_time=start_time, end_time=end_time, is_preferred=False)

            # Create preferred timeslots
            for time_data in preferred_times:
                start_time = parse_datetime(time_data['start_time'])
                end_time = start_time + timedelta(minutes=calendar.duration)
                TimeSlot.objects.create(calendar=calendar, invitee=invitee, start_time=start_time, end_time=end_time, is_preferred=True)

        # Update the invitee object to indicate they have responded
        invitee.has_responded = True
        invitee.save()

        return Response({'message': 'Response submitted successfully'}, status=status.HTTP_200_OK)
