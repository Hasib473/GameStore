import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
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
    const authInfo ={
        user,
        setUser,
        singinwithPopupFunction,
        createUserWithEmailAndPasswordFunction
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>

    );
};

export default AuthProvider;