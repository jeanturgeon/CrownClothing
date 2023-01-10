import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";


export default function SignIn() {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }

    return (
        <>
            <div>Sign In Page</div>
            <button onClick={logGoogleUser}>Sign in with Google</button>
        </>
    )
}