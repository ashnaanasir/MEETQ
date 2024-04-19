from django.http import JsonResponse
from django.urls import reverse
from django.conf import settings
from calendars.models.calendar import Calendar
from calendars.models.invitee import Invitee
# from django.core.mail import send_mail

def send_invite(user, calendar_id, invitee_id):
    try:
        invitee = Invitee.objects.get(id=invitee_id)
        calendar = Calendar.objects.get(id=calendar_id)
    except Invitee.DoesNotExist:
        # Handle if invitee does not exist
        return JsonResponse({'error': 'Invitee not found'}, status=404)
    except Calendar.DoesNotExist:
        # Handle if calendar does not exist
        return JsonResponse({'error': 'Calendar not found'}, status=404)

    # Generate a unique link for the invitee to respond to the invitation
    unique_link = reverse('calendars:invite-response', kwargs={'calendar_id': calendar.id, 'invitee_id': invitee.id})
    invite_url = settings.BASE_URL + unique_link

    # Prepare email subject and message
    subject = f'You are invited to the event {calendar.name}!'
    message = f'Hello {invitee.contact.first_name}, You have been invited to the event "{calendar.name}" by {calendar.owner.username}. Please click on the link below to submit your response:\n{invite_url}. Best regards,{calendar.owner.username}'

    # Return the subject and message as part of the response
    return JsonResponse({
        'subject': subject,
        'message': message,
        'invite_url': invite_url
    }, status=200)


# def send_invite(user, calendar_id, invitee_id):
#     try:
#         invitee = Invitee.objects.get(id=invitee_id)
#         calendar = Calendar.objects.get(id=calendar_id)

#     except Invitee.DoesNotExist:
#         # Handle if invitee does not exist
#         return JsonResponse({'error': 'Invitee not found'}, status=404)
#     except Calendar.DoesNotExist:
#         # Handle if calendar does not exist
#         return JsonResponse({'error': 'Calendar not found'}, status=404)

#  # Generate a unique link for the invitee to respond to the invitation
#     unique_link = reverse('calendars:invite-response', kwargs={'calendar_id': calendar.id, 'invitee_id': invitee.id})
#     invite_url = settings.BASE_URL + unique_link

#     # Send email to invitee (assuming SMTP setup or similar email backend is configured)
#     subject = f'You are invited to the event {calendar.name}!'
#     message = f'Hello {invitee.contact.first_name},\n\nYou have been invited to the event "{calendar.name}" by {calendar.owner.username}. Please click on the link below to submit your response:\n{invite_url}\n\nBest regards,\n{calendar.owner.username}'
#     from_email = settings.DEFAULT_FROM_EMAIL
#     to_email = [invitee.contact.email]

#     # Attempt to send the email
#     try:
#         send_mail(subject, message, from_email, to_email)
#     except Exception as e:
#         return JsonResponse({'error': str(e)}, status=500)

#     return JsonResponse({'message': 'Invite sent successfully', 'invite_url': invite_url}, status=200)
