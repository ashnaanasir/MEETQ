from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from calendars.models.invitee import Invitee
from calendars.models.calendar import Calendar
from calendars.serializers.timeslot_serializer import TimeSlotSerializer

class CreateTimeSlotAPIView(APIView):
    def post(self, request):
        invitee_id = request.data.get('invitee_id')
        calendar_id = request.data.get('calendar_id')
        start_time = request.data.get('start_time')
        end_time = request.data.get('end_time')

        try:
            invitee = Invitee.objects.get(id=invitee_id)
            calendar = Calendar.objects.get(id=calendar_id)
        except (Invitee.DoesNotExist, Calendar.DoesNotExist):
            return Response({"error": "Invitee or Calendar not found"}, status=status.HTTP_404_NOT_FOUND)

        # Ensure the invitee belongs to the provided calendar
        if invitee.calendar != calendar:
            return Response({"error": "Invitee does not belong to the provided calendar"}, status=status.HTTP_400_BAD_REQUEST)

        timeslot_data = {
            'invitee': invitee.id,
            'calendar': calendar.id,
            'start_time': start_time,
            'end_time': end_time,
        }

        serializer = TimeSlotSerializer(data=timeslot_data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
