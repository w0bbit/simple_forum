import axios from 'axios'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import UpdatePost from '../components/UpdatePost'

export default function PostPage({BASE_URL, getPosts, categories}) {

    const {category_id, post_id} = useParams()
    const [post, setPost] = useState({})

    const getPost = () => {
        axios.get(BASE_URL+'posts/'+post_id)
        .then((response)=>{
            setPost(response.data)
        })
    }

    useEffect(() => {
        getPost()
    }, [])


    return(
        <>
            <div className='post'>
                <h3>Title: {post.title}</h3>
                <h3>Content: {post.content}</h3>
                <hr />
                <UpdatePost post={post} BASE_URL={BASE_URL} getPost={getPost} getPosts={getPosts} />
            </div>
        </>
    )
}