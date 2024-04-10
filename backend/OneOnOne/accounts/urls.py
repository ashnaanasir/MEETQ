from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from accounts.views import register_view, profileview_view, profileedit_view, contactlist_view, contactupdate_view

app_name = "accounts"

urlpatterns = [
    path('register/',register_view.UserCreate.as_view(), name='register'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('profile/', profileview_view.UserProfileDetail.as_view(), name='profile_view'),
    path('profile/edit/', profileedit_view.UserUpdateDetail.as_view(), name='profile_edit'),
    path('contacts/view/', contactlist_view.ContactListView.as_view(), name='list_contacts'),
    path('contacts/<int:pk>/update/', contactupdate_view.ContactUpdateView.as_view(), name='contact_update'),
]
