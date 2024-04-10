from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from calendars.serializers.invitee_serializer import InviteeSerializer
from accounts.models.contact import Contact
from calendars.models.calendar import Calendar

class InviteAPIView(APIView):
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        calendar_id = request.data.get('calendar_id')
        contact_id = request.data.get('contact_id')

        try:
            calendar = Calendar.objects.get(id=calendar_id, owner=request.user)
        except Calendar.DoesNotExist:
            return Response({"error": "Calendar not found"}, status=status.HTTP_404_NOT_FOUND)

        try:
            contact = Contact.objects.get(id=contact_id)
        except Contact.DoesNotExist:
            return Response({"error": "Contact not found"}, status=status.HTTP_404_NOT_FOUND)

        invitee_data = {'calendar': calendar.id, 'contact': contact.id}
        serializer = InviteeSerializer(data=invitee_data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
