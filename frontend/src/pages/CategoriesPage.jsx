import {Link} from "react-router-dom"
import AddCategory from "../components/AddCategory"

export default function CategoriesPage({getAllCategories, categories, titleInput, setTitleInput, createCategory}) {
    return(
        <>
            <div className='categories' >
                <h2>All Categories</h2>
                <hr/>
                {categories && categories.map(category => <Link to={'/categories/'+category.id}><h3>{category.title}</h3></Link>)}
            <hr />
            <AddCategory getAllCategories={getAllCategories} titleInput={titleInput} setTitleInput={setTitleInput} createCategory={createCategory} />

            </div>
        </>
    )
}