from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('categories/', views.categories_list),
    path('categories/<int:category_id>/', views.category_by_id),
    path('posts/', views.posts_list),
    path('posts/<int:post_id>/', views.post_by_id),
    path('categories/<int:category_id>/posts/', views.posts_by_category),
    path('categories/<int:category_id>/posts/<int:post_id>/', views.posts_by_id_and_category),
]
