import { Timestamp } from "firebase/firestore";
import React, { useContext } from "react";
import AuthContext from "../context/Auth/authContext";

export default function SingleMessage({ message }) {
  // console.log("message is",message)
  const authC=useContext(AuthContext);
  const loggedUser=authC.state.user.email;

  let ts;
  { 
                 
    if (!message.createdAt) {
        // we don't have a value for createdAt yet
         ts = Timestamp.now();
        console.log(`timestamp: ${ts} (estimated)`)
    }
    else {
        // now we have the final timestamp value
        ts=message.createdAt;
    }

}
  
  return (
    <div>
      <div className={message.email===loggedUser?"bg-green-400 rounded-lg w-fit pb-1 max-w-lg mx-4 mt-9 ml-auto":"bg-purple-400 rounded-lg w-fit pb-1 max-w-lg mx-4 mt-9 "}>
        <div
          className={
            message.email===loggedUser?"rounded-t-lg font-bold bg-green-600 text-white px-4 py-1 ":"rounded-t-lg font-bold bg-purple-600 text-white px-4 py-1 "
          }
        >
          <p>{message.email}</p>
        </div>

        <div className={"mx-3 my-2"}>
          <p>{message ? message.messageBody : null}</p>
        </div>

        <div className={"text-end font-semibold text-sm italic mx-3"}>
          {/* <p>1:40pm</p> */}
          {/* {new Date(message.createdAt.seconds * 1000).toLocaleDateString("en-US")} */}
          {/* {message.createdAt.toDate().toString()} */}
          {/* {
                // new Date(todo.date.seconds*1000).toLocaleDateString(undefined, options)
                new Intl.DateTimeFormat("en-GB", {
                  dateStyle: "full",
                  timeStyle: "short",
                }).format(new Date(message.createdAt.seconds * 1000))
              } */}
              
            {
              !message.createdAt?Timestamp.now().toDate().toString():message.createdAt.toDate().toLocaleString()
            }
              
              
      
        </div>
      </div>
    </div>
  );
}
