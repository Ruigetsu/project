from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from wallet.request import  is_wallet_connected, createAsset
from .models import Wallet, Asset, Network
from .serializers import WalletSerializer, AssetSerializer

@api_view(['GET', 'POST'])
def wallet_list(request, format = None):
    if request.method == 'GET':
        wallet = Wallet.objects.all()
        serializer = WalletSerializer(wallet, many=True)

        return Response({'data': serializer.data}, headers={'Access-Control-Allow-Origin':'*'})
    
    elif request.method == "POST":
        serializer = WalletSerializer(data=request.data)
        if serializer.is_valid():
            if is_wallet_connected(request.data['wallet_address']):
                serializer.save()
                createAsset(serializer.data["id"], serializer.data["wallet_address"])
            else:
                return Response("This wallet does't exist", status = status.HTTP_404_NOT_FOUND, headers={'Access-Control-Allow-Origin':'*'})
            return Response(serializer.data, status = status.HTTP_201_CREATED, headers={'Access-Control-Allow-Origin':'*'})
        return Response('ERROR', status = status.HTTP_404_NOT_FOUND, headers={'Access-Control-Allow-Origin':'*'})

@api_view(['GET', 'POST'])   
def balance_list(request, format = None):
    if request.method  == 'GET':
        balance = Asset.objects.select_related('wallet_id').all()
        serializer =  AssetSerializer(balance,context={'request': request}, many=True)

        return Response({'data': serializer.data}, headers={'Access-Control-Allow-Origin':'*'})


@api_view(['GET', 'PUT', 'DELETE'])  
def wallet_details(request, pk):

    try:
        wallet = Wallet.objects.get(pk=pk)
    except Wallet.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND, headers={'Access-Control-Allow-Origin':'*'})

    if request.method == 'GET':
        serializer = WalletSerializer(wallet, context={'request': request})
        return Response(serializer.data, headers={'Access-Control-Allow-Origin':'*'})

    elif request.method == 'DELETE':
        print("delete", pk)
        try:
            Asset.objects.get(wallet_id=pk).delete()
        except Asset.DoesNotExist:
            print([])
        wallet.delete()
        
        return Response(status=status.HTTP_204_NO_CONTENT, headers={'Access-Control-Allow-Origin':'*'})

    if not pk:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST,headers={'Access-Control-Allow-Origin':'*'})
    try:
        wallet = Wallet.objects.get(pk=pk)
    except Wallet.DoesNotExist:
        return Response('ERROR', status=status.HTTP_404_NOT_FOUND,headers={'Access-Control-Allow-Origin':'*'} )
    if request.method == 'PUT':
        serializer = WalletSerializer(wallet, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK, headers={'Access-Control-Allow-Origin':'*'})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST, headers={'Access-Control-Allow-Origin':'*'})
    elif request.method  == 'DELETE':
        Asset.objects.filter(wallet_id=wallet.id).delete()
        wallet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT, headers={'Access-Control-Allow-Origin':'*'})
    elif  request.method == 'GET':
        wallet = Wallet.objects.get(pk=pk)
        serializer = WalletSerializer(wallet, data = request.data, context={'request': request})
        if serializer.is_valid():
            return  Response(serializer.data, status = status.HTTP_200_OK, headers={'Access-Control-Allow-Origin':'*'})

    
@api_view(['GET', 'PUT', 'DELETE'])
def balance_details(request, pk):
    try:
        balance = Asset.objects.get(pk=pk)
    except Asset.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND, headers={'Access-Control-Allow-Origin':'*'})

    if request.method == 'GET':
        serializer = AssetSerializer(balance,context={'request': request})
        return Response(serializer.data, headers={'Access-Control-Allow-Origin':'*'})

    elif request.method == 'DELETE':
        balance.delete()

        return Response(status=status.HTTP_204_NO_CONTENT, headers={'Access-Control-Allow-Origin':'*'})
    elif request.method == 'PUT':
        if request.data["track"] == 'true':
            balance.track = True
        else:
            balance.track = False

        balance.delta = request.data['delta']
        balance.save()
        
        return Response(status=status.HTTP_204_NO_CONTENT, headers={'Access-Control-Allow-Origin':'*'})