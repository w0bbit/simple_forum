import {useParams} from 'react-router-dom'

export default function CategoryPage({categories}) {

    const {category_id} = useParams()
    const category = categories.find(category => category.id == category_id)
    console.log(category)

    return(
        <>
            <h1>Category Page for {category.title}</h1>
        </>
    )
}