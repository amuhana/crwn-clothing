import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCUiQnm94FIe9HkPFgJXULb_5MlujxuWTI",
  authDomain: "crwn-db-14dc9.firebaseapp.com",
  databaseURL: "https://crwn-db-14dc9.firebaseio.com",
  projectId: "crwn-db-14dc9",
  storageBucket: "crwn-db-14dc9.appspot.com",
  messagingSenderId: "757104658545",
  appId: "1:757104658545:web:462c9238fd9bd8d3c4b3d0",
  measurementId: "G-64GBLX8ZG1",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

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
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
