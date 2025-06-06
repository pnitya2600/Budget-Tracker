# budget/models.py
from django.db import models

class Transaction(models.Model):
    CATEGORY_CHOICES = [
        ('income', 'Income'),
        ('expense', 'Expense'),
    ]

    title = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=10, choices=CATEGORY_CHOICES)
    date = models.DateField()

    def __str__(self):
        return f"{self.title} - {self.category} - ₹{self.amount}"

class Budget(models.Model):
    month = models.CharField(max_length=20)
    limit = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.month} - ₹{self.limit}"

