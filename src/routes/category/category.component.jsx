import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';

import {CategoryContainer, CategoryName} from './category.styles.jsx';
import { CategoriesContext } from '../../contexts/categories.context';
import { ProductCard } from '../../components/product-card/product-card.component';

export default function Category() {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(()=>{
        setProducts(categoriesMap[category]);
    },[category, categoriesMap])
    


    return(
        <>
            <CategoryName>{category}</CategoryName>
            <CategoryContainer>                
                {
                    products &&  products.map(product => <ProductCard key={product.id} product={product} />)
                    //because the fetching of products is asyncronous, 
                    //this ensures that only when we have a value in products, are we rendering the component
                }
            </CategoryContainer>
        </>
    );
}