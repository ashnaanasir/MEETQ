from rest_framework import serializers
from django.apps import apps
from django.utils import timezone
from calendars.models.timeslot import TimeSlot


class TimeSlotSerializer(serializers.ModelSerializer):
    class Meta:
        model = TimeSlot
        fields = ['id', 'invitee', 'calendar', 'start_time', 'end_time', 'is_preferred']

    def get_duration(self, obj):
        return (obj.end_time - obj.start_time).total_seconds() / 60  # Duration in minutes
    
    def create(self, validated_data):       
        return TimeSlot.objects.create(**validated_data)    
    
    def update(self, instance, validated_data):
        instance.start_time = validated_data.get('start_time', instance.start_time)
        instance.end_time = validated_data.get('end_time', instance.end_time)
        instance.is_preferred = validated_data.get('is_preferred', instance.is_preferred)
        instance.save()
        return instance
    
    def validate(self, data):
        if data['calendar'] is None:
            raise serializers.ValidationError("Calendar must be set")
        if (data['end_time'] - data['start_time']).total_seconds() / 60 > data['calendar'].duration:
            raise serializers.ValidationError("Time slot duration cannot exceed calendar duration")
        if data['start_time'] > data['end_time']:
            raise serializers.ValidationError("Start time must be before end time")
        if data['start_time'] < timezone.now():
            raise serializers.ValidationError("Start time must be in the future")
        if data['end_time'] < timezone.now():
            raise serializers.ValidationError("End time must be in the future")
        if data['isPreferred'] is None:
            raise serializers.ValidationError("Preferred status must be set")
        if data['invitee'] is None:
            raise serializers.ValidationError("Invitee must be set")
        return data
    