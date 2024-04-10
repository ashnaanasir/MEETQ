from rest_framework import serializers
from django.contrib.auth.models import User
from accounts.models.contact import Contact
from django.apps import apps
from datetime import date

Calendar = apps.get_model('calendars', 'Calendar')


class CalendarSerializer(serializers.ModelSerializer):
    owner_id = serializers.IntegerField(write_only=True)
    invited_ids = serializers.ListField(child=serializers.IntegerField(), write_only=True, required=False)
    

    class Meta:
        model = Calendar
        # fields = ['id', 'owner_id', 'name', 'description', 'start_date', 'end_date', 'color', 'duration', 'owners_available', 'owners_preferred', 'deadline']
        fields = ['id', 'name', 'description', 'start_date', 'end_date', 'color', 'duration', 'owners_available', 'owners_preferred', 'deadline', 'owner_id', 'invited_ids']


    def validate_owner_id(self, value):
        try:
            User.objects.get(id=value)
        except User.DoesNotExist:
            raise serializers.ValidationError("User with given owner_id does not exist")
        return value

    def validate_invited_ids(self, value):
        if not value:
            return []
        if Contact.objects.filter(id__in=value).count() != len(value):
            raise serializers.ValidationError("One or more Contact IDs are invalid")
        return value
    
    def create(self, validated_daçta):
        owner_id = validated_data.pop('owner_id')
        invited_ids = validated_data.pop('invited_ids', [])

         # Remove the 'owner' key from validated_data if it exists to prevent conflict
        validated_data.pop('owner', None)  # This line ensures 'owner' key is removed if present

        owner = User.objects.get(id=owner_id)
        calendar = Calendar.objects.create(owner=owner, **validated_data)

        if invited_ids:
            calendar.invited.set(Contact.objects.filter(id__in=invited_ids))

        return calendar
        # owner_id = validated_data.pop('owner_id', None)
        # if owner_id is not None:
        #     validated_data['owner'] = User.objects.get(id=owner_id)
        # else:
        #     raise serializers.ValidationError("Owner ID is required.")

        # calendar = Calendar.objects.create(**validated_data)
        # return calendar
    
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.start_date = validated_data.get('start_date', instance.start_date)
        instance.end_date = validated_data.get('end_date', instance.end_date)
        instance.color = validated_data.get('color', instance.color)
        instance.duration = validated_data.get('duration', instance.duration)
        instance.owners_available = validated_data.get('owners_available', instance.owners_available)
        instance.owners_preferred = validated_data.get('owners_preferred', instance.owners_preferred)
        instance.deadline = validated_data.get('deadline', instance.deadline)
        invitees_data = validated_data.pop('invitees', [])
        time_slots_data = validated_data.pop('time_slots', [])

        # Update invitees
        for invitee_data in invitees_data:
            invitee_id = invitee_data.get('id')
            invitee_instance = instance.invitees.get(id=invitee_id)
            invitee_instance.has_responded = invitee_data.get('has_responded')
            for time_slot_data in invitee_instance.available_time_slots:
                time_slot_id = time_slot_data.get('id')
                time_slot_instance = invitee_instance.time_slots.get(id=time_slot_id)
                time_slot_instance.start_time = time_slot_data.get('start_time')
                time_slot_instance.end_time = time_slot_data.get('end_time')
                time_slot_instance.is_preferred = time_slot_data.get('is_preferred')
                time_slot_instance.save()
            invitee_instance.save()

        instance.save()
        return instance
    
    def validate(self, data):
        if data['name'] == '':
            raise serializers.ValidationError("Name cannot be empty")
            
        if Calendar.objects.filter(name=data['name']).exists():
            raise serializers.ValidationError("A calendar with that name already exists")
            
        if data['color'] == '':
            raise serializers.ValidationError("Color cannot be empty")
        
        if data['description'] == '':
            raise serializers.ValidationError("Description cannot be empty")
        
        if data['deadline'] == '':
            raise serializers.ValidationError("Deadline cannot be empty")
        
        if data['start_date'] > data['end_date']:
            raise serializers.ValidationError("Start date must be before end date")
        
        if data['deadline'] > data['end_date']:
            raise serializers.ValidationError("Deadline must be before end date")
        
        if data['duration'] <= 0:
            raise serializers.ValidationError("Duration must be greater than 0")
        
        if data['owners_available'] == '':
            raise serializers.ValidationError("Owners available cannot be empty")
        
        if data['owners_preferred'] == '':
            raise serializers.ValidationError("Owners preferred cannot be empty")
        
        # # needs to have at least 1 invitee
        # if len(data['invitees']) == 0:
        #     raise serializers.ValidationError("Calendar must have at least 1 invitee")
        
            
        return data
        
    def get_all_fields(self):
        """
        Method to get all fields of the Calendar model.
        """
        fields = [field.name for field in Calendar._meta.fields]
        return fields
    
    # method to get all invitees
    def get_all_invitees(self, calendar):
        """
        Method to get all invitees of a calendar.
        """
        invitees = calendar.invitees.all()
        return invitees
    
    # method that iterates over the owner's available and gets all time slots from all invitees that match
    def get_all_available_time_slots(self):
        """
        Method to get all available time slots of a calendar.
        """
        # dict that is created with one key for each slot in owner's available:
        # key: slot, value: 0
        available_time_slots = {}
        for slot in self.owners_available:
            available_time_slots[slot] = 0
        
        for invitee in self.invitees.all():
            # iterate over the invitees available time slots and add to the dict[slot] the invitee name and id
            for slot in invitee.available_time_slots.all():
                available_time_slots[slot] = invitee.id

        return available_time_slots
    
    # method that iterates over the owner's preferred and gets all time slots from all invitees that match
    def get_all_preferred_time_slots(self, calendar):
        """
        Method to get all preferred time slots of a calendar.
        """
        # dict that is created with one key for each slot in owner's preferred:
        # key: slot, value: 0
        preferred_time_slots = {}
        for slot in self.owners_preferred:
            preferred_time_slots[slot] = 0
        
        available_time_slots = self.get_all_available_time_slots()
        
        for invitee in calendar.invitees.all():
            # iterate over the invitees preferred time slots and add to the dict[slot] the invitee name and id
            for slot in invitee.preferred_time_slots.all():
                preferred_time_slots[slot] = invitee.id

        return preferred_time_slots