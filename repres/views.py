from django.shortcuts import render, render_to_response
from regis.models import *
from django.http import HttpResponseRedirect
from django.contrib import auth

from django.contrib.auth.decorators import login_required

from django.views.decorators.csrf import csrf_protect, csrf_exempt
#=============================================================

def myprofile(request, myid = None):
    #getting profile
    if myid == None:
        myid = auth.get_user(request).id
    profile = Profile.objects.get(id = myid)
    #got profile
    first_name  = profile.first_name
    last_name   = profile.last_name
    sex         = profile.sex
    birth_year  = profile.birth_year
    birth_month = profile.birth_month
    birth_day   = profile.birth_day
    country     = profile.country
    city        = profile.city
    sport       = profile.sport
    equipments  = profile.equipments
    boots       = profile.boots
    wearing     = profile.wearing
    sportnutr   = profile.sportnutr
    hype        = profile.hype
    score       = profile.score

    menurep = False
    user = auth.get_user(request)
    if user.is_authenticated:
        menurep = True

    return render_to_response('repres_templ/MYrepresent.html', {
        'first_name':   first_name,
        'last_name':    last_name,
        'sex':          sex,
        'birth_year':   birth_year,
        'birth_month':  birth_month,
        'birth_day':    birth_day,
        'country':      country,
        'city':         city,
        'sport':        sport,
        'equipments':   equipments,
        'boots':        boots,
        'wearing':      wearing,
        'sportnutr':    sportnutr,
        'hype':         hype,
        'score':        score,
        'menurep':      menurep,
    }, )

def toMyprofile(request):
    user = auth.get_user(request)
    if user.is_authenticated:
        return HttpResponseRedirect("/{id}".format(id = str(user.id)))
    else:
        return HttpResponseRedirect("/invalid/")

def userRepr(request, person_id):
    menurep = False
    user = auth.get_user(request)
    profile = Profile.objects.get(id=person_id)
    if user.is_authenticated:
        menurep = True
        if user.id == profile.id:
            return myprofile(request, user.id)

    first_name  = profile.first_name
    last_name   = profile.last_name
    sex         = profile.sex
    birth_year  = profile.birth_year
    birth_month = profile.birth_month
    birth_day   = profile.birth_day
    country     = profile.country
    city        = profile.city
    sport       = profile.sport
    equipments  = profile.equipments
    boots       = profile.boots
    wearing     = profile.wearing
    sportnutr   = profile.sportnutr
    hype        = profile.hype
    score       = profile.score

    return render_to_response('repres_templ/profileRepresent.html', {
        'first_name':   first_name,
        'last_name':    last_name,
        'sex':          sex,
        'birth_year':   birth_year,
        'birth_month':  birth_month,
        'birth_day':    birth_day,
        'country':      country,
        'city':         city,
        'sport':        sport,
        'equipments':   equipments,
        'boots':        boots,
        'wearing':      wearing,
        'sportnutr':    sportnutr,
        'hype':         hype,
        'score':        score,
        'menurep':      menurep,
        'person_id':    person_id,
    }, )

@login_required()
def changeProfile(request):
    id        = auth.get_user(request).id
    profile   = Profile.objects.get(id = id)
    user_data_dic = {
        'first_name':   profile.first_name,
        'last_name':    profile.last_name,
        'sex':          profile.sex,
        'year':         profile.birth_year,
        'month':        profile.birth_month,
        'day':          profile.birth_day,
        'country':      profile.country,
        'city':         profile.city,
        'sport':        profile.sport,
        'equipments':   profile.equipments,
        'boots':        profile.boots,
        'wearing':      profile.wearing,
        'sportnutr':    profile.sportnutr,
        'menurep':      True
    }
    return render(request, "regis_templ/regBlank.html", user_data_dic)