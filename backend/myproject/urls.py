"""
URL configuration for myproject project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from wallet import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/wallet/', views.wallet_list, name="Wallet List"),
    path('api/balance/', views.balance_list, name="Balance List"),
    path('api/network/', views.network_list, name="Network List"),
    path('api/wallet/<int:pk>/', views.wallet_details, name='Wallet Details'),
    path('api/balance/<int:pk>/', views.balance_details, name='Balance Details'),
    path('api/network/<int:pk>/', views.network_details, name='Network Details'),
]
