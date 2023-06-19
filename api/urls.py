from django.urls import path
from api import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [path('data/', view=views.Data.as_view()),
                path('data/<int:pk>', view=views.ParticularData.as_view())]

urlpatterns = format_suffix_patterns(urlpatterns)