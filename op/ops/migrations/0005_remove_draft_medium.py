# Generated by Django 3.0.5 on 2020-05-10 20:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ops', '0004_auto_20200501_2251'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='draft',
            name='medium',
        ),
    ]
