# Generated by Django 4.1.2 on 2022-11-12 15:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userAccounts', '0007_user_groups_user_is_superuser_user_user_permissions'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='gender',
            field=models.CharField(choices=[('M', 'Male'), ('F', 'Female'), ('O', 'Other')], max_length=6),
        ),
    ]