import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updatePassword, updateProfile } from "firebase/auth";
import app from '../firebase.init';


export const AuthContext = createContext()
const auth =getAuth(app) 


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]= useState(true)
    const createUser= (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    const updateUser=(user,userInfo)=>{
        return updateProfile(auth.currentUser,userInfo)
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user)
                console.log(user)
                setLoading(false)
            }else{
                setUser(null)
                setLoading(false)
            }
        })

        return ()=> unsubscribe()
    },[])
    const authInfo={
        user,
        createUser,
        signIn,
        logOut,
        updateUser,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;