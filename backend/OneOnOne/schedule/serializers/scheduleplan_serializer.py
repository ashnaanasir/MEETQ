from accounts.models import contact
from django.contrib.auth.models import User
from rest_framework import serializers
from schedule.models import (meeting, schedule, scheduleoptions, scheduleplan)


class SchedulePlanSerializer(serializers.ModelSerializer):
    owner = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), default=serializers.CurrentUserDefault())
    schedule = serializers.PrimaryKeyRelatedField(queryset=schedule.Schedule.objects.all())
    meetings = serializers.RelatedField(queryset=meeting.Meeting.objects.all(), many=True)

    class Meta:
        model = scheduleplan.SchedulePlan
        fields = '__all__'