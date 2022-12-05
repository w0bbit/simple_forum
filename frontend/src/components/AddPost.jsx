import {useParams} from 'react-router-dom'

export default function AddPost({getPosts, getAllCategories, setPostTitle, setPostContent, createPost, postTitle, postContent}) {

    const {category_id} = useParams()

    return(
        <>
            <div className='add-post'>
                <h3>Add a post</h3>      
                <div>
                <input className='input' type='text'  placeholder='Title' value={postTitle} onChange={(event)=>{setPostTitle(event.target.value)}} />&nbsp;
                <input className='input' type='text' placeholder='Content' value={postContent} onChange={(event)=>{setPostContent(event.target.value)}} />&nbsp;
                <button className='button' onClick={()=>{
                    createPost(category_id)
                    getAllCategories()
                    getPosts()
                    }}>Add a new post</button>
                </div>
            </div>
            <hr />
        </>
    )
}



            