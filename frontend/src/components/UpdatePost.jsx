export default function UpdatePost({post, setPostTitle, setPostContent, updatePost, deletePost, postTitle, postContent}) {
    return(
        <>
            <h1>Update post</h1>
            <input type='text' placeholder={post.title} value={postTitle} onChange={(event)=>{setPostTitle(event.target.value)}}/>
            <input type='text' placeholder={post.content} value={postContent} onChange={(event)=>{setPostContent(event.target.value)}}/>
            <button onClick={() => updatePost(post.id)}>Update</button>
            <button onClick={() => {
                deletePost(post.id)
                window.location.href="/"
            }}>Delete</button>
        </>
    )
}