# Generated by Django 5.0.2 on 2024-02-24 14:01

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Wallet',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('wallet_name', models.CharField(max_length=255, unique=True)),
                ('wallet_address', models.CharField(max_length=255, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Balance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('token', models.CharField(max_length=20)),
                ('token_address', models.CharField(blank=True, max_length=255)),
                ('network', models.CharField(max_length=20)),
                ('balance', models.IntegerField(default=0)),
                ('price', models.IntegerField(default=0)),
                ('createdAt', models.DateTimeField(auto_now_add=True, verbose_name='Created At')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='Updated At')),
                ('wallet_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='wallet.wallet')),
            ],
        ),
    ]
