from rest_framework.decorators import api_view
from django.http import HttpResponse, JsonResponse
from .models import Category, Post


def index(request):
    react_page = open('static/index.html').read()
    return HttpResponse(react_page)


@api_view(['GET', 'POST'])
def categories_list(request):
    """
        GET: Returns a list of all posts 
        POST: Create a new category
    """
    if request.method == 'GET':
        try:
            categories = [{'title': category.title, 'id': category.id} for category in Category.objects.all()]
            return JsonResponse({'success': True, 'categories': categories})
        except Exception as error:
            return JsonResponse({'success': False, 'error': error})
    elif request.method == 'POST':
        try:
            new_category = Category(title=request.data['title'])
            new_category.save()

            return JsonResponse({'success': True})
        except Exception as error:
            return JsonResponse({'success': False, 'error': error})
    else:
        return JsonResponse({'success': False, 'error': 'incorrect http method'})


@api_view(['GET', 'PUT', 'DELETE'])
def category_by_id(request, category_id):
    """
        GET: Returns a specific category by id
        PUT: Updates a specific category by id
        DELETE: Deletes a specified category by id
    """
    if request.method == 'GET':
        category = Category.objects.get(id=category_id)
        return JsonResponse({'success': True, 'id': category.id, 'title': category.title})
    elif request.method == 'PUT':
        try:
            category = Category.objects.get(id=request.data['id'])
            category.title = request.data['title']
            category.save()
            return JsonResponse({'success': True})
        except Exception as error:
            return JsonResponse({'success': False, 'error': error})
    elif request.method == 'DELETE':
        try:
            Category.objects.get(id=category_id).delete()
            return JsonResponse({'success': True})
        except Exception as error:
            return JsonResponse({'success': False, 'error': error})
    else:
        return JsonResponse({'success': False, 'error': 'incorrect http method'})


@api_view(['GET'])
def posts_list(request):
    '''GET: Returns a list of all posts'''
    if request.method == 'GET':
        try:
            posts = [{'id': post.id, 'title': post.title, 'content': post.content} for post in Post.objects.all()]
            return JsonResponse({'success': True, 'posts': posts})
        except Exception as error:
            return JsonResponse({'success': False, 'error': error})
    else:
        return JsonResponse({'success': False, 'error': 'incorrect http method'})


@api_view(['GET', 'PUT', 'DELETE'])
def post_by_id(request, post_id):
    '''
        GET: Return a specific post by id
        PUT: Update a specific post by id
    '''
    if request.method == 'GET':
        try:
            post = Post.objects.get(id=post_id)
            return JsonResponse({'success': True, 'id': post.id, 'title': post.title, 'content': post.content, 'category_id': post.category.id})
        except Exception as error:
            return JsonResponse({'success': False, 'error': error})
    elif request.method == 'PUT':
        try:
            post = Post.objects.get(id=post_id)
            post.title = request.data['title']
            post.content = request.data['content']
            post.save()
            print(request.data)
            return JsonResponse({'success': True})
        except Exception as error:
            return JsonResponse({'success': False, 'error': error})
    elif request.method == 'DELETE':
        try:
            Post.objects.get(id=post_id).delete()
            print(request.data)
            return JsonResponse({'success': True})
        except Exception as error:
            return JsonResponse({'success': False, 'error': error})
    else:
        return JsonResponse({'success': False, 'error': 'incorrect http method'})


@api_view(['GET', 'POST'])
def posts_by_category(request, category_id):
    '''
        GET: Get all posts for a specific category
        POST: Create a new post for a specific category
    '''
    if request.method == 'GET':
        posts = [{'id': post.id, 'title': post.title, 'content': post.content} for post in Post.objects.all() if post.category.id == category_id]
        # posts = [{'id': post.id, 'title': post.title, 'content': post.content} for post in Category.objects.get(id=category_id).posts]
        return JsonResponse({'success': True, 'posts': posts})
    elif request.method == 'POST':
        try:
            post = Post(title=request.data['title'], content=request.data['content'], category=Category.objects.get(id=category_id))
            post.save()
            return JsonResponse({'success': True})
        except Exception as error:
            return JsonResponse({'success': False, 'error': error})
    else:
        return JsonResponse({'success': False, 'error': 'incorrect http method'})


@api_view(['GET'])
def posts_by_id_and_category(request, category_id, post_id):
    '''GET: Returns a specific post for a specific category '''
    if request.method == 'GET':
        try:
            post = Post.objects.get(id=post_id)
            return JsonResponse({'success': True, 'post_id': post.id, 'post_title': post.title, 'post_content': post.content, 'post_category': post.category.title})
        except Exception as error:
            return JsonResponse({'success': False, 'error': error})
    else:
        return JsonResponse({'success': False, 'error': 'incorrect http method'})
