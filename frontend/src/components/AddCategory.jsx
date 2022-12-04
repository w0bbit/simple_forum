export default function AddCategory({titleInput, setTitleInput, createCategory}) {
    return(
        <>
        <div style={{border: '3px solid black'}}>
            <h3>Add a category</h3>      
            <div>  
            <label>Title
                <input type='text'  placeholder='Title' value={titleInput}  onChange={(event)=>{setTitleInput(event.target.value)}} />
            </label>
            <button onClick={()=>{createCategory()}}>Add new category</button>
            </div>
        </div>
        <hr />
        </>
    )
}