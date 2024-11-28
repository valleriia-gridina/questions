// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxno8gd3IeK7Xf0bINa77VdDZxGOBo8SA",
  authDomain: "authenticationproject-a011c.firebaseapp.com",
  projectId: "authenticationproject-a011c",
  storageBucket: "authenticationproject-a011c.firebasestorage.app",
  messagingSenderId: "656265138325",
  appId: "1:656265138325:web:8ff5bee19153251bea0b9c",
  measurementId: "G-LB0TJ1SSTG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export of services
export const auth = getAuth(app);
export const db = getFirestore(app);
