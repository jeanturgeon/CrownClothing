import { signInWithGooglePopup, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";




export default function SignIn() {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(response.user);
    }

    return (
        <>
            <div>Sign In Page</div>
            <button onClick={logGoogleUser}>Sign in with Google</button>
        </>
    )
}