from django.contrib import admin
from regis.models import Profile
from friends.models import Friends


class FriendsAdmin(admin.ModelAdmin):
    list_display = ("id", "sender_id", "receiver_id")
    search_fields = ("sender_id", "receiver_id")


class ProfileAdmin(admin.ModelAdmin):
    list_display = ("id", "first_name", "last_name", "sport")
    search_fields = ("id", "first_name")


admin.site.register(Friends, FriendsAdmin)
admin.site.register(Profile, ProfileAdmin)
