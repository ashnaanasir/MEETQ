from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from accounts.serializers.contact_serializer import ContactSerializer
from accounts.models.contact import Contact

# View to get and update a contact

@api_view(['GET', 'PUT', 'DELETE'])
def contact_edit(request, pk):
    # Check if the user is authenticated. If not, return a 401 Unauthorized response.
    if not request.user.is_authenticated:
        return Response({"detail": "Authentication credentials were not provided."}, status=status.HTTP_401_UNAUTHORIZED)
    try:
        con = Contact.objects.get(pk=pk)
    except Contact.objects.all().filter(user=request.user, pk=pk).DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        con = Contact.objects.get(pk=pk)
        serializer = ContactSerializer(con, context={'request': request})
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        con = Contact.objects.get(pk=pk)
        serializer = ContactSerializer(con, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        con.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)