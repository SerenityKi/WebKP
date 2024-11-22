from django.shortcuts import render

def index(request):
    return render(request, 'frontend/index.html')

def profil(request):
    return render(request, 'frontend/profil.html')

# Tambahkan views untuk halaman lain...
