import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {CategoryContainer, CategoryName} from './category.styles.jsx';
import { selectCategories } from '../../store/reducers/categories.reducer.js';
import { ProductCard } from '../../components/product-card/product-card.component';

export default function Category() {
    const categoriesMap = useSelector(selectCategories)
    const {category} = useParams();    
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