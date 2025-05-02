import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext=createContext();
const auth=getAuth(app);
const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null)
    console.log(user);
    // Create User function
    const CreateUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    // Sign in user Function
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    // User logOut function
    const logOut=()=>{
        return signOut(auth);
    }
    // Set Observer Function
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
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
        signIn
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