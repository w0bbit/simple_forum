export default function UpdateCategory({categories, titleInput, setTitleInput, updateCategory, deleteCategory}) {
    return(
        <div style={{border: '3px solid black'}}>
            <h2>Update category</h2>
            <hr/>
            {categories && categories.map(category => {
            return(<div>
                <input type='text' placeholder={category.title} value={titleInput} onChange={(event)=>{setTitleInput(event.target.value)}}/>
                <button onClick={() => updateCategory(category.id)}>Update</button>
                <button onClick={() => deleteCategory(category.id)}>Delete</button>
                </div>)})}
        </div>
    )
}