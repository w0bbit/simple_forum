import {useParams} from 'react-router-dom'

export default function AddPost({setPostTitle, setPostContent, createPost, postTitle, postContent}) {

    const {category_id} = useParams()

    return(
        <>
            <div style={{border: '3px solid black'}}>
                <h3>Add a post</h3>      
                <div>  
                <label>Title
                    <input type='text'  placeholder='Title' value={postTitle} onChange={(event)=>{setPostTitle(event.target.value)}} />
                    <input type='text' placeholder='content' value={postContent} onChange={(event)=>{setPostContent(event.target.value)}} />
                </label>
                <button onClick={()=>{createPost(category_id)}}>Add a new post</button>
                </div>
            </div>
            <hr />
        </>
    )
}



            