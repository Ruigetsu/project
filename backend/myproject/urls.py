from django.contrib import admin
from django.urls import path
from wallet import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/wallet/', views.wallet_list, name="Wallet List"),
    path('api/balance/', views.balance_list, name="Balance List"),
    path('api/wallet/<int:pk>/', views.wallet_details, name='Wallet Details'),
    path('api/balance/<int:pk>/', views.balance_details, name='Balance Details'),
]
