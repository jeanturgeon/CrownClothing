import { useContext } from "react"

import './shop.styles.scss'
import { ProductsContext } from "../../contexts/products.context"
import { ProductCard } from "../../components/products/product-card/product-card.component";


export default function Shop() {
    const {products} = useContext(ProductsContext);

    return (
        <div className="products-container">
            {products.map(product => {
                return (
                    <ProductCard key={product.id} product={product}/>
                )
            })}
        </div>
    )

}