# personal-budget-tracker\budget_tracker_backend\budget\urls.py

# from django.urls import path
# from . import views

# urlpatterns = [
#     path('hello/', views.hello_world),
#     path('register/', views.RegisterView.as_view()),
#     path('login/', views.LoginView.as_view()),  # ✅ Add this line
# ]




from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.LoginView.as_view()),  # ✅
]
