from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from calendars.models.calendar import Calendar
from calendars.models.timeslot import TimeSlot

class CalendarTimeSlotsView(APIView):
    queryset = TimeSlot.objects.none()

    def get(self, request, calendar_id):
        try:
            calendar = Calendar.objects.get(pk=calendar_id)
            available_times = TimeSlot.objects.filter(calendar=calendar, is_preferred=False).values('start_time', 'end_time')
            preferred_times = TimeSlot.objects.filter(calendar=calendar, is_preferred=True).values('start_time', 'end_time')
            response_data = {
                'available_times': list(available_times),
                'preferred_times': list(preferred_times)
            }
            return Response(response_data, status=status.HTTP_200_OK)
        except Calendar.DoesNotExist:
            return Response({'error': 'Calendar not found'}, status=status.HTTP_404_NOT_FOUND)