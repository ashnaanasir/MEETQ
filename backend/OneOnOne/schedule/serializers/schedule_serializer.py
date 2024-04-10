from accounts.models import contact
from django.contrib.auth.models import User
from rest_framework import serializers
from schedule.models import (meeting, schedule, scheduleoptions,
                             scheduleplan)


class ScheduleOptionsSerializer(serializers.ModelSerializer):
    owner = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), default=serializers.CurrentUserDefault())
    option1 = serializers.PrimaryKeyRelatedField(queryset=schedule.Schedule.objects.all())
    option2 = serializers.PrimaryKeyRelatedField(queryset=schedule.Schedule.objects.all())
    option3 = serializers.PrimaryKeyRelatedField(queryset=schedule.Schedule.objects.all())

    class Meta:
        model = scheduleoptions.ScheduleOptions
        fields = '__all__'

class ScheduleSerializer(serializers.ModelSerializer):
    owner = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), default=serializers.CurrentUserDefault())
    meetings = serializers.RelatedField(queryset=meeting.Meeting.objects.all(), many=True)

    class Meta:
        model = schedule.Schedule
        fields = '__all__'

class MeetingSerializer(serializers.ModelSerializer):
    owner = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), default=serializers.CurrentUserDefault())
    contact = serializers.PrimaryKeyRelatedField(queryset=contact.Contact.objects.all())
    meetings = serializers.RelatedField(queryset=meeting.Meeting.objects.all(), many=True)
    schedule = serializers.PrimaryKeyRelatedField(queryset=schedule.Schedule.objects.all())

    class Meta:
        model = meeting.Meeting
        fields = '__all__'

# class ResponseSerializer(serializers.ModelSerializer):
#     calendar = serializers.PrimaryKeyRelatedField(read_only=True)
#     contact = serializers.PrimaryKeyRelatedField(read_only=True)

#     class Meta:
#         model = response.Response
#         fields = '__all__'
#         validators = [
#             serializers.UniqueTogetherValidator(
#                 queryset=response.Response.objects.all(),
#                 fields=['calendar', 'contact']
#             )
#         ]

# class SchedulePlanSerializer(serializers.ModelSerializer):
#     owner = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), default=serializers.CurrentUserDefault())
#     thisweek = serializers.PrimaryKeyRelatedField(read_only=True)
#     nextweek = serializers.PrimaryKeyRelatedField(read_only=True)

#     class Meta:
#         model = scheduleplan.SchedulePlan
#         fields = '__all__'

