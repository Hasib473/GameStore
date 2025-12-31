import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({ children }) => {
      const googleProvider = new GoogleAuthProvider();

    const [user, setUser] =useState(null);
    
    const singinwithPopupFunction =()=>{
          return  signInWithPopup(auth, googleProvider)
        
    }

    const createUserWithEmailAndPasswordFunction=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
        
    }
    const setPasswordResetFuction =(email) =>{
        return sendPasswordResetEmail(auth, email)

    }

    const sendUserVerificationFunction = () => {
        return sendEmailVerification(auth.currentUser)
    }
    const authInfo ={
        user,
        setUser,
        singinwithPopupFunction,
        createUserWithEmailAndPasswordFunction,
        setPasswordResetFuction,
        sendUserVerificationFunction
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>

    );
};

export default AuthProvider;