import django


from django.http import HttpResponse
from django.shortcuts import render

def page_accueil(requete) :
    return render(requete, 'accueil.html')

