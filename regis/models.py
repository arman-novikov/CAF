from django.db import models
from django.contrib.auth.models import User
from os import system
from AAA.settings import USERS_MEDIA_DIR

def user_media_folder_create(id):
    ids = str(id)
    exestr = " mkdir %s/%s" %(USERS_MEDIA_DIR, ids)
    system(exestr)
    for folder in ["audio","video","photo"]:
        exestr = "mkdir %s/%s/%s" % (USERS_MEDIA_DIR, ids, folder)
        system(exestr)
    return

class ProfileManager(models.Manager):
    def update_user(self, id, first_name, last_name, sex,
                    birth_year, birth_month, birth_day,
                    country,city,
                    sport, equipments, boots, wearing, sportnutr):
        Profile = self.get(id = id)
        Profile.first_name  =   first_name
        Profile.last_name   =   last_name
        Profile.sex         =   sex
        Profile.birth_year  =   int(birth_year)
        Profile.birth_month =   int(birth_month)
        Profile.birth_day   =   int(birth_day)
        Profile.country     =   country
        Profile.city        =   city
        Profile.sport       =   sport
        Profile.equipments  =   equipments
        Profile.boots       =   boots
        Profile.wearing     =   wearing
        Profile.sportnutr   =   sportnutr
        Profile.save()

    def create_profile(self, id):
        profile = self.create(id = id)
        user_media_folder_create(id)
        return profile

class Profile(models.Model):
    username    = models.CharField(max_length=1,  default='0') # for admin
    first_name  = models.CharField(max_length=30, default='')
    last_name   = models.CharField(max_length=30, default='')
    sex         = models.CharField(max_length=15, default='')
    birth_year  = models.IntegerField(default=0)
    birth_month = models.IntegerField(default=0)
    birth_day   = models.IntegerField(default=0)
    country     = models.CharField(max_length=30, default='')
    city        = models.CharField(max_length=30, default='')
    sport       = models.CharField(max_length=200, default='')
    equipments  = models.CharField(max_length=30, default='')
    boots       = models.CharField(max_length=30, default='')
    wearing     = models.CharField(max_length=30, default='')
    sportnutr   = models.CharField(max_length=30, default='')
    hype        = models.IntegerField(default=0)
    score       = models.IntegerField(default=0)
    def __str__(self):
        return u'%s' % self.username

    def __unicode__(self):
        return u'%s %s' %(self.first_name, self.last_name)

    objects = ProfileManager()

    class Meta:
        ordering = ['id']
