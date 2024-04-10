from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from accounts.models.contact import Contact
from accounts.serializers.contact_serializer import ContactSerializer
from rest_framework.response import Response

# This view is used to update and delete contacts.
class ContactUpdateView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Filter contacts for the current authenticated user
        return self.queryset.filter(user=self.request.user)
    
    def get(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            return Response({"detail": "Authentication credentials were not provided."}, status=status.HTTP_401_UNAUTHORIZED)
        return super().get(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            return Response({"detail": "Authentication credentials were not provided."}, status=status.HTTP_401_UNAUTHORIZED)
        obj = self.get_object()
        if obj.user != request.user:
            return Response({"detail": "You do not have permission to perform this action."}, status=status.HTTP_403_FORBIDDEN)
        return super().put(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            return Response({"detail": "Authentication credentials were not provided."}, status=status.HTTP_401_UNAUTHORIZED)
        obj = self.get_object()
        if obj.user != request.user:
            return Response({"detail": "You do not have permission to perform this action."}, status=status.HTTP_403_FORBIDDEN)
        return super().delete(request, *args, **kwargs)