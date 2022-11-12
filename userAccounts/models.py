from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.conf import settings
from rest_framework.authtoken.models import Token


#  Custom User Manager
class UserManager(BaseUserManager):
    def create_user(self, email, name, tc, password=None, password2=None):
        if not email:
            raise ValueError("User must have an email address")
        user = self.model(
            email=self.normalize_email(email),
            name=name,
            tc=tc,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, tc, password=None):
        user = self.create_user(
            email,
            password=password,
            name=name,
            tc=tc,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(
        verbose_name="Email",
        max_length=255,
        unique=True,
    )
    name = models.CharField(max_length=200)
    tc = models.BooleanField()
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["name", "tc"]

    def __int__(self):
        return self.email

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_admin


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


class UserProfile(models.Model):
    GENDER = (
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    )
    email = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    gender = models.CharField(max_length=6, choices=GENDER)
    occupation = models.CharField(max_length=100)
    profilePicture = models.ImageField(upload_to="profile_pictures/", blank=True, null=True,)
    mobileNumber = models.CharField(max_length=10)
    city = models.CharField(max_length=100, blank=True, null=True, default=None)
    state = models.CharField(max_length=100, blank=True, null=True, default=None)
    country = models.CharField(max_length=100, blank=True, null=True, default=None)
    instagram_username = models.CharField(max_length=100, blank=True, null=True, default=None)
    github_username = models.CharField(max_length=100, blank=True, null=True, default=None)
    twitter_username = models.CharField(max_length=100, blank=True, null=True, default=None)
    facebook_username = models.CharField(max_length=100, blank=True, null=True, default=None)
    portfolio_link = models.CharField(max_length=100, blank=True, null=True, default=None)

    def __str__(self):
        return str(self.email) + "-" + str(self.name)
