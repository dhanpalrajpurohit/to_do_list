from rest_framework import serializers
from django.utils.encoding import smart_str, force_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.contrib.auth import authenticate

from api.models import User

class UserLoginSerializer(serializers.ModelSerializer):
  email = serializers.EmailField(max_length=255)
  class Meta:
    model = User
    fields = ['email', 'password']

class UserProfileSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ['id', 'email', 'name', 'profile_picture']


class UserRegistrationSerializer(serializers.ModelSerializer):
  password2 = serializers.CharField(style={'input_type':'password'}, write_only=True)
  class Meta:
    model = User
    fields=['email', 'name', 'password', 'password2']
    extra_kwargs={
      'password':{'write_only':True}
    }

  def validate(self, attrs):
    password = attrs.get('password')
    password2 = attrs.get('password2')
    if password != password2:
      raise serializers.ValidationError("Password and Confirm Password doesn't match")
    return attrs

  def create(self, validate_data):
    return User.objects.create_user(**validate_data)


class AuthTokenSerializer(serializers.Serializer):
  email = serializers.CharField(
    label="email",
    write_only=True
  )
  password = serializers.CharField(
    label="Password",
    style={'input_type': 'password'},
    trim_whitespace=False,
    write_only=True
  )
  token = serializers.CharField(
    label="Token",
    read_only=True
  )

  def validate(self, attrs):
    email = attrs.get('email')
    password = attrs.get('password')
    if email and password:
      user = authenticate(request=self.context.get('request'),
                          email=email, password=password)
      if not user:
        msg = 'Unable to log in with provided credentials.'
        raise serializers.ValidationError(msg, code='authorization')
    else:
      msg = 'Must include "email" and "password".'
      raise serializers.ValidationError(msg, code='authorization')
    attrs['user'] = user
    return attrs
