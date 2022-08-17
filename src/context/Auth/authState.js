
import AuthContext from "./authContext";
import {
  createUserWithEmailAndPassword, signInWithEmailAndPassword,

} from "firebase/auth";
import { auth,db } from "../../firebase";
import {setDoc,doc} from "firebase/firestore";



import React, { useState } from 'react'

export const AuthState = (props) => {

  const [error,setError]=useState(null)

  const [state,setState]=useState(false)


  const createUserInFirebase=async(email,password,name)=>{

    await createUserWithEmailAndPassword(auth,email,password).then(
      (userCredential)=>{
        console.log(userCredential.user.uid);

      setDoc(doc(db,"users",userCredential.user.uid),{
        name:name,
        email:email,
      });

      setState(userCredential);
      }
    ).catch((e)=>{
      setError(e.message);
    })
  }

  const signInMethod=async(email,password)=>{
    await signInWithEmailAndPassword(auth,email,password).then(
     (userCredential)=>{
      console.log(userCredential.user.uid)
      setState(userCredential);
     }
    ).catch((e)=>{
      setError(e.message);
    })
    
  }
  




  return (
   <AuthContext.Provider value={{
    state:state,
    createUserInFirebase:createUserInFirebase,
    signInMethod:signInMethod,
    error:error,
   }}>{props.children}</AuthContext.Provider>
  )
}


export default AuthState;

