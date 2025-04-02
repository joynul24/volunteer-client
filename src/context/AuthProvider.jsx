import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import AuthContext from './Authcontext';

const AuthProvider = (props) => {

    const {children} = props || {};
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('')
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password);
    }

    const loginUserWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
      };

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
      };

    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false);
        })

        return () =>{
            unSubscribe();
        }
    },[])

    const authInfo = {
        createUser,
        loginUser,
        loginUserWithGoogle,
        user,
        setUser,
        setErrorMessage,
        loading,
        signOutUser,
        errorMessage,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;