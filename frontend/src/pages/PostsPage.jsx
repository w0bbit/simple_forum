import {Link} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'
// import AddPost from '../components/AddPost'

export default function PostsPage({BASE_URL}) {

    const [posts, setPosts] = useState([])

    const getPosts = () => {
        axios.get(BASE_URL+'posts/')
        .then((response) => {
            console.log(response.data.posts)
            setPosts(response.data.posts)
        })
    }

    useEffect(() => {
        getPosts()
    }, [])

    // console.log(posts)

    return(
        <>
            <h1>All Posts</h1>
            {posts.map(post => <Link to={'/posts/'+post.id}><h3>{post.title}</h3></Link>)}
            <hr />
            {/* <AddPost postCategory={postCategory} postTitle={postTitle} postContent={postContent} /> */}
        </>
    )
}