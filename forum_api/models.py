from django.db import models


# Create your models here.
class Category(models.Model):
    title = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return f"CATEGORY: {self.title}"


class Post(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='posts')

    def __str__(self):
        return f"POST: {self.title}"

