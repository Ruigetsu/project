# Generated by Django 5.0.2 on 2024-02-24 14:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wallet', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='balance',
            name='balance',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='balance',
            name='price',
            field=models.FloatField(default=0),
        ),
    ]
