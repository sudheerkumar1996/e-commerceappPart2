import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import {setCurrentUser} from './redux/user/user.actions';
import Header from './components/header/header.component';
import ShopPage from './pages/shop/shop.component';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth ,createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component 
{
  unsubscribeFromAuth = null

  componentDidMount(){
      const {setCurrentUser} = this.props;
    
      this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth =>{
     //createUserProfileDocument(userAuth);//user auth object, from auth library
     if(userAuth){

       const userRef = await createUserProfileDocument(userAuth);
       userRef.onSnapshot(snapShot => {
         //console.log(snapShot.data());
        // this.setState
        setCurrentUser(
           {
               id: snapShot.id,
               ...snapShot.data()
            });
       });
     }
     setCurrentUser(userAuth);

    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop/hats' component={ShopPage}/>
      <Route exact path='/signin' render={() =>
       this.props.currentUser ? (
       <Redirect to='/' />
       ):(
       <SignInAndSignUpPage/>
       ) }
       />
      </Switch>
    </div>
    );
  } 
}



const mapStateToProps =({user}) => ({
  currentUser: user.currentUser
});



const mapDispatchToProps = dispatch => ({
      setCurrentUser: user => dispatch(setCurrentUser(user))
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);
