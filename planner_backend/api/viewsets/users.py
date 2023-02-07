from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token

from api.serializers import UserLoginSerializer, UserRegistrationSerializer, UserProfileSerializer, AuthTokenSerializer
from api.renderers import UserRenderer

# Generate Token Manually
def get_tokens_for_user(user):
  refresh = RefreshToken.for_user(user)
  return {
      'refresh': str(refresh),
      'access': str(refresh.access_token),
  }

class UserSigninView(APIView):
  permission_classes = [AllowAny]
  renderer_classes = [UserRenderer]
  def post(self, request, format=None):
    serializer = UserLoginSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    email = serializer.validated_data.get('email')
    password = serializer.validated_data.get('password')
    user = authenticate(email=email, password=password)
    if user is not None:
      # token = get_tokens_for_user(user)
      user = UserProfileSerializer(user)
      return Response({'user': user.data,'msg':'Login Success'}, status=status.HTTP_200_OK)
    else:
      return Response({'errors':{'non_field_errors':['Email or Password is not Valid']}}, status=status.HTTP_404_NOT_FOUND)


class UserSignupView(APIView):
  permission_classes = [AllowAny]
  def post(self, request, format=None):
    serializer = UserRegistrationSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()
    token = get_tokens_for_user(user)
    return Response({'token':token, 'msg':'Registration Successful'}, status=status.HTTP_201_CREATED)


class UserProfileView(APIView):
  permission_classes = [IsAuthenticated]
  def get(self, request):
    user = UserProfileSerializer(request.user)
    return Response({'user':user.data}, status=status.HTTP_201_CREATED)


class CustomObtainAuthToken(ObtainAuthToken):
  serializer_class = AuthTokenSerializer

  def post(self, request, *args, **kwargs):
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.validated_data['user']
    token, created = Token.objects.get_or_create(user=user)
    return Response({'token': token.key})

