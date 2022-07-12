import './categories.styles.scss';
import CategoryItem from '../category-item/category-item.component';

const CategoriesContainer = (props) => {

    return (
        <div className='categories-container'>
            {props.categories.map( (category)=> {
            return (
                <CategoryItem key={category.id} category={category}></CategoryItem>
            )
            })}
        </div>
    )
}

export default CategoriesContainer;