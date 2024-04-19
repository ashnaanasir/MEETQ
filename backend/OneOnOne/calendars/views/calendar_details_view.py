from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from calendars.models.calendar import Calendar
from calendars.serializers.calendar_serializer import CalendarSerializer

class CalendarDetailsAPIView(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, calendar_id):
        try:
            calendar = Calendar.objects.get(id=calendar_id)
        except Calendar.DoesNotExist:
            return Response({"error": "Calendar not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = CalendarSerializer(calendar)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

    def put(self, request, calendar_id):
        try:
            calendar = Calendar.objects.get(id=calendar_id, owner=request.user)
        except Calendar.DoesNotExist:
            return Response({"error": "Calendar not found"}, status=status.HTTP_404_NOT_FOUND)

        serializer = CalendarSerializer(calendar, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, calendar_id):
        try:
            calendar = Calendar.objects.get(id=calendar_id, owner=request.user)
        except Calendar.DoesNotExist:
            return Response({"error": "Calendar not found"}, status=status.HTTP_404_NOT_FOUND)

        calendar.delete()
        return Response({"message": "Calendar deleted"}, status=status.HTTP_204_NO_CONTENT)