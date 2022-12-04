import {Link} from "react-router-dom"
import AddCategory from "../components/AddCategory"
import UpdateCategory from "../components/UpdateCategory"

export default function HomePage({categories, titleInput, setTitleInput, createCategory, updateCategory, deleteCategory}) {
    return(
        <>
            <div style={{border: '3px solid black'}}>
                <h2>All Categories</h2>
                <hr/>
                {categories && categories.map(category => <Link to={'/categories/'+category.id}><h3>{category.title}</h3></Link>)}
            </div>

            <AddCategory titleInput={titleInput} setTitleInput={setTitleInput} createCategory={createCategory} />

            <UpdateCategory categories={categories} titleInput={titleInput} setTitleInput={setTitleInput} updateCategory={updateCategory} deleteCategory={deleteCategory} />
        </>
    )
}