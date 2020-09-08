import React from 'react';
import './header.styles.scss';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../card-icon/card-icon.component';
import {auth} from '../../firebase/firebase.utils';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector';
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
// const mapSateToProps = ({user:{currentUser},cart:{hidden}}) =>( {
//     currentUser,
//     hidden

// });
//createStructuredSelector usig this selector that we get as our map states props into 
//each subsequent selector
const mapSateToProps = createStructuredSelector( {
        currentUser: selectCurrentUser,
        hidden: selectCartHidden
    });
export default connect(mapSateToProps)(Header);