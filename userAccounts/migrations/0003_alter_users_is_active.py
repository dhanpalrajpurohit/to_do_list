# Generated by Django 4.0.4 on 2022-05-01 15:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userAccounts', '0002_users_delete_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='users',
            name='is_active',
            field=models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active'),
        ),
    ]
