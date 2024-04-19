from django.urls import path
from calendars.views import send_invite_view
from calendars.views.all_calendar_view import AllCalendarsAPIView
from calendars.views.calendar_details_view import CalendarDetailsAPIView
from calendars.views.create_calendar_view import CreateCalendarAPIView
from calendars.views.edit_calendar_view import EditCalendarAPIView
from calendars.views.invite_response_view import InviteResponseAPIView
from calendars.views.invite_view import InviteAPIView
from calendars.views.create_timeslot_view import CreateTimeSlotAPIView
from calendars.views.all_invitees_view import CalendarInviteesView
from calendars.views.calendar_timeslots_view import CalendarTimeSlotsView

app_name = 'calendars'



urlpatterns = [
    path('calendar/', AllCalendarsAPIView.as_view(), name='all-calendars'), #works
    path('calendars/<int:calendar_id>/', CalendarDetailsAPIView.as_view(), name='calendar-details'), #works
    path('calendars/create/', CreateCalendarAPIView.as_view(), name='create-calendar'), #works
    path('calendars/edit/<int:calendar_id>/', EditCalendarAPIView.as_view(), name='edit-calendar'), #works
    path('calendars/<int:calendar_id>/timeslots/', CalendarTimeSlotsView.as_view(), name='calendar-timeslots'), #works
    path('calendars/<int:calendar_id>/invitees/', CalendarInviteesView.as_view(), name='invitees'), #works
    path('calendars/<int:calendar_id>/invitees/<int:invitee_id>/', InviteAPIView.as_view(), name='invite'), #works
    path('calendars/<int:calendar_id>/invitees/<int:invitee_id>/response/', InviteResponseAPIView.as_view(), name='invite-response'), #works
    path('calendars/<int:calendar_id>/invitees/<int:invitee_id>/send_invite/', send_invite_view.send_invite, name='send-invite'), #works
    
    path('timeslot/create/', CreateTimeSlotAPIView.as_view(), name='create-timeslot'), #don't need this but works
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