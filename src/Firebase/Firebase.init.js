// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_XX9TCh9kFpbk0udy5qdmXhepzxVlcBY",
  authDomain: "react-firebase-integretion.firebaseapp.com",
  projectId: "react-firebase-integretion",
  storageBucket: "react-firebase-integretion.firebasestorage.app",
  messagingSenderId: "36519673849",
  appId: "1:36519673849:web:05b2ea3eade0a557a4c728"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);