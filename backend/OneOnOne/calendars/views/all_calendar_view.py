from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from calendars.models.calendar import Calendar
from calendars.serializers.calendar_serializer import CalendarSerializer

class AllCalendarsAPIView(APIView):
    
    def get(self, request):

        # if not request.user.is_authenticated:
        #     return Response({"detail": "Authentication credentials were not provided."}, status=status.HTTP_401_UNAUTHORIZED)
        

        user = request.user
        calendars = Calendar.objects.filter(owner=user)
        serializer = CalendarSerializer(calendars, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    