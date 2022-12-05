export default function AddCategory({getAllCategories, titleInput, setTitleInput, createCategory}) {
    return(
        <>
            <div className='add-category' > 
                <div>  
                <input id='add-category-title' className='input' type='text'  placeholder='Title' value={titleInput}  onChange={(event)=>{setTitleInput(event.target.value)}} />&nbsp;
                <button className='button' onClick={()=>{
                    createCategory()
                    getAllCategories()
                    setTitleInput('')
                    document.getElementById('add-category-title').placeholder = 'Title'
                    }}>Add new category</button>
                </div>
            </div>
        </>
    )
}