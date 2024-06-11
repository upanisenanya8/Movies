from django.urls import path
from . import views
from .views import index, login_view
from .views import index, login_view, logout_view

urlpatterns = [
    path('', views.index, name='home'),
    path('login/', login_view, name='login'),
]
urlpatterns = [
    path('', index, name='index'),
    path('login/', login_view, name='login'),
    path('logout/', logout_view, name='logout'),
    # Add other paths here
]
