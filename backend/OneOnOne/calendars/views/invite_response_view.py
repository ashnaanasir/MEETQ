from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from calendars.models.invitee import Invitee
from calendars.serializers.timeslot_serializer import TimeSlotSerializer

class InviteResponseAPIView(APIView):
    def post(self, request, invitee_id):
        invitee = Invitee.objects.get(id=invitee_id)
        calendar = invitee.calendar
        preferred_times = request.data.get('preferred_times', [])
        available_times = request.data.get('available_times', [])

        # Delete all existing timeslots associated with the invitee for this calendar
        invitee.time_slots.filter(calendar=calendar).delete()

        for start_time, end_time in preferred_times + available_times:
            timeslot_data = {
                'invitee': invitee.id,
                'calendar': calendar.id,
                'start_time': start_time,
                'end_time': end_time,
                'is_preferred': (start_time, end_time) in preferred_times,
            }

            serializer = TimeSlotSerializer(data=timeslot_data)
            if serializer.is_valid():
                serializer.save()

        # Update the invitee object
        invitee.has_responded = True
        invitee.save()

        return Response({'message': 'Response submitted successfully'}, status=status.HTTP_200_OK)
