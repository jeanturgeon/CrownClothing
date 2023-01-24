import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

import './navigation.styles.scss';
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { logOutUser} from '../../utils/firebase/firebase.utils';
import { CartIcon } from "../../components/cart/cart-icon/cart-icon.component";
import { CartDropdown } from "../../components/cart/cart-dropdown/cart-dropdown.component";

export default function Navigation(){
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext)

    return (
      <>
        {/* LOGO */}
        <div className="navigation">
          <Link  to='/' className="logo-container">
            <div><CrownLogo className='logo'/></div>
          </Link>
        {/* NAVLINKS */}
          <div className="navlinks-container">
            <Link to='/shop' className="navlink" >
                SHOP
            </Link>
            {
              currentUser ? (
                <span className="navlink" onClick={logOutUser}>SIGN OUT</span>
              ) : (
                <Link to='/auth' className="navlink" >
                  SIGN IN 
                </Link>
              )
            }
            {/* CART */}
            <CartIcon />            
          </div>
          {isCartOpen && <CartDropdown />}          
        </div>        
        <Outlet />
      </>
    )
  }