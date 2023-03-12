import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCurrentUser } from '../../store/user.action';
import { CartContext } from '../../contexts/cart.context';
import {CartIcon} from '../../components/cart-icon/cart-icon.component';
import {CartDropdown} from '../../components/cart-dropdown/cart-dropdown.component';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink} from './navigation.styles';

export default function Navigation(){
  const currentUser = useSelector(selectCurrentUser)
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer className='navigation'>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}> 
            {/* if we didn't specify 'as=span', it would be traeated as a Link, and expect a mandatory 'to' prop*/}
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};