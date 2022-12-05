export default function UpdateCategory({getAllCategories, setCategory, category, titleInput, setTitleInput, updateCategory, deleteCategory}) {
    
    return(
        <div className='update-category'>
            <h3>Edit Category</h3>
            <input className='input' type='text' id='new-title' placeholder={category.title} value={titleInput} onChange={(event)=>{
                setTitleInput(event.target.value)
                }}/>
            <button className='button' onClick={() => {
                updateCategory(category.id)
                setCategory({'title':document.getElementById('new-title').value})
                getAllCategories()
                }}>Update</button>
            <button className='button' onClick={() => {
                deleteCategory(category.id)
                getAllCategories()
                window.location.href="/"
                }}>Delete</button>
        </div>
    )
}