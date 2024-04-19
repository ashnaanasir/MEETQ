from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from calendars.models.calendar import Calendar
from calendars.models.invitee import Invitee
from calendars.serializers.calendar_serializer import CalendarSerializer
from calendars.serializers.invitee_serializer import InviteeSerializer

class CalendarInviteesView(APIView):
    def get_queryset(self):
        calendar_id = self.kwargs.get('calendar_id', None)
        if calendar_id:
            try:
                return Calendar.objects.get(id=calendar_id).invitees.all()
                # return calendar.invitees.all()
            except Calendar.DoesNotExist:
                return None
        return None
    
    def get(self, request, calendar_id):
        queryset = self.get_queryset()
        if queryset is None:
            return Response({'message': 'Calendar not found or no invitees'}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = InviteeSerializer(queryset, many=True)
        return Response(serializer.data)
