import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
 
  apiKey: "AIzaSyD8g3hZYCNwrr557_3PQ4aJnrEqBXAu8JQ",
  authDomain: "shop-dd6e0.firebaseapp.com",
  databaseURL: "https://shop-dd6e0.firebaseio.com",
  projectId: "shop-dd6e0",
  storageBucket: "shop-dd6e0.appspot.com",
  messagingSenderId: "599540522828",
  appId: "1:599540522828:web:2a97e9863d089141e9f9e9",
  measurementId: "G-WB6HWRFZJY"
  };
  export const createUserProfileDocument = async(userAuth , additionalData) => {
    if(!userAuth) return ;
    // console.log(firestore.doc('users/128fdashadu'))
    const userRef=firestore.doc(`users/${userAuth.uid}`);//we will get back user reference at that location
    const snapShot =await userRef.get();// get snapshot of firestore
    //console.log(snapShot);



    if(!snapShot.exists)
    {
      const{displayName , email} = userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }
      catch(error){
        console.log('error creating user',error.message);
      }
    }
    return userRef;
  };
  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore= firebase.firestore();
const  provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase ;