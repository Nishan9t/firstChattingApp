import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import UserChatCardComponent from "./UserChatCardComponent";

export default function ContactsComponent() {

  const [users,setUsers]=useState([]);

  useEffect(()=>{
    getAllUsers();
  },[])

  async function getAllUsers(){
    const usersSnapshot=await getDocs(collection(db,"users"));
    const usersList=usersSnapshot.docs.map((doc)=>{
      return doc.data();
    })
    console.log(usersList)
    setUsers(usersList);
  }




  // let users = [
  //   {
  //     id: 1,
  //     first_name: "Lorrin",
  //     last_name: "Giercke",
  //   },
  //   {
  //     id: 2,
  //     first_name: "Granthem",
  //     last_name: "Markie",
  //   },
  //   {
  //     id: 3,
  //     first_name: "Saundra",
  //     last_name: "McGarvey",
  //   },
  //   {
  //     id: 4,
  //     first_name: "Gianni",
  //     last_name: "Eede",
  //   },
  //   {
  //     id: 5,
  //     first_name: "Andrey",
  //     last_name: "Eckly",
  //   },
  //   {
  //     id: 6,
  //     first_name: "Editha",
  //     last_name: "Vel",
  //   },
  //   {
  //     id: 7,
  //     first_name: "Bernadette",
  //     last_name: "Deamer",
  //   },
  //   {
  //     id: 8,
  //     first_name: "Marcie",
  //     last_name: "Trownson",
  //   },
  //   {
  //     id: 9,
  //     first_name: "Andrea",
  //     last_name: "McNally",
  //   },
  //   {
  //     id: 10,
  //     first_name: "Nicolea",
  //     last_name: "Haughin",
  //   },
  //   {
  //     id: 11,
  //     first_name: "Durante",
  //     last_name: "Fransemai",
  //   },
  //   {
  //     id: 12,
  //     first_name: "Donny",
  //     last_name: "Behrendsen",
  //   },
  //   {
  //     id: 13,
  //     first_name: "Emilie",
  //     last_name: "Barringer",
  //   },
  //   {
  //     id: 14,
  //     first_name: "Enid",
  //     last_name: "Burgon",
  //   },
  //   {
  //     id: 15,
  //     first_name: "Quintus",
  //     last_name: "Greenalf",
  //   },
  //   {
  //     id: 16,
  //     first_name: "Julie",
  //     last_name: "Ivanyutin",
  //   },
  //   {
  //     id: 17,
  //     first_name: "Cristionna",
  //     last_name: "Sheron",
  //   },
  //   {
  //     id: 18,
  //     first_name: "Mabelle",
  //     last_name: "Lyfield",
  //   },
  //   {
  //     id: 19,
  //     first_name: "Isidro",
  //     last_name: "Fryer",
  //   },
  //   {
  //     id: 20,
  //     first_name: "Carri",
  //     last_name: "Gooderick",
  //   },
  // ];
  return (
    <div className="w-1/4 bg-gray-100 min-h-screen">
      <div>
       
        <div className="mt-1 relative flex items-center px-6">
          <input 
            type="text"
            name="search"
            id="search"
            placeholder="Search Users"
            className="shadow-sm focus:ring-indigo-500 h-12 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md px-2"
          />
          
        </div>
      </div>
      <div className="space-y-6   divide-y divide-gray-300">
        {users.map((user) => {
          return <UserChatCardComponent user={user} />;
        })}
      </div>
    </div>
  );
}
