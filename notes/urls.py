from django.urls import path
from userAccounts.views import *

urlpatterns = [
    path('notes/', UserRegistrationView.as_view(), name='register'),
    path('notes/<int:pk>/', UserLoginView.as_view(), name='login'),
]