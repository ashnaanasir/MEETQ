from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from accounts.models import contact
from accounts.serializers.contact_serializer import ContactSerializer

# This view is used to list and create contacts affiliated with the current authenticated user.

@api_view(['GET', 'POST'])
def contacts_list(request):
    
    # Check if the user is authenticated. If not, return a 401 Unauthorized response.
    if not request.user.is_authenticated:
        return Response({"detail": "Authentication credentials were not provided."}, status=status.HTTP_401_UNAUTHORIZED)
    
    # If the request method is GET, list all contacts affiliated with the current authenticated user.
    if request.method == 'GET':
        # Filter contacts for the current authenticated user.
        contacts = contact.Contact.objects.all().filter(user=request.user)
        serializer = ContactSerializer(contacts, context={'request': request}, many=True)
        return Response(serializer.data)
    
    # If the request method is POST, create a new contact affiliated with the current authenticated user.
    elif request.method == 'POST':
        serializer = ContactSerializer(data=request.data)
        # Set the user field of the contact to the current authenticated user.
        serializer.initial_data['user'] = request.user.pk
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['PUT', 'DELETE'])
def contacts_detail(request, pk):
    # Check if the user is authenticated. If not, return a 401 Unauthorized response.
    if not request.user.is_authenticated:
        return Response({"detail": "Authentication credentials were not provided."}, status=status.HTTP_401_UNAUTHORIZED)
    try:
        con = contact.Contact.objects.get(pk=pk)
    except contact.Contact.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    # Check if the contact is affiliated with the current authenticated user. If not, return a 403 Forbidden response.
    if con.user != request.user:
        return Response({"detail": "You do not have permission to perform this action."}, status=status.HTTP_403_FORBIDDEN)
    
    if request.method == 'PUT':
        serializer = ContactSerializer(contact, data=request.data, context={'request': request})
        # Set the user field of the contact to the current authenticated user.
        serializer.initial_data['user'] = request.user.pk
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        con.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)