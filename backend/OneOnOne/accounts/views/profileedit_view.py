from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from accounts.serializers.profile_serializer import ProfileSerializer
from rest_framework_simplejwt.authentication import JWTAuthentication

class UserUpdateDetail(generics.RetrieveUpdateAPIView):
    permission_classes = (IsAuthenticated,)
    authentication_classes = (JWTAuthentication,)
    serializer_class = ProfileSerializer

    def get_object(self):
        return self.request.user
