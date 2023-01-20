import "./product-card.styles.scss";
import { Button } from "../../ui/button.component";

export const ProductCard = (props) => {
  const { name, price, imageUrl } = props.product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted">Add to cart</Button>
    </div>
  );
};
