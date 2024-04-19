from rest_framework import serializers
from django.apps import apps
from django.utils import timezone
from calendars.models.timeslot import TimeSlot
from calendars.models.calendar import Calendar
from calendars.models.invitee import Invitee


class TimeSlotSerializer(serializers.ModelSerializer):
    calendar = serializers.PrimaryKeyRelatedField(queryset=Calendar.objects.all())
    invitee = serializers.PrimaryKeyRelatedField(
        queryset=Invitee.objects.all(),
        required=False,  # Makes the invitee optional
        allow_null=True  # Allows null value for invitee
    )

    class Meta:
        model = TimeSlot
        fields = ['id', 'invitee', 'calendar', 'start_time', 'end_time', 'is_preferred']

    def validate(self, data):
        # Ensure start time is before end time
        if data['start_time'] >= data['end_time']:
            raise serializers.ValidationError("Start time must be before end time")

        # # Ensure the timeslot is in the future
        # if data['start_time'] < timezone.now():
        #     raise serializers.ValidationError("Start time must be in the future")
        # if data['end_time'] < timezone.now():
        #     raise serializers.ValidationError("End time must be in the future")

        # Ensure timeslot does not exceed the calendar's maximum duration
        calendar = data.get('calendar')
        if calendar and (data['end_time'] - data['start_time']).total_seconds() / 60 > calendar.duration:
            raise serializers.ValidationError("Time slot duration cannot exceed the maximum duration set by the calendar")

        # Validate preferred status
        if 'is_preferred' in data and data['is_preferred'] not in [True, False]:
            raise serializers.ValidationError("Preferred status must be set to a valid boolean value")

        return data

    def create(self, validated_data):
        # Custom logic to handle creation of a new timeslot
        timeslot = TimeSlot.objects.create(**validated_data)
        return timeslot

    def update(self, instance, validated_data):
        # Custom logic to handle updates to an existing timeslot
        instance.start_time = validated_data.get('start_time', instance.start_time)
        instance.end_time = validated_data.get('end_time', instance.end_time)
        instance.is_preferred = validated_data.get('is_preferred', instance.is_preferred)
        instance.save()
        return instance