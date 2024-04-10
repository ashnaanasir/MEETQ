from rest_framework_simplejwt.tokens import Token
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    # With custom token serializer, I can redirect the user to the url I want to redirect.
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['profile_redirect'] = 'accounts:profile_view'
        return token