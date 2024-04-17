from accounts.models import contact
from django.contrib.auth.models import User
from rest_framework import serializers
from schedule.models import (meeting, schedule, scheduleoptions, scheduleplan)


class ScheduleSerializer(serializers.ModelSerializer):
    owner = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), default=serializers.CurrentUserDefault())
    meetings = serializers.RelatedField(queryset=meeting.Meeting.objects.all(), many=True)

    class Meta:
        model = schedule.Schedule
        fields = '__all__'

    def create(self, validated_data):
        owner = validated_data.get('owner')
        calendars = validated_data.pop('calendars')

        owner_preferred_time = []
        owner_available_time = []
        list_of_invitees = []
        invitees_preferred_time = []
        invitees_available_time = []

        for calendar in calendars:
            # Fetch owner times
            owner_preferred_time.extend(calendar.owner_preferred_times)
            owner_available_time.extend(calendar.owner_available_times)

            # Iterate over each invitee
            for invitee in calendar.invitees.all():
                list_of_invitees.append(invitee)
                invitees_preferred_time.append((invitee.id, invitee.preferred_times))
                invitees_available_time.append((invitee.id, invitee.available_times))

        # Matching process
        meetings_data = []
        for preferred_time in owner_preferred_time:
            for idx, (invitee_id, times) in enumerate(invitees_preferred_time):
                if preferred_time in times:
                    # Create meeting
                    invitee = Invitee.objects.get(id=invitee_id)
                    meeting_data = {
                        'calendar': calendar,
                        'timeslot': preferred_time,
                        'owner': owner,
                        'invitee': invitee
                    }
                    meeting_serializer = MeetingSerializer(data=meeting_data)
                    if meeting_serializer.is_valid():
                        meeting_serializer.save()
                        meetings_data.append(meeting_serializer.instance)
                        # Remove invitee from the list to prevent re-matching
                        list_of_invitees.remove(invitee)
                        break

        # Instantiate the schedule with the created meetings
        schedule_instance = Schedule.objects.create(owner=owner, **validated_data)
        schedule_instance.meetings.set(meetings_data)
        return schedule_instance