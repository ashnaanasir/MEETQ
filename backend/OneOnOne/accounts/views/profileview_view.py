from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from accounts.serializers.profile_serializer import ProfileSerializer
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.views.decorators.csrf import csrf_exempt


# We change the UpdateApiView to retriveApiView

class UserProfileDetail(generics.RetrieveAPIView):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (JWTAuthentication,)
    serializer_class = ProfileSerializer

    def get_object(self):
        return self.request.user