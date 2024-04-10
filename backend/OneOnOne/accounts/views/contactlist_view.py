from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from accounts.models import contact
from accounts.serializers.contact_serializer import ContactSerializer
from rest_framework.response import Response

# This view is used to list and create contacts.
class ContactListView(generics.ListCreateAPIView):
    queryset = contact.Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        # Filter contacts for the current authenticated userx
        return self.queryset.filter(user=self.request.user)
    
    def get(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            return Response({"detail": "Authentication credentials were not provided."}, status=status.HTTP_401_UNAUTHORIZED)
        return super().get(request, *args, **kwargs)
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)