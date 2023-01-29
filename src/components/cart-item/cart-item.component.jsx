import {CartItemContainer, ItemDetails, Name} from './cart-item.styles';

export const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <CartItemContainer >
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails className='item-details'>
        <Name>{name}</Name>
        <span>{quantity} x ${price}</span>
      </ItemDetails>
    </CartItemContainer>
  );
};
