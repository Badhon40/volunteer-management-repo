
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    
   const [user,setUser]=useState(null)
   const [loading,setLoading]=useState(true)

    const googleProvider=new GoogleAuthProvider()

    const googleLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUserProfile=(name,photo)=>{
        return updateProfile(auth.User,{
            displayName:name,
            photoURL:photo,
        })
    }

    const logOut=()=>{
        setUser(null)
        signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user)
                setLoading(false)
            }
            else{
                setUser(null)
            }

            return ()=>{
                unSubscribe()
            }
        })
    },[])


    const info={
        user,
        setUser,
        googleLogin,
        createUser,
        signIn,
        logOut,
        loading,
        updateUserProfile
       
    }

    
        return (
        <AuthContext.Provider value={info}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;