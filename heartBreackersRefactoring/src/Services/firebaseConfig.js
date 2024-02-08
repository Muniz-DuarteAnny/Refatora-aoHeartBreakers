// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT7w4YjR-fj9l6AYv8yK9K2mTrQGo8ugM",
  authDomain: "heartbreakers-5e62e.firebaseapp.com",
  projectId: "heartbreakers-5e62e",
  storageBucket: "heartbreakers-5e62e.appspot.com",
  messagingSenderId: "159105760015",
  appId: "1:159105760015:web:19c98e4e9800562d7f5c7a",
  measurementId: "G-HR86JKE98R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
