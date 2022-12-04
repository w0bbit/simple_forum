import axios from 'axios'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import UpdatePost from '../components/UpdatePost'

export default function PostPage({BASE_URL, setPostTitle, setPostContent, updatePost, deletePost, postTitle, postContent}) {

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
            <h1>{post.title}</h1>
            <h2>{post.content}</h2>
            <hr />
            <UpdatePost post={post} setPostTitle={setPostTitle} setPostContent={setPostContent} updatePost={updatePost} deletePost={deletePost} />
        </>
    )
}