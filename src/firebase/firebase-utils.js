import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAqOVDFOLnDjtRV3wQ9z3JiF4l-JiFDuLE',
  authDomain: 'crwn-clothing-4a024.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-4a024.firebaseio.com',
  projectId: 'crwn-clothing-4a024',
  storageBucket: 'crwn-clothing-4a024.appspot.com',
  messagingSenderId: '1039979700353',
  appId: '1:1039979700353:web:b39ddedcc2bc83ccb52d80'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; //user not exist

  //creating user ...
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
