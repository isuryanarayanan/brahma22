from django.contrib import admin
from events.models import Event

# Register your models here.
admin.site.register(Event)
admin.site.site_header = "Events Admin"
admin.site.site_title = "Events Admin"
admin.site.index_title = "Events Admin"
