from rest_framework import serializers
from django.contrib.auth.models import User
from django.utils.translation import gettext as _

class UserSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username','email', 'password','password2']

    extra_kwargs = {
        'first_name': {'required': True},
        'last_name': {'required': True},
        'username': {'required': True},
        'email': {'required': True},
        'password': {'required': True},
        'password2': {'required': True}
    }

    def validate(self, data):
        password = data.get('password')
        password2 = data.get('password2')

        if password != password2:
            raise serializers.ValidationError(_("The two password fields didn't match"))
        elif len(password) < 8:
            raise serializers.ValidationError(_("The password must be at least 8 characters long"))
        return data
        

    def validate_username(self, value):
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError(_("A user with that username already exists"))
        return value

    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError(_("A user with that email already exists"))
        return value

    def create(self, validated_data, *args, **kwargs):
        validated_data.pop('password2')
        user = User.objects.create_superuser(**validated_data)
        return user

