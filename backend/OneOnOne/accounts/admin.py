from django.contrib import admin

# Register your models here.
from accounts.models.contact import Contact

admin.site.register(Contact)