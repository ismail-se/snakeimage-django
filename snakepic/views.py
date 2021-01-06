from snakepic.models import Image
from snakepic.forms import ImageForm
from django.shortcuts import redirect, render

# Create your views here.
def home(request):
     if request.method == 'POST':
        form = ImageForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect("/")
     else:
        form = ImageForm()

     images = Image.objects.all()
     img = ''
     for image in images:
          img = image
          print(img.img)
     return render(request, 'index.html', {'form': form, 'Image': img})