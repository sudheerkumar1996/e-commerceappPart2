import React from 'react';
import './header.styles.scss';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../card-icon/card-icon.component';
import {auth} from '../../firebase/firebase.utils';

const Header = ({currentUser,hidden}) => (
   <div className='header'>
       <Link className='logo-container' to='/'>
           <Logo className='logo'/>
       </Link>
       <div className='options'>
           <Link className='option' to='/shop'>SHOP</Link>
           <Link className='option' to='/contact'>CONTACT</Link>
           {
               currentUser ? (
                   <div className='option' onClick={()=> auth.signOut()}>
                       Sign Out
                      </div> 
               ):(
                   <Link className='option' to='/signin'>
                       Sign In
                   </Link>
               ) 
            }
            <CartIcon/>
       </div>
       {hidden ? null : <CartDropdown />}
   </div>
);
const mapSateToProps = ({user:{currentUser},cart:{hidden}}) =>( {
    currentUser,
    hidden

});
export default connect(mapSateToProps)(Header);