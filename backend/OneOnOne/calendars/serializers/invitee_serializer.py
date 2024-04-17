from rest_framework import serializers
from django.apps import apps

Invitee = apps.get_model('calendars', 'Invitee')

class InviteeSerializer(serializers.ModelSerializer):
    contact = serializers.SerializerMethodField()
    calendar = serializers.SerializerMethodField()
    class Meta:
        model = Invitee
        fields = ['id', 'contact', 'calendar', 'has_responded', 'available_timeslots', 'preferred_timeslots']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['calendar'] = instance.calendar.name
        return representation
        
    def create(self, validated_data):
        contact_data = validated_data.pop('contact')
        contact = contact.objects.get(id=contact_data)
        calendar_data = validated_data.pop('calendar')
        calendar = Calendar.objects.get(id=calendar_data)

        invitee = Invitee.objects.create(contact=contact, calendar=calendar, **validated_data)
        return invitee

    def update(self, instance, validated_data):
        instance.has_responded = validated_data.get('has_responded', instance.has_responded)
        instance.save()

        # Update associated timeslots if necessary
        if instance.has_responded:
            available_timeslots = instance.available_timeslots.all()
            preferred_timeslots = instance.preferred_timeslots.all()

            # Mark available timeslots as preferred
            for time_slot_data in available_timeslots:
                time_slot_id = time_slot_data.get('id')
                time_slot_instance = instance.time_slots.get(id=time_slot_id)
                time_slot_instance.start_time = time_slot_data.get('start_time')
                time_slot_instance.end_time = time_slot_data.get('end_time')
                time_slot_instance.is_preferred = time_slot_data.get('is_preferred')
                time_slot_instance.save()
            instance.save()

        return instance
    
    def validate(self, data):
        if data['contact'] is None:
            raise serializers.ValidationError("Contact must be set")
        if data['calendar'] is None:
            raise serializers.ValidationError("Calendar must be set")
        if Invitee.objects.filter(contact=data['contact'], calendar=data['calendar']).exists():
            raise serializers.ValidationError("Invitee already exists")
        return data