import {Link} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'

export default function PostsPage({getPosts, posts}) {

    useEffect(() => {
        getPosts()
    }, [])

    return(
            <div className='posts'>
            <h2>All Posts</h2>
            <hr />
            {posts.map(post => <Link to={'/posts/'+post.id}><h3>{post.title}</h3></Link>)}
            </div>
    )
}