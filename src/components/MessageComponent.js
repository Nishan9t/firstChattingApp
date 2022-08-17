import { collection, onSnapshot, query, QuerySnapshot } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { db } from '../firebase'

export default function MessageComponent() {

  useEffect(()=>{
    getAllMessages();
  },[])

  async function getAllMessages(){
    const q=query(collection(db,"messages"));
    const unsubscribe=onSnapshot(q,(querySnapshot)=>{
      querySnapshot.forEach((doc)=>{
        console.log(doc.data());
      });
    });
  }


  return (
    <div>MessageComponent</div>
  )
}
