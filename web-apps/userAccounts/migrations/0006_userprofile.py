# Generated by Django 4.1.2 on 2022-11-12 13:29

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('userAccounts', '0005_auto_20220619_1507'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('gender', models.CharField(choices=[('M', 'Male'), ('F', 'Female'), ('O', 'Other')], max_length=1)),
                ('occupation', models.CharField(max_length=100)),
                ('profilePicture', models.ImageField(blank=True, null=True, upload_to='profile_pictures/')),
                ('mobileNumber', models.CharField(max_length=10)),
                ('city', models.CharField(blank=True, default=None, max_length=100, null=True)),
                ('state', models.CharField(blank=True, default=None, max_length=100, null=True)),
                ('country', models.CharField(blank=True, default=None, max_length=100, null=True)),
                ('instagram_username', models.CharField(blank=True, default=None, max_length=100, null=True)),
                ('github_username', models.CharField(blank=True, default=None, max_length=100, null=True)),
                ('twitter_username', models.CharField(blank=True, default=None, max_length=100, null=True)),
                ('facebook_username', models.CharField(blank=True, default=None, max_length=100, null=True)),
                ('portfolio_link', models.CharField(blank=True, default=None, max_length=100, null=True)),
                ('email', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]