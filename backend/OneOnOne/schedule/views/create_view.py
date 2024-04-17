import logging

logger = logging.getLogger('app_api') 

from calendars.models import calendar
# from calendars.serializers import calendar_serializer
from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from schedule.models import (meeting, schedule, scheduleoptions,
                             scheduleplan)
from schedule.serializers import schedule_serializer;
from schedule.serializers import scheduleoptions_serializer;
from schedule.serializers import meeting_serializer;


# generate schedules for this user

class CreateView(generics.ListCreateAPIView):
    queryset = schedule.Schedule.objects.all()
    serializer_class = schedule_serializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return self.queryset.filter(owner=self.request.user)
    
    def get(self, request, *args, **kwargs):
        # generate three possible schedules
        if not request.user.is_authenticated:
            return Response({"detail": "Authentication credentials were not provided."}, status=status.HTTP_401_UNAUTHORIZED)

        # cs = calendar_serializer.CalendarSerializer(calendar.Calendar.objects.filter(owner=self.request.user), many=True)
        # logger.info(cs.data)
        # # should come with responses as a relational field

        # options = generate_options(cs.data)
        # s = ScheduleOptionsSerializer(context=request, data=options, queryset=self.get_queryset(), many=True)
        # if not s.is_valid():
        #     return Response(s.errors, status=status.HTTP_400_BAD_REQUEST)
        
        s = self.get_serializer(self.get_queryset(), many=True)
        return Response(s.data)
    
    # def list(self, request, *args, **kwargs):
    #     queryset = self.filter_queryset(self.get_queryset())

    #     # page = self.paginate_queryset(queryset)
    #     # if page is not None:
    #     #     serializer = self.get_serializer(page, many=True)
    #     #     return self.get_paginated_response(serializer.data)

    #     serializer = self.get_serializer(queryset, many=True)
    #     return Response(serializer.data)
    
    def create(self, request, *args, **kwargs):
        # logger.info(request.data)
        # logger.info(request)

        # ms = MeetingSerializer(context=request, data=request.data, many=True)
        # if not ms.is_valid():
        #     return Response(ms.errors, status=status.HTTP_400_BAD_REQUEST)
        # ms.save()

        ss = ScheduleSerializer(context=request, data=request.data)
        if not ss.is_valid():
            return Response(ss.errors, status=status.HTTP_400_BAD_REQUEST)
        ss.save()
        return Response(ss.data, status=status.HTTP_201_CREATED)
    

def generate_options(data):
    # generates 3 calendars in a single schedule options object
    pass