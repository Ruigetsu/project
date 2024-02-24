from rest_framework import serializers
from .models import Wallet, Balance
class WalletSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wallet
        fields= '__all__'

class BalanceSerializer(serializers.ModelSerializer):
    wallet_name = serializers.ReadOnlyField(source = 'wallet_id.wallet_name')
    class Meta:
        model = Balance
        fields= '__all__'
