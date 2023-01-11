// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
// import {auth, signInWithGoogleRedirect} from "../../utils/firebase/firebase.utils";

import './authentication.styles.scss'
import RegistrationForm from "../../components/register/registration-form.component";
import LoginForm from "../../components/login/login.component";

export default function Authentication() {


    return (
        <div className="auth-container">              
            <LoginForm />
            <RegistrationForm />
        </div>
    )
}


//     const getRedirectResponse = async () => {
//         const response = await getRedirectResult(auth);
// //because the user is redirected, he is actually leaving our app to authenticate
// //and our app will completely reload when he is brought back after auth
// //which is why we need this Firebase method getRedirectResult to get user info to save it in our DB
//         if(response) {
//             const userDocRef = await createUserDocFromAuth(response.user);
//         }
//     } 
    // useEffect(()=> {
    //     getRedirectResponse();
    // },[]);        
