import { initializeApp } from "firebase/app";
import { 
    // signInWithRedirect,
    getAuth,
    signInWithPopup,    
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,

} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

import { firebaseConfig } from "../../firebaseConfig";

// Initialize FirebaseApp
const firebaseApp = initializeApp(firebaseConfig);

//if we wanted to also offer login with Facebook for example, we would need a separate Provider for that
const googleProvider = new GoogleAuthProvider(); 
googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const firebaseDB = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInfo={}) => {
    if(!userAuth) return;

     //create document reference:
    const userDocRef = doc(firebaseDB, 'users', userAuth.uid);

     //see if that reference already exists, then creating it if it doesn't
    const userSnapshot = await getDoc(userDocRef);
    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo //we're adding this for the case of a registration with email and password
                //since the displayName we get from firebase is null when getting it from this auth method.
                //it will instead come from our own Registration form
            });
        } catch (error) {
            console.log("Error creating user: ", error.message);
        }
    }

    //if it does exist, then we just return it:
    return userDocRef;

};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const loginWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}