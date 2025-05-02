import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

export const AuthContext=createContext();
const auth=getAuth(app);
const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null)
    const [loading,setLoading]=useState(true); 
  
    // Create User function
    const CreateUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    // Sign in user Function
    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    // Update user profile
    const updateUser=(updatedUser)=>{
        return updateProfile(auth.currentUser,updatedUser);
    }
    // User logOut function
    const logOut=()=>{
        return signOut(auth);
    }
    // Set Observer Function
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unsubscribe(); 
        }
    },[]);
    const authData={
        user,
        setUser,
        CreateUser,
        logOut,
        signIn,
        loading,
        setLoading,
        updateUser,
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;

//1. then go to main.jsx and paste this code 
//2. <AuthProvider>
{/* <RouterProvider router={router}></RouterProvider>
</AuthProvider> */}
// 3.
// //