from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from rest_framework.views import APIView
from django.core.cache import cache
from rest_framework.permissions import AllowAny

class CustomLogoutView(APIView):
    """
    API endpoint for Logout
    """
    permission_classes = [AllowAny]

    def post(self, request):
        refresh_token = request.data.get('refresh')

        if refresh_token:
            # Add the refresh token to the blacklist so that the user is not authenticated anymore
            cache.set(refresh_token, 'blacklisted', timeout=RefreshToken(refresh_token).lifetime.total_seconds())
            return Response({"message": "Logout successful."}, status=status.HTTP_200_OK)
        else:
            return Response({"message": "Refresh token wasn't provided."}, status=status.HTTP_400_BAD_REQUEST)