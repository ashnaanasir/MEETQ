from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError as DjangoValidationError

class ProfileSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=False)
    password2 = serializers.CharField(write_only=True, required=False)
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username','email', 'password','password2']

    def validate(self, data):
        password = data.get('password')
        password2 = data.get('password2')

        if password and password != password2:
            raise serializers.ValidationError("The two password fields didn't match")

        if password:
            try:
                validate_password(password)
            except DjangoValidationError as e:
                raise serializers.ValidationError(list(e.messages))

        return data

    def update(self, instance, validated_data):
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)

        password = validated_data.get('password')
        if password:
            if password != validated_data.get('password2'):
                raise serializers.ValidationError("The two password fields didn't match")
            try:
                validate_password(password)
            except DjangoValidationError as e:
                raise serializers.ValidationError(list(e.messages))
            instance.set_password(password)
        instance.save()

        return instance