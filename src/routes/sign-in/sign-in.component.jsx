import { signInWithGooglePopUp, createUserDocumentAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopUp();
        const userDocReference = await createUserDocumentAuth(user);
        console.log(user);
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In W/ Google Popup</button>
        </div>
    )
};

export default SignIn;