from django.contrib import admin
from schedule.models.meeting import *
from schedule.models.schedule import *
from schedule.models.scheduleplan import *

admin.site.register(Meeting)
admin.site.register(Schedule)
admin.site.register(SchedulePlan)
