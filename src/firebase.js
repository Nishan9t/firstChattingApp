// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoBTMqbBoQGcjGu2wOH222cgKwANFnfJI",
  authDomain: "chattingapp-59f23.firebaseapp.com",
  projectId: "chattingapp-59f23",
  storageBucket: "chattingapp-59f23.appspot.com",
  messagingSenderId: "1062608858492",
  appId: "1:1062608858492:web:5e0bc68cac56b8750ec8f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)