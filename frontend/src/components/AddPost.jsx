import {useParams} from 'react-router-dom'

export default function AddPost({getPosts, getAllCategories, setPostTitle, setPostContent, createPost, postTitle, postContent}) {

    const {category_id} = useParams()

    return(
        <>
            <div className='add-post'>
                <h3>Add a post</h3>      
                <div>
                <input id='add-post-title' className='input' type='text'  placeholder='Title' value={postTitle} onChange={(event)=>{setPostTitle(event.target.value)}} />&nbsp;
                <input id='add-post-content' className='input' type='text' placeholder='Content' value={postContent} onChange={(event)=>{setPostContent(event.target.value)}} />&nbsp;
                <button className='button' onClick={()=>{
                    createPost(category_id)
                    getAllCategories()
                    getPosts()
                    document.getElementById('add-post-title').value = ''
                    document.getElementById('add-post-content').value = ''
                    document.getElementById('add-post-title').placeholder = 'Title'
                    document.getElementById('add-post-content').placeholder = 'Content'
                    }}>Add a new post</button>
                </div>
            </div>
            <hr />
        </>
    )
}



            