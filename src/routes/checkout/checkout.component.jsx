import { useContext, useEffect } from 'react';

import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from './checkout.styles.jsx';
import { CartContext } from '../../contexts/cart.context';
import { CheckoutItem } from '../../components/checkout-item/checkout-item.component';

export default function Checkout(){
    const {cartItems, isCartOpen ,setIsCartOpen, cartTotal} = useContext(CartContext)

    useEffect(()=> {
        if(isCartOpen) {
            setIsCartOpen(false);
        }
    },[]);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Qauntity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            { cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />) }
            <Total>Total: ${cartTotal}</Total>
        </CheckoutContainer>
    )
}