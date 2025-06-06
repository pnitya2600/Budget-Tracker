# budget/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.serializers import Serializer, CharField
from rest_framework.permissions import AllowAny  # ✅ add this

from django.contrib.auth import authenticate

class LoginSerializer(Serializer):
    username = CharField()
    password = CharField(write_only=True)

class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid(): 
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']

            user = authenticate(username=username, password=password)
            if user is not None:
                return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
            return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

