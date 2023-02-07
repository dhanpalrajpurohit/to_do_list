from django.contrib import admin
from django.urls import path
from rest_framework.authtoken import views as token_views

from .viewsets import TaskViewSet, UserSigninView, UserSignupView, UserProfileView, CustomObtainAuthToken

urlpatterns = [
    path('get-token/', CustomObtainAuthToken.as_view(), name='get-token'),
    path('signup/', UserSignupView.as_view(), name='user-signup'),
    path('signin/', UserSigninView.as_view(), name='user-signin'),
    path('get-profile/', UserProfileView.as_view(), name='user-profile'),
    path('tasks/<str:email_address>/', TaskViewSet.as_view(), name='get-task'),
]
