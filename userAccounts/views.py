from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework.authentication import TokenAuthentication
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from django.http import JsonResponse

from .models import UserProfile
from userAccounts.renderers import UserRenderer
from userAccounts.serializers import (
    SendPasswordResetEmailSerializer,
    UserChangePasswordSerializer,
    UserLoginSerializer,
    UserPasswordResetSerializer,
    UserSessionSerializer,
    UserRegistrationSerializer,
    UserProfileSerializer
)


# Generate Token Manually
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        "refresh": str(refresh),
        "access": str(refresh.access_token),
    }


class UserRegistrationView(APIView):
    renderer_classes = [UserRenderer]

    def post(self, request):
        serializer = UserRegistrationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token, _ = Token.objects.get_or_create(user=user)
        return JsonResponse({"token": token.key, "user": serializer.data, "msg": "Registration Successful"}, status=200)


class UserLoginView(APIView):
    renderer_classes = [UserRenderer]

    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.data.get("email")
        password = serializer.data.get("password")
        user = authenticate(email=email, password=password)
        if user is not None:
            token, _ = Token.objects.get_or_create(user=user)
            user = UserSessionSerializer(user)
            return JsonResponse(
                {"token": token.key, "user": user.data, "successMessage": "Authentication has been successful."},
                status=status.HTTP_200_OK,
            )
        else:
            return JsonResponse(
                {"errorMessage": "Email or Password is not valid"},
                status=status.HTTP_404_NOT_FOUND,
            )


class UserProfileView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]

    def get(self, request):
        try:
            user = UserProfile.objects.get(email=request.user)
        except UserProfile.DoesNotExist:
            return JsonResponse({"errorMessage": "User is does not exist"}, status=status.HTTP_404_NOT_FOUND)
        serializer = UserProfileSerializer(user)
        return JsonResponse(serializer.data, status=status.HTTP_200_OK)


class UserChangePasswordView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = UserChangePasswordSerializer(
            data=request.data, context={"user": request.user}
        )
        serializer.is_valid(raise_exception=True)
        return JsonResponse(
            {"successMessage": "Password Changed Successfully"}, status=status.HTTP_200_OK
        )


class SendPasswordResetEmailView(APIView):
    renderer_classes = [UserRenderer]

    def post(self, request, format=None):
        serializer = SendPasswordResetEmailSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(
            {"successMessage": "Password Reset link send. Please check your Email"},
            status=status.HTTP_200_OK,
        )


class UserPasswordResetView(APIView):
    renderer_classes = [UserRenderer]

    def post(self, request, uid, token, format=None):
        serializer = UserPasswordResetSerializer(
            data=request.data, context={"uid": uid, "token": token}
        )
        serializer.is_valid(raise_exception=True)
        return Response(
            {"successMessage": "Password Reset Successfully"}, status=status.HTTP_200_OK
        )
