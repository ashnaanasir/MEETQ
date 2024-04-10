from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from schedule.models import schedule
from schedule.serializers.schedule_serializer import ScheduleSerializer


# view schedules for this user
class ViewView(generics.ListAPIView):
    queryset = schedule.Schedule.objects.all()
    serializer_class = ScheduleSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return super().get_queryset().filter(owner=self.request.user )
    
    def get(self, request, *args, **kwargs):
        if not request.user.is_authenticated:
            return Response({"detail": "Authentication credentials were not provided."}, status=status.HTTP_401_UNAUTHORIZED)
        return super().get(request, *args, **kwargs)
    