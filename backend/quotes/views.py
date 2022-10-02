from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import QuoteSerializer

from .models import Quote

@api_view(["GET"])
def getAllQuotes(request):
    quotes = Quote.objects.all()
    serializer = QuoteSerializer(quotes, many=True)
    return Response({"quotes":serializer.data},status=status.HTTP_200_OK)