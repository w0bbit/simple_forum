import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import './App.css'
import axios from 'axios'
import CategoriesPage from './pages/CategoriesPage'
import CategoryPage from './pages/CategoryPage'
import PostsPage from './pages/PostsPage'
import PostPage from './pages/PostPage'

const getCookie = (name) => {
  let cookieValue = null
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';')
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim()
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
              break
  }}}
  return cookieValue
}

const csrftoken = getCookie('csrftoken');
axios.defaults.headers.common["X-CSRFToken"]=csrftoken

export default function App() {

  const [categories, setCategories] = useState([])
  // const [categoryID, setCategoryID] = useState(null)
  const [titleInput, setTitleInput] = useState('')
  const [postTitle, setPostTitle] = useState('')
  const [postContent, setPostContent] = useState('')

  const BASE_URL = 'http://127.0.0.1:8000/forum_api/'

  const getAllCategories = () => {
    axios.get(BASE_URL+'categories/').then(response =>{
      let data = response.data.categories
      setCategories(data)
  })}

  const createCategory = () => {
    axios.post(BASE_URL+'categories/', {'title': titleInput})
    .then(
      getAllCategories()
    )}

  const updateCategory = (id) => {
    axios.put(BASE_URL+'categories/'+id+'/' , {'title': titleInput, 'id': id})
    .then( response => {
      console.log(response.data)
    }).then(
      getAllCategories()
    )}

  const deleteCategory = (id) => {
    axios.delete(BASE_URL+'categories/'+id+'/' )
    .then(
      getAllCategories()
    )}
  
  const createPost = (id) => {
    axios.post(BASE_URL+'categories/'+id+'/posts/', {'title': postTitle, 'content': postContent})
    .then(response => {
      console.log(response.data)
    })
  }

  const updatePost = (id) => {
    axios.put(BASE_URL+'posts/'+id+'/', {'title': postTitle, 'content': postContent})
    .then(response => {
      console.log(response.data)
    })
  }

  const deletePost = (id) => {
    axios.delete(BASE_URL+'posts/'+id+'/')
    .then(response => {
      console.log(response.data)
    })

  }

  useEffect(() => {
    getAllCategories()
  }, [])

  return (
    <div className='App'>

      <Router>
        <Link to="/"><h1>Home</h1></Link>
        {/* <Link to="/categories"><h1>All Categories</h1></Link> */}
        <Link to="/posts"><h1>All Posts</h1></Link>
        <hr />
        <Routes>
          <Route path='/' element={<CategoriesPage categories={categories} titleInput={titleInput} setTitleInput={setTitleInput} createCategory={createCategory} updateCategory={updateCategory} deleteCategory={deleteCategory} />} />
          {/* <Route path='/categories' element={<CategoriesPage />} /> */}
          <Route path='/categories/:category_id' element={<CategoryPage categories={categories} createPost={createPost} setPostContent={setPostContent} setPostTitle={setPostTitle} />} />
          <Route path ='/posts' element={<PostsPage BASE_URL={BASE_URL} />} />
          <Route path='/posts/:post_id' element={<PostPage BASE_URL={BASE_URL} updatePost={updatePost} setPostTitle={setPostTitle} setPostContent={setPostContent} deletePost={deletePost} />} />
          <Route path='/categories/:category_id/posts/:post_id' element={<PostPage BASE_URL={BASE_URL} />} />
        </Routes>
      </Router>
      
    </div>
  )
}
