from django.http import HttpResponse
from django.urls import path
from schedule.views import create_view, delete_view, view_view

app_name = "schedule"


urlpatterns = [
    # This is just a temporary URL to test the app. Remove it once you write the correct paths.
    # path('tempshedule/', lambda request: HttpResponse("Temporary URL"), name='temp'),
    path('create/', create_view.CreateView.as_view(), name='create'),
    path('view/', view_view.ViewView.as_view(), name='view'),
    path('<int:pk>/delete/', delete_view.DeleteView.as_view(), name='delete'),
]