from rest_framework import serializers
from accounts.models import contact

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = contact.Contact
        fields = ['id', 'first_name', 'last_name', 'email']