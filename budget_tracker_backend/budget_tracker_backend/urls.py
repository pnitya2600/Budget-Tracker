# budget_tracker_backend/budget_tracker_backend/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('budget.urls')),  # 👈 this must match
]

