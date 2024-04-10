from django.http import JsonResponse
from django.urls import reverse
from django.conf import settings
from calendars.models.calendar import Calendar
from calendars.models.invitee import Invitee

def send_invite(user, invite_id):
    try:
        invitee = Invitee.objects.get(id=invite_id)
        calendar = invitee.calendar
    except Invitee.DoesNotExist:
        # Handle if invitee does not exist
        return JsonResponse({'error': 'Invitee not found'}, status=404)
    except Calendar.DoesNotExist:
        # Handle if calendar does not exist
        return JsonResponse({'error': 'Calendar not found'}, status=404)

    # Verify that the authenticated user is the owner of the calendar
    if user != calendar.owner:
        return JsonResponse({'error': 'Unauthorized'}, status=403)

    # Generate a unique link based on invite ID and calendar ID
    unique_link = reverse('response-page', kwargs={'invite_id': invitee.id, 'calendar_id': calendar.id})
    invite_url = settings.BASE_URL + unique_link 

    # Send email to invitee
    subject = 'You are invited to the event {calendar.name}!'
    message = f'You have been invited to the event {calendar.name} by {calendar.owner}. Please click the link below to respond:\n\n{invite_url}'
    from_email = settings.DEFAULT_FROM_EMAIL
    to_email = [invitee.contact.email]

    # Return HTTP 200 OK response with the invite URL
    return JsonResponse({'invite_url': invite_url}, status=200)
