
import './cart-dropdown.styles.scss'
import { Button } from '../../ui/button.component'

export const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>

            </div>
            <Button>go to checkout</Button>
            

        </div>
    )
}