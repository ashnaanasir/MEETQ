from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from calendars.models.calendar import Calendar
from calendars.serializers.calendar_serializer import CalendarSerializer

class AllCalendarsAPIView(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]
    

    def get(self, request):
        user = request.user
        calendars = Calendar.objects.filter(owner=user)
        serializer = CalendarSerializer(calendars, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    