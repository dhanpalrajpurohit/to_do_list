from django.contrib import admin
from django.urls import path
from rest_framework.authtoken import views as token_views

from .viewsets import TaskViewSet, UserSigninView, UserSignupView, UserProfileView, CustomObtainAuthToken, TasksViewSet, UserSignoutView

urlpatterns = [
    path('get-token/', CustomObtainAuthToken.as_view(), name='get-token'),
    path('signup/', UserSignupView.as_view(), name='user-signup'),
    path('signin/', UserSigninView.as_view(), name='user-signin'),
    path('logout/', UserSignoutView.as_view(), name='user-signout'),
    path('get-profile/', UserProfileView.as_view(), name='user-profile'),
    path('tasks/<str:email_address>/', TasksViewSet.as_view(), name='get-task-list'),
    path('task/<str:email_address>/<int:task_id>/', TaskViewSet.as_view(), name='get-task'),

]
