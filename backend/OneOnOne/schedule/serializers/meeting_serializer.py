from accounts.models import contact
from django.contrib.auth.models import User
from rest_framework import serializers
from schedule.models import (meeting, schedule, scheduleoptions, scheduleplan)

class MeetingSerializer(serializers.ModelSerializer):
    owner = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), default=serializers.CurrentUserDefault())
    contact = serializers.PrimaryKeyRelatedField(queryset=contact.Contact.objects.all())
    meetings = serializers.RelatedField(queryset=meeting.Meeting.objects.all(), many=True)
    schedule = serializers.PrimaryKeyRelatedField(queryset=schedule.Schedule.objects.all())

    class Meta:
        model = meeting.Meeting
        fields = '__all__'

    def create(self, validated_data):
        owner = validated_data.get('owner')
        contact = validated_data.get('contact')
        schedule = validated_data.get('schedule')
        meeting = meeting.Meeting.objects.create(owner=owner, contact=contact, schedule=schedule, **validated_data)
        return meeting