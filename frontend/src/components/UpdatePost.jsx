import {useState} from 'react'
import axios from 'axios'

export default function UpdatePost({post, BASE_URL, getPost, getPosts}) {
    
    const [postTitle, setPostTitle] = useState('')
    const [postContent, setPostContent] = useState('')

    const updatePost = (id) => {
        axios.put(BASE_URL+'posts/'+id+'/', {'title': postTitle, 'content': postContent})
        .then(response => {
          return response.data
        })
      }
    
    return(
        <>
          <div className='update-post'>
            <input className='input' type='text' placeholder={post.title} value={postTitle} onChange={(event)=>{setPostTitle(event.target.value)}}/>&nbsp;
            <input className='input' type='text' placeholder={post.content} value={postContent} onChange={(event)=>{setPostContent(event.target.value)}}/>&nbsp;
            <button className='button' onClick={() => {
                updatePost(post.id)
                getPost()
                getPosts()
                console.log('hi')
                }}>Update</button>
          </div>
        </>
    )
}