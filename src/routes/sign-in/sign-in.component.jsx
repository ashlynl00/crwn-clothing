import { auth, signInWithGooglePopUp, createUserDocumentAuth, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";

const SignIn = () => {
    useEffect( () => async() => {
        const response = await getRedirectResult(auth);
        console.log(response)
    }, [])

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopUp();
        const userDocReference = await createUserDocumentAuth(user);
        console.log(user);
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In W/ Google Popup</button>
            <button onClick={signInWithGoogleRedirect}>Sign In W/ Google Redirect</button>
        </div>
    )
};

export default SignIn;