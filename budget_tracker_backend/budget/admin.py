# budget/admin.py
from django.contrib import admin
from .models import Transaction, Budget

admin.site.register(Transaction)
admin.site.register(Budget)
