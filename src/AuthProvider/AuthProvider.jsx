import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, GoogleAuthProvider} from "firebase/auth/web-extension";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    };

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    //facebook login
    const signInWithFacebook=()=>{
        setLoading(true)
        return signInWithPopup(auth,facebookProvider)
    }

    // When the authentication state changes, the user state is updated with the current user, and the loading state is set to false.
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('current User:', currentUser);
            setLoading(false)
        })
        return () => {
            return unSubscribe()  // Clean up the subscription
        }
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        logOut,
        signIn,
        signInWithGoogle,
        signInWithFacebook
    };


    return (
        <>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

export default AuthProvider;