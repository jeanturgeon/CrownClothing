import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

import './navigation.styles.scss';





export default function Navigation(){
    return (
      <>
        <div className="navigation">
          <Link  to='/' className="logo-container">
            <div><CrownLogo className='logo'/></div>
          </Link>
          
          <div className="navlinks-container">
            <Link to='/shop' className="navlink" >
                SHOP
            </Link>
          </div>
        </div>
        <Outlet />
      </>
    )
  }