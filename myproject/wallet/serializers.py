from rest_framework import serializers
from .models import Wallet, Balance, Network
class WalletSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wallet
        fields= '__all__'

class BalanceSerializer(serializers.ModelSerializer):
    wallet_name = serializers.ReadOnlyField(source = 'wallet_id.wallet_name')
    network_name = serializers.ReadOnlyField(source='network_id.network_name')
    
    class Meta:
        model = Balance
        fields= '__all__'

class NetworkSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Network
        fields= '__all__'