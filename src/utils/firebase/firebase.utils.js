import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

import { firebaseConfig } from "../../firebaseConfig";

// Initialize FirebaseApp
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const firebaseDB = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
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
                createdAt
            });
        } catch (error) {
            console.log("Error creating user: ", error.message);
        }
    }

    //if it does exist, then we just return it:
    return userDocRef;


};