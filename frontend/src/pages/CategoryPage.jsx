import {Link, useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import AddPost from '../components/AddPost'

export default function CategoryPage({categories, createPost, setPostTitle, setPostContent}) {

    const [posts, setPosts] = useState([])
    const {category_id} = useParams()
    const category = categories.find(category => category.id == category_id)
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
            <h1>Category Page for {category.title}</h1>
            {posts.map(post => <Link to={'/categories/'+category_id+'/posts/'+post.id}><h2>{post.title}</h2></Link>)}
            <hr />
            <AddPost createPost={createPost} setPostTitle={setPostTitle} setPostContent={setPostContent} />
        </>
    )
}