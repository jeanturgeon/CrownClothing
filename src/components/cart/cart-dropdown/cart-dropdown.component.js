import { useContext } from 'react'

import './cart-dropdown.styles.scss'
import { CartContext } from '../../../contexts/cart.context'
import { Button } from '../../ui/button.component'
import { CartItem } from '../cart-item/cart-item.component'

export const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}

            </div>
            <Button>go to checkout</Button>
            

        </div>
    )
}