import {Link, useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import AddPost from '../components/AddPost'
import UpdateCategory from '../components/UpdateCategory'

export default function CategoryPage({getAllCategories, categories, createPost, setPostTitle, setPostContent, titleInput, setTitleInput, deleteCategory, updateCategory}) {

    const [posts, setPosts] = useState([])
    const {category_id} = useParams()
    const [category, setCategory] = useState(categories.find(category => category.id == category_id))
    const BASE_URL = 'http://127.0.0.1:8000/forum_api/'

    const getPosts = () => {
        axios.get(BASE_URL+'categories/'+category_id+'/posts')
        .then((response)=>{
            setPosts(response.data.posts)
        })
    }

    useEffect(() => {
        getPosts()
    }, [])

    return(
        <>
            <div className='category' >
                {posts.length > 0 ? <h2>Posts under {category.title}:</h2> : <h2>There are no posts under {category.title}</h2>}
                {posts.map(post => <Link to={'/categories/'+category_id+'/posts/'+post.id}><h3>{post.title}</h3></Link>)}
                <hr />
                <AddPost getPosts={getPosts} getAllCategories={getAllCategories} createPost={createPost} setPostTitle={setPostTitle} setPostContent={setPostContent} />
                <UpdateCategory getAllCategories={getAllCategories} setCategory={setCategory} category={category} titleInput={titleInput} setTitleInput={setTitleInput} updateCategory={updateCategory} deleteCategory={deleteCategory} />
            </div>
        </>
    )
}