from django.db import models

class Wallet(models.Model):
    wallet_name = models.CharField(max_length=255, unique = True)
    wallet_address = models.CharField(max_length=255, unique = True)
    
    def __str__(self):
        return self.wallet_name

class Balance(models.Model):
    token = models.CharField(max_length=20) #symbol
    token_address = models.CharField(max_length = 255, blank = True)
    network = models.CharField(max_length = 20)
    balance = models.FloatField(default = 0) #amount actually
    price = models.FloatField(default = 0) # price for 1  token in USD
    createdAt = models.DateTimeField("Created At", auto_now_add = True)
    updated = models.DateTimeField("Updated At", auto_now = True)
    wallet_id = models.ForeignKey("Wallet", on_delete = models.PROTECT, null = True)
    network_id = models.ForeignKey("Network", on_delete = models.PROTECT, null = True)
    
    def __str__  (self):
        return self.token
    
    def save(self, *args, **kwargs):
        self.price = round(self.price, 2)
        super(Balance, self).save(*args, **kwargs)

class Network(models.Model):
    network_name = models.CharField(max_length=255, unique = True)
    network_url = models.CharField(max_length=255)
    network_ABI = models.CharField(max_length=255)
    
    def __str__(self):
        return self.network_name