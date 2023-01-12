import { createContext, useState , useEffect} from "react";

import { onAuthStateChangedListener, createUserDocFromAuth} from '../utils/firebase/firebase.utils'

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=>null,

});

export const UserContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();
    const value = {currentUser, setCurrentUser};

    useEffect(()=>{
        //since the onAuthStateChanged that gets invoked is permanent, we have to explicitly tell it when to stop listening
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user) {
                createUserDocFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe; //unsubscribe whenever we un-mount 
    },[])

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};