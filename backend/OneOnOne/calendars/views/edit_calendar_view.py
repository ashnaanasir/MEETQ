from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from calendars.models.calendar import Calendar
from calendars.serializers.calendar_serializer import CalendarSerializer

class EditCalendarAPIView(APIView):
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]

    def put(self, request, *args, **kwargs):
        calendar_id = kwargs.get('calendar_id')  # Retrieve calendar_id from URL kwargs

        try:
            # Ensure only the owner can edit the calendar
            calendar = Calendar.objects.get(id=calendar_id, owner=request.user)
        except Calendar.DoesNotExist:
            return Response({"error": "Calendar not found"}, status=status.HTTP_404_NOT_FOUND)

        # Pass `partial=True` to allow partial updates
        serializer = CalendarSerializer(calendar, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
# class EditCalendarAPIView(APIView):
#     authentication_classes = [SessionAuthentication]
#     permission_classes = [IsAuthenticated]

#     def put(self, request, calendar_id):
#         try:
#             calendar = Calendar.objects.get(id=calendar_id, owner=request.user)
#         except Calendar.DoesNotExist:
#             return Response({"error": "Calendar not found"}, status=status.HTTP_404_NOT_FOUND)

#         serializer = CalendarSerializer(calendar, data=request.data, partial=True)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_200_OK)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
