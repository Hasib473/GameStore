import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithPopup, updateProfile } from 'firebase/auth';
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

    const updateUserProfilefun = (name, photoURL) => {
  return updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: photoURL,
  }).then(() => {
    setUser({
      ...auth.currentUser,
      displayName: name,
      photoURL: photoURL,
    });
  });
};

  


    const authInfo ={
        user,
        setUser,
        singinwithPopupFunction,
        createUserWithEmailAndPasswordFunction,
        setPasswordResetFuction,
        sendUserVerificationFunction,
        updateUserProfilefun
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>

    );
};

export default AuthProvider;