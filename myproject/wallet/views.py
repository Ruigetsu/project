from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from wallet.request import get_token_symbol, is_wallet_connected, get_token_price, get_balance
from .models import Wallet, Balance, Network
from .serializers import WalletSerializer, BalanceSerializer
from wallet.serializers import NetworkSerializer
import json
import requests
from django.shortcuts import render, redirect

@api_view(['GET', 'POST'])
def wallet_list(request, format = None):
    if request.method == 'GET':
        wallet = Wallet.objects.all()
        serializer = WalletSerializer(wallet, many=True)

        return Response({'data': serializer.data})
    
    elif request.method == "POST":
        serializer = WalletSerializer(data=request.data)
        if serializer.is_valid():
            if is_wallet_connected(request.data['wallet_address']):
                serializer.save()
            else:
                return Response("This wallet does't exist", status = status.HTTP_404_NOT_FOUND)
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response('ERROR', status = status.HTTP_404_NOT_FOUND)

@api_view(['GET', 'POST'])   
def balance_list(request, format = None):
    if request.method  == 'GET':
        balance = Balance.objects.select_related('wallet_id').all()
        serializer =  BalanceSerializer(balance,context={'request': request}, many=True)

        return Response({'data': serializer.data})
    
    elif request.method == 'POST':
        token_address = request.data['token_address']
        wallet_id  = request.data['wallet_id']
        network_id =  request.data['network_id']

        if Balance.objects.filter(wallet_id=wallet_id,network_id = network_id, token_address=token_address).count() != 0:
            return Response("ERROR",status=status.HTTP_400_BAD_REQUEST)
        wallet = Wallet.objects.get(pk=wallet_id)
        token_symbol = get_token_symbol(token_address, network_id)
        token_price = get_token_price(token_symbol)
        balance = get_balance(wallet.wallet_address, token_address, network_id)

        serializer = BalanceSerializer(data = {
            'token': token_symbol,
            'token_address': token_address,
            'network': request.data['network'],
            'balance': balance,
            'price': token_price,
            'wallet_id': wallet_id,
            'network_id': network_id
        })

        if serializer.is_valid():
            serializer.save()
        else:
            return Response(serializer.errors, status = status.HTTP_404_NOT_FOUND)
        return Response(serializer.data, status = status.HTTP_201_CREATED)


@api_view(['GET', 'PUT', 'DELETE'])  
def wallet_details(request, pk):
    if not pk:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    try:
        wallet = Wallet.objects.get(pk=pk)
    except Wallet.DoesNotExist:
        return Response('ERROR', status=status.HTTP_404_NOT_FOUND)
    if request.method == 'PUT':
        serializer = WalletSerializer(wallet, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method  == 'DELETE':
        Balance.objects.filter(wallet_id=wallet.id).delete()
        wallet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif  request.method == 'GET':
        wallet = Wallet.objects.get(pk=pk)
        serializer = WalletSerializer(wallet, data = request.data, context={'request': request})
        if serializer.is_valid():
            return  Response(serializer.data, status = status.HTTP_200_OK)
    
@api_view(['GET', 'PUT', 'DELETE'])  
def balance_details(request, pk):
    if not pk:
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    try:
        balance = Balance.objects.get(pk=pk)
    except Balance.DoesNotExist:
        return Response('ERROR', status = status.HTTP_404_NOT_FOUND)
    if  request.method == 'PUT':
        serializer = BalanceSerializer(balance, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method  == 'DELETE':
        balance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'GET':
        serializer = BalanceSerializer(balance, data = request.data, context={'request': request})
        return  Response(serializer.data, status = status.HTTP_200_OK)
    
@api_view(['GET', 'POST'])
def network_list(request, format = None):
    if request.method == 'GET':
        network = Network.objects.all()
        serializer = NetworkSerializer(network, many=True)

        return Response({'data': serializer.data})
    
    elif request.method == "POST":
        serializer=NetworkSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        else:
            return Response("Error", status = status.HTTP_404_NOT_FOUND)
        return Response(serializer.data, status = status.HTTP_201_CREATED)
    return Response('ERROR', status = status.HTTP_404_NOT_FOUND)
    
@api_view(['GET', 'PUT', 'DELETE'])  
def network_details(request, pk):
    if not pk:
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    try:
        network = Network.objects.get(pk=pk)
    except Network.DoesNotExist:
        return Response('ERROR', status = status.HTTP_404_NOT_FOUND)
    if  request.method == 'PUT':
        serializer = NetworkSerializer(network, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method  == 'DELETE':
        network.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'GET':
        netwrok = Network.objects.get(pk=pk)
        serializer = NetworkSerializer(network, data = request.data, context={'request': request})
        if serializer.is_valid():
            return  Response(serializer.data, status = status.HTTP_200_OK)