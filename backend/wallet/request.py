from web3 import  Web3
import json
import requests
from requests import Request, Session
from requests.exceptions import ConnectionError, Timeout, TooManyRedirects
from .models import Network

#ERC20_ABI = json.loads('''[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint256","name":"_initialSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"decimals_","type":"uint8"}],"name":"setupDecimals","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]''')

url = 'https://pro-api.coinmarketcap.com/v2/tools/price-conversion'
COINMARKETCAP_API = "105dbb7e-bc1c-43f7-8bd8-c617faf01bea"
#INFURA_API = "0d12ed4428834836abad0bdb71f85446"
#INFURA_URL = "https://mainnet.infura.io/v3/" + INFURA_API

def is_wallet_connected(wallet_address):
    return Web3.is_address(wallet_address)

def get_token_symbol(token_adress, network_id):
    network = Network.objects.get(id=network_id)
    web3 = Web3(Web3.HTTPProvider(network.network_url))
    if web3.is_connected():
        try:
            contract = web3.eth.contract(token_adress, abi=network.network_ABI)
            token_symbol = contract.functions.symbol().call()
            
            return token_symbol
        except:
            return None

    return None
        
def get_token_price(symbol):
    parameters = {
        'amount': 1,
        'symbol': symbol,
        'convert':'USDT'
    }
    headers = {
        'Accepts': 'application/json',
        'X-CMC_PRO_API_KEY': COINMARKETCAP_API,
    }

    session = Session()
    session.headers.update(headers)

    try:
        response = session.get(url, params=parameters)
        data = json.loads(response.text)
        return data['data'][0]['quote']['USDT']['price']
    except:
        return None

    return None

def is_contract_exist(token_adress, network_id):
    network = Network.objects.get(id=network_id)

    web3 = Web3(Web3.HTTPProvider(network.network_url))
    if web3.is_connected():
        try:
            contract = web3.eth.contract(token_adress, abi=network.network_ABI)
            return True
        except:
            return False
        
def get_balance(wallet_adress, token_adress, network_id):
    network = Network.objects.get(id=network_id)

    web3 = Web3(Web3.HTTPProvider(network.network_url))
    if web3.is_connected():
        try:
            contract = web3.eth.contract(token_adress, abi=network.network_ABI)
            balance_of_token = contract.functions.balanceOf(wallet_adress).call()  # in Wei
            token_decimals = contract.functions.decimals().call()

            balance = balance_of_token/ 10 ** token_decimals
            
            return balance
        except:
            return None

    return None