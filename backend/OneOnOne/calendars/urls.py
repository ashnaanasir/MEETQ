from django.urls import path

from calendars.views import send_invite_view
from calendars.views.all_calendar_view import AllCalendarsAPIView
from calendars.views.calendar_details_view import CalendarDetailsAPIView
from calendars.views.create_calendar_view import CreateCalendarAPIView
from calendars.views.edit_calendar_view import EditCalendarAPIView
from calendars.views.invite_response_view import InviteResponseAPIView
from calendars.views.invite_view import InviteAPIView
from calendars.views.create_timeslot_view import CreateTimeSlotAPIView

app_name = 'calendars'

urlpatterns = [
    path('calendars/', AllCalendarsAPIView.as_view(), name='all-calendars'),
    path('calendar/<int:calendar_id>/', CalendarDetailsAPIView.as_view(), name='calendar-details'),
    path('calendar/create/', CreateCalendarAPIView.as_view(), name='create-calendar'),
    path('calendar/edit/<int:calendar_id>/', EditCalendarAPIView.as_view(), name='edit-calendar'),
    path('invite/', InviteAPIView.as_view(), name='invite'),
    path('invite/response/<int:invitee_id>/', InviteResponseAPIView.as_view(), name='invite-response'),
    path('send_invite/', send_invite_view.send_invite, name='send-invite'),
    path('timeslot/create/', CreateTimeSlotAPIView.as_view(), name='create-timeslot'),
]


# from django.urls import path
# from django.http import HttpResponse
# from calendars.views import all_calendar_view, create_calendar_view, edit_calendar_view
# from calendars.views import calendardetails_view, invite_view

# app_name = "calendars"


# urlpatterns = [
#     path('temp/', lambda request: HttpResponse("Temporary URL"), name='temp'),
#     path('all/', all_calendar_view.APIView.as_view(), name='all'),
#     path('calendar/<int:calendar_id>/', calendardetails_view.CalendarDetailsAPIView.as_view(), name='calendar-details'),
#     path('calendar/<int:calendar_id>/edit/', edit_calendar_view.EditCalendarAPIView.as_view(), name='edit-calendar'),
#     path('create/', create_calendar_view.CreateView.as_view(), name='create'),
#     path('invite/', invite_view.InviteView.as_view(), name='invite'),
#     path('send_invite/', send_invite_view.send_invite, name='send-invite'),
#     path('create-timeslot/', create_calendar_view.CreateTimeSlotView.as_view(), name='create-timeslot'),
#     path('invite-response/<int:invite_id>/<int:calendar_id>/', invite_view.InviteResponseView.as_view(), name='invite-response'),


#     path('all/', all_view.AllView.as_view(), name='all'),
#     path('<int:calendar_id>/view/', calendardetails_view.CalendarDetailsView.as_view(), name='details'),
#     path('<int:calendar_id>/edit/', edit_view.EditView.as_view(), name='edit'),
#     path('create/', create_view.CreateView.as_view(), name='create'),
#     path('create/select/', select_view.SelectView.as_view(), name='select'),
#     path('create/invite/', invite_view.InviteView.as_view(), name='invite'),
# ]