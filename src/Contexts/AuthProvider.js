import React, { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import app from "../firebase/firebase.config";
export const AuthContext = createContext();

const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, provider);
    }

    const authInfo = {
        createUser,
        signIn,
        handleGoogleSignIn

    }
    return (

        <AuthContext.Provider value={authInfo}>

            {children}

        </AuthContext.Provider>
    );
};


export default AuthProvider; 