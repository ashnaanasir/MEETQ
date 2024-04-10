from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from accounts.serializers.profile_serializer import ProfileSerializer


# We change the UpdateApiView to retriveApiView
class UserProfileDetail(generics.RetrieveAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = ProfileSerializer

    def get_object(self):
        return self.request.user