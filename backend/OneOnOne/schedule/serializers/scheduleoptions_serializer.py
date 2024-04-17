from accounts.models import contact
from django.contrib.auth.models import User
from rest_framework import serializers
from schedule.models import (meeting, schedule, scheduleoptions, scheduleplan)



class ScheduleOptionsSerializer(serializers.ModelSerializer):
    owner = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), default=serializers.CurrentUserDefault())
    option1 = serializers.PrimaryKeyRelatedField(queryset=schedule.Schedule.objects.all())
    option2 = serializers.PrimaryKeyRelatedField(queryset=schedule.Schedule.objects.all())
    option3 = serializers.PrimaryKeyRelatedField(queryset=schedule.Schedule.objects.all())

    class Meta:
        model = scheduleoptions.ScheduleOptions
        fields = '__all__'