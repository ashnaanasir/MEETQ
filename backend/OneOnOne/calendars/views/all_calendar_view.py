from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from calendars.models.calendar import Calendar
from calendars.serializers.calendar_serializer import CalendarSerializer

class AllCalendarsAPIView(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        calendars = Calendar.objects.filter(owner=user)
        serializer = CalendarSerializer(calendars, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
# from rest_framework import generics, status
# from rest_framework.permissions import IsAuthenticated
# from calendars.models import Calendar
# from calendars.serializers.calendar_serializer import CalendarSerializer
# from rest_framework.response import Response
# from django.http import JsonResponse
# from django.views import View
# from django.http import HttpResponse


# class AllView(View):
#     queryset = Calendar.objects.all()
#     serializer_class = CalendarSerializer
#     permission_classes = [IsAuthenticated]

#     def get_queryset(self):
#         # Filter calendars for the current authenticated user
#         return self.queryset.filter(owner=self.request.user)
    
#     def get(self, request, *args, **kwargs):
#         if not request.user.is_authenticated:
#             return Response({"detail": "Authentication credentials were not provided."}, status=status.HTTP_401_UNAUTHORIZED)
#             return super().get(request, *args, **kwargs)
        
#         user = request.user
#         calendars = Calendar.objects.filter(Q(owner=user)).distinct()
#         data = []
#         for calendar in calendars:
#             data.append({
#                 "id": calendar.id,
#                 "name": calendar.name,
#                 "description": calendar.description,
#                 "start_date": calendar.start_date,
#                 "end_date": calendar.end_date,
#                 "color": calendar.color,
#                 "duration": calendar.duration,
#                 "owners_available": calendar.owners_available,
#                 "owners_preferred": calendar.owners_preferred,
#                 "deadline": calendar.deadline,
#                 "responded_invitees_count": calendar.responded_invitees_count,
#                 "available_timeslots": list(calendar.available_timeslots.values()),
#                 "preferred_timeslots": list(calendar.preferred_timeslots.values())
#             })
#         return JsonResponse(data, safe=False)

# # from django.shortcuts import render
# # from django.views import View
# # from django.http import JsonResponse
# # from calendars.models import Calendar
# # from django.http import Http404
# # from django.utils import timezone
# # from django.contrib.auth.models import User
# # from django.db.models import Q

# # class AllView(View):
# #     def get(self, request):
# #         """Returns all the calendars for the user."""
        
# #         if not request.user.is_authenticated:
# #             return Response({"detail": "Authentication credentials were not provided."}, status=status.HTTP_401_UNAUTHORIZED)
        

# #         user = request.user
# #         calendars = Calendar.objects.filter(Q(owner=user)).distinct()
# #         data = []
# #         for calendar in calendars:
# #             data.append({
# #                 "id": calendar.id,
# #                 "name": calendar.name,
# #                 "description": calendar.description,
# #                 "start_date": calendar.start_date,
# #                 "end_date": calendar.end_date,
# #                 "color": calendar.color,
# #                 "duration": calendar.duration,
# #                 "owners_available": calendar.owners_available,
# #                 "owners_preferred": calendar.owners_preferred,
# #                 "deadline": calendar.deadline,
# #                 "responded_invitees_count": calendar.responded_invitees_count,
# #                 "available_timeslots": list(calendar.available_timeslots.values()),
# #                 "preferred_timeslots": list(calendar.preferred_timeslots.values())
# #             })
# #         return JsonResponse(data, safe=False)
    
