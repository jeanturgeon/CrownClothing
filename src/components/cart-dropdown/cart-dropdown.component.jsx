import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';
import {Button} from '../button/button.component';
import {CartItem} from '../cart-item/cart-item.component';

import {CartDropdownContainer, CartItem as Item, EmptyMessage} from './cart-dropdown.styles.jsx';

export const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <CartDropdownContainer >
      <Item>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </Item>
      <Button onClick={()=>navigate('/checkout')}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};


