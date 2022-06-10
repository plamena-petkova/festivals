// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from '@firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiv9dhD5clw6CfYy7X15wj7eGbeo34sdM",
  authDomain: "festivals-50ce8.firebaseapp.com",
  projectId: "festivals-50ce8",
  storageBucket: "festivals-50ce8.appspot.com",
  messagingSenderId: "864737559970",
  appId: "1:864737559970:web:1894b56cf6de777ca89efb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);