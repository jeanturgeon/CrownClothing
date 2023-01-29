

import {CategoryPreviewContainer, Title, Preview} from './category-preview.styles';
import { ProductCard } from '../product-card/product-card.component';

export const CategoryPreview = ({title, products}) => {

    return (
        <CategoryPreviewContainer>
            <h2>
                <Title to={title} className='title'>{title.toUpperCase()}</Title>
            </h2>
            <Preview className='preview'>
            {
                products.filter((_, index) => index < 4 ) //to only show the first 4 products in the preview
                .map((product) => <ProductCard key={product.id} product={product} />)
            }
            </Preview>
        </CategoryPreviewContainer>
    )

}