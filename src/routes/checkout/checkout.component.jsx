import { useContext, useEffect } from 'react';

import './checkout.styles.scss';
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
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Qauntity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            { cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />) }
            <span className='total'>Total: ${cartTotal}</span>
        </div>
    )
}