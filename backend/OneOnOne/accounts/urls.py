from django.urls import path, re_path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from accounts.views import register_view, profileview_view, profileedit_view, contact_edit_view, contacts_view
from accounts.views import login_view, logout_view
app_name = "accounts"

urlpatterns = [
    path('register/',register_view.UserCreate.as_view(), name='register'),
    path('login/', login_view.CustomLoginView.as_view(), name='login'), # Similar to api/token
    path('logout/', logout_view.CustomLogoutView.as_view(), name='logout'), 
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'), # Similar to login
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('profile/view/', profileview_view.UserProfileDetail.as_view(), name='profile_view'),
    path('profile/edit/', profileedit_view.UserUpdateDetail.as_view(), name='profile_edit'),
    re_path(r'^api/contacts/$', contacts_view.contacts_list, name='list_contacts'),
    re_path(r'^api/contacts/([0-9]+)$', contact_edit_view.contact_edit, name='contact_update'),
]
