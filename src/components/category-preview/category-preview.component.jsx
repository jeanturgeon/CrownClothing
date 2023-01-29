import { Link } from 'react-router-dom';

import './category-preview.styles.scss';
import { ProductCard } from '../product-card/product-card.component';

export const CategoryPreview = ({title, products}) => {

    return (
        <div className='category-preview-container'>
            <h2>
                <Link to={title} className='title'>{title.toUpperCase()}</Link>
            </h2>
            <div className='preview'>
            {
                products.filter((_, index) => index < 4 ) //to only show the first 4 products in the preview
                .map((product) => <ProductCard key={product.id} product={product} />)
            }

            </div>

        </div>
    )

}