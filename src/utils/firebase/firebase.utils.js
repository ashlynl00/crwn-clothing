import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { useReducer } from 'react';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBez5OYG9-S3a54O5Ppt3DADPjxN1q2XnM",
    authDomain: "crown-clothingdb-e62b7.firebaseapp.com",
    projectId: "crown-clothingdb-e62b7",
    storageBucket: "crown-clothingdb-e62b7.appspot.com",
    messagingSenderId: "845169185389",
    appId: "1:845169185389:web:7a38ceff2154ed09d32564"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentAuth = async (userAuth) => {
    const userDocReference = doc(db, 'users', userAuth.uid);
    console.log(userDocReference);
    const userSnapshot = await getDoc(userDocReference);
    console.log(userSnapshot.exists())

    // if user doesn't exist
    if (!userSnapshot.exists()) {
        const { email, displayName } = userAuth;
        const createdAt = new Date();
        
        try {
            await setDoc(userDocReference, {
                displayName,
                email,
                createdAt,
            })
        } catch(err) {
            console.log(err.message)
        }
    }


}
