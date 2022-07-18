import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';


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
