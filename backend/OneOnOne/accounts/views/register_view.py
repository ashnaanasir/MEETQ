from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics
from accounts.serializers.user_serializer import UserSerializer
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User

class UserCreate(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)

    def perform_create(self, serializer):
        user = serializer.save()
        user.set_password(user.password)
        user.is_active = True
        user.is_staff = True
        user.is_superuser = True
        user.save()

    def post (self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        if response.status_code == 201:
            user = User.objects.get(username=request.data['username'])
            user.set_password(request.data['password'])
            user.save()
            return Response({'status': 'User Created.'}, status=status.HTTP_201_CREATED)
        return response
    
    

