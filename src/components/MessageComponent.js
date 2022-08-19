import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/Auth/authContext";
import {
  collection,
  query,
  onSnapshot,
  addDoc,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase";
import SingleMessage from "./SingleMessage";




export default function MessageComponent() {

  

 const authC=useContext(AuthContext);

 const [message,setMessage]=useState(" ");
 const [recievedMessages,setRecievedMessages]=useState([]);

 useEffect(() => {
  getAllMessages();
}, []);

useEffect(() => {
  console.log("Recieved Messages", recievedMessages);
}, [recievedMessages]);


 async function getAllMessages() {
  const messageRef = collection(db, "messages");

  const q = query(messageRef, orderBy("createdAt", "asc"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const messagesList = querySnapshot.docs.map((doc) => {
      return doc.data();
    });
    console.log("Message List", messagesList);
    setRecievedMessages(messagesList);
  });

  console.log("All messages", recievedMessages);
}
const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(message);

  let messageToAdd = {
    messageBody: message,
    email: authC.state.user.email,
    senderId: authC.state.user.uid,
    createdAt: serverTimestamp(),
  };

  await addDoc(collection(db, "messages"), messageToAdd)
    .then((res) => {
      console.log(res);
      setMessage("");
    })
    .catch((e) => {
      console.log(e);
    });
};






  return (
    <div className="relative w-screen max-h-screen  min-h-screen ">
      <div className="overflow-auto h-4/5">
       
        <h1 className="text-3xl font-bold underline italic lg:text-center bg-gray-300 py-5 lg:mb-3 sticky top-0 p-2 ">Messages 
        </h1>
        <div className=" lg:absolute right-4 top-2 lg:flex lg:flex-row sm:flex sm:flex-col lg:justify-end bg-gray-300 mt-0">
         <h3 className="my-auto right-12 text-green-500 font-bold"><span className="font-bold text-purple-500 text-xl">Welcome, </span>{authC.state.user.email}</h3>
        <button className="border border-2  p-1 text-2xl m-2 border-black rounded-lg hover:bg-red-400 font-semibold" 
        onClick={()=>{
          if(window.confirm("Are your sure to logout"))
          {
            authC.logout();
          }
          
        }}
        >LogOut</button>
        </div>
        <div>
          {/* <SingleMessage/> */}
          {recievedMessages
            ? recievedMessages.map((message) => {
                return <SingleMessage message={message} />;
              })
            : null}
        </div>
        
      </div>
   
      
      <div className=" absolute bottom-0 right-0 left-0 bg-gray-300 lg:px-4 py-2 mt-2">
            <div className="flex space-x">
              <div className="flex-shrink-0">
                
              </div>
              <div className="min-w-0 flex-1">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="comment" className="sr-only">
                      Input
                    </label>
                    <textarea
                     
                      name="comment"
                      placeholder="Write Message"
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                       rows={3}
                      className="shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border border-gray-300 rounded-md p-2"
                     
                       defaultValue={""}
                    >
                      </textarea>
                  </div>
                  <div className="lg:mt-3  flex items-center justify-between content-end">
                    <a
                      href="#"
                      className="group inline-flex items-start text-sm space-x-2 text-gray-500 hover:text-gray-900"
                    >
                      {/* <span>Some HTML is okay.</span> */}
                    </a>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
    

    </div>
    </div>
    
  );
}
