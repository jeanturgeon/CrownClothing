import { useContext } from 'react';

import {CheckoutItemContainer, ImageContainer, Name, Quantity, Arrow, QuantityValue, Price, RemoveButton} from './checkout-item.styles';
import { CartContext } from '../../contexts/cart.context';

export const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem
    const {clearItemFromCart ,addItemToCart, removeItemFromCart} = useContext(CartContext)

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img style={{width: '100%', height:'100%'}} src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <Name className='name'>{name}</Name>
            <Quantity>
                <Arrow onClick={()=>{removeItemFromCart(cartItem)}}>
                    &#10094; {/*unicode code for left-pointing arrow */}
                </Arrow>
                <QuantityValue>
                    {quantity}
                </QuantityValue>
                <Arrow onClick={()=>{addItemToCart(cartItem)}}>
                    &#10095; {/*unicode code for right-pointing arrow */}
                </Arrow>
            </Quantity>
            <Price>{price}</Price>
            <RemoveButton onClick={()=>{clearItemFromCart(cartItem)}}>
                &#10005; {/*unicode code for X */}
            </RemoveButton>
        </CheckoutItemContainer>
    )


};