from django.contrib import admin
from django.urls import path
from rest_framework.authtoken import views as token_views

from .viewsets import TaskViewSet, UserSigninView, UserSignupView
urlpatterns = [
    path('get-token/', token_views.obtain_auth_token, name='get-token'),
    path('signup/', UserSignupView.as_view(), name='user-signup'),
    path('signin/', UserSigninView.as_view(), name='user-signin'),
    path('tasks/<str:email_address>/', TaskViewSet.as_view(), name='get-task'),
]
