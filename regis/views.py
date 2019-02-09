# these all are for date
from datetime import datetime, date, time

# d = date(2005, 7, 14)
#===========================================================

from django.shortcuts import render, render_to_response, redirect

from regis.forms import *
from regis.models import *

from django.contrib.auth.decorators import login_required
from django.contrib import auth # todo import from auth login, authenticate, logout, get_user

# from django.contrib.auth import get_user !!!!!!!!!
# new_contact.user = get_user(request)

from django.http import HttpResponseRedirect

#=============================================================
#@login_required(login_url='/check/')

@login_required
def home(request):
    return render_to_response(
        'regis_templ/home.html',
        {'user': request.user},
    )


def start(request):
    return render(request,'regis_templ/start.html',
                  {'regisform': RegistrationForm(),'loginform': LoginForm()})


def logout_page(request):
    auth.logout(request)
    return HttpResponseRedirect('/')


def my_login(request):
    if request.method == "POST":
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user     = auth.authenticate(username=username, password=password)
            auth.login(request, user)
            return HttpResponseRedirect("/myprofile/")
        else:
            erl = []
            for errors in form.errors.items():
                for err in errors[1]:
                    erl.append(err)
            return render(request, 'regis_templ/start.html',
                          {'loginform': form, 'regisform':RegistrationForm(), "logerl":erl})
    else:
        return render_to_response('regis_templ/invalid.html', )


def showRegBlank(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            user = User.objects.create_user(
                username=form.cleaned_data['username'],
                password=form.cleaned_data['password1'],
                email=form.cleaned_data['email']
            )
            #here logining after registration begins
            username = form.cleaned_data['username']
            password = form.cleaned_data['password1']
            user = auth.authenticate(username=username, password=password)
            if user is not None:
                auth.login(request, user)
            #here logining after registration ends
            #profile = Profile.objects.create_profile(user.id)
            Profile.objects.create_profile(user.id)
            #profile.save()
            return render(request, 'regis_templ/regBlank.html', {'menurep':True})
        else:
            erl = []
            for errors in form.errors.items():
                for err in errors[1]:
                    erl.append(err)
            return render(request, 'regis_templ/start.html',
                          {'regisform':form, 'loginform': LoginForm(), "regerl":erl})
    else:
        return render_to_response('regis_templ/invalid.html',)


def invalid(request):
    return render_to_response ("regis_templ/invalid.html",)


@login_required
def regBlank(request):
    first_name = request.POST.get('first_name','')
    last_name = request.POST.get('last_name','')
    sex = request.POST.get('sex', '')
    year = request.POST.get('year', 0)
    month = request.POST.get('month', 0)
    day = request.POST.get('day', 0)
    country = request.POST.get('country','')
    city = request.POST.get('city','')
    sport = request.POST.get('sport','')
    equipments = request.POST.get('equipments','')
    boots = request.POST.get('boots','')
    wearing = request.POST.get('wearing','')
    sportnutr = request.POST.get('sportnutr','')
    id = auth.get_user(request).id
    Profile.objects.update_user(id,first_name,last_name,
                                sex, year, month, day,
                                country, city, sport, equipments,
                                boots, wearing, sportnutr)

    return HttpResponseRedirect("/myprofile/")