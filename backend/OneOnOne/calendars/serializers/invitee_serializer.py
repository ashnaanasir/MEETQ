from rest_framework import serializers
from django.apps import apps
from calendars.models.calendar import Calendar
from accounts.models.contact import Contact
from calendars.models.timeslot import TimeSlot
from calendars.serializers.timeslot_serializer import TimeSlotSerializer
from calendars.models.invitee import Invitee

Invitee = apps.get_model('calendars', 'Invitee')

class InviteeSerializer(serializers.ModelSerializer):
    contact = serializers.PrimaryKeyRelatedField(queryset=Contact.objects.all())  # Assuming Contact model is correctly imported and used
    calendar = serializers.PrimaryKeyRelatedField(queryset=Calendar.objects.all())
    available_timeslots = TimeSlotSerializer(many=True, read_only=True)  # Ensure correct source if different
    preferred_timeslots = TimeSlotSerializer(many=True, read_only=True)  # Ensure correct source if different

    class Meta:
        model = Invitee
        fields = ['id', 'contact', 'calendar', 'has_responded', 'available_timeslots', 'preferred_timeslots']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['calendar'] = instance.calendar.name  # Optionally include more details about the calendar
        representation['contact'] = {
            'id': instance.contact.id,
            'name': instance.contact.first_name + ' ' + instance.contact.last_name,  # Adjust according to the fields in your Contact model
            'email': instance.contact.email
        }
        return representation

    def create(self, validated_data):
        # Since `contact` and `calendar` are now PrimaryKeyRelatedFields, they will be automatically validated and fetched
        invitee = Invitee.objects.create(**validated_data)
        return invitee

    def update(self, instance, validated_data):
        instance.has_responded = validated_data.get('has_responded', instance.has_responded)
        instance.save()
        return instance

    def validate(self, data):
        if 'contact' not in data:
            raise serializers.ValidationError("Contact must be set")
        if 'calendar' not in data:
            raise serializers.ValidationError("Calendar must be set")
        if Invitee.objects.filter(contact=data['contact'], calendar=data['calendar']).exists():
            raise serializers.ValidationError("Invitee already exists")
        return data

    def get_full_name(self, obj):
        return f"{obj.contact.first_name} {obj.contact.last_name}" if obj.contact else "No contact info"
