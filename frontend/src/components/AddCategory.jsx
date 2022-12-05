export default function AddCategory({getAllCategories, titleInput, setTitleInput, createCategory}) {
    return(
        <>
            <div className='add-category' > 
                <div>  
                <input className='input' type='text'  placeholder='Title' value={titleInput}  onChange={(event)=>{setTitleInput(event.target.value)}} />&nbsp;
                <button className='button' onClick={()=>{
                    createCategory()
                    getAllCategories()
                    }}>Add new category</button>
                </div>
            </div>
        </>
    )
}